import React from "react";
import { useFormik } from "formik";
import { createFormStepOnValidaition } from "../../../validations/createFormStepOnValidaition";

const StepOne = ({ onSubmit, isLoading }) => {
	const initialValues = {
		username: "",
		role_id: 2,
		password: "",
		password_confirmation: "",
	};

	const formik = useFormik({
		initialValues: initialValues,
		onSubmit: (values) => {
			onSubmit(values);
		},
		validationSchema: createFormStepOnValidaition,
	});

	return (
		<div className='Step'>
			<div className='Form_wrapper text-capitalize user-select-none '>
				<form action='submit' className='Form' onSubmit={formik.handleSubmit}>
					<div className='d-flex flex-column '>
						<div className='position-relative'>
							<label htmlFor='username'>username</label>
							<input
								type='text'
								id='username'
								className='textInput'
								autoComplete='off'
								onChange={(e) => {
									formik.setValues({
										...formik.values,
										username: e.target.value,
									});
								}}
								onFocus={() => formik.setTouched({ username: true })}
							/>
							{formik.errors.username && formik.touched.username && (
								<span className='usernameError'>{formik.errors.username}</span>
							)}
						</div>
						<div className='position-relative'>
							<label htmlFor='password'>password</label>
							<input
								type='password'
								className='textInput'
								id='password'
								autoComplete='off'
								onChange={(e) => {
									formik.setValues({
										...formik.values,
										password: e.target.value,
									});
								}}
								onFocus={() => formik.setTouched({ password: true })}
							/>
							{formik.errors.password && formik.touched.password && (
								<span className='passwordError'>{formik.errors.password}</span>
							)}
						</div>
						<div className='position-relative'>
							<label htmlFor='password_confirmation'>Confirm Password</label>
							<input
								type='password'
								className='textInput'
								id='password_confirmation'
								autoComplete='off'
								onChange={(e) => {
									formik.setValues({
										...formik.values,
										password_confirmation: e.target.value,
									});
								}}
								onFocus={() => formik.setTouched({ password_confirmation: true })}
							/>
							{formik.errors.password_confirmation &&
								formik.touched.password_confirmation && (
									<span className='passwordError'>
										{formik.errors.password_confirmation}
									</span>
								)}
						</div>
						<button type='submit' id='submit_form'>
							{isLoading ? "loading" : "submit"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default StepOne;
