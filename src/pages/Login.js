import React from "react";
import "./loginStyle.scss";
import { useFormik } from "formik";
import { loginValidations } from "../validations/loginValidation";
import useLogin from "../hooks/auth/useLogin";

const Login = () => {
	const { mutate: loginMutate } = useLogin();

	//formik
	const initialValues = {
		username: "",
		password: "",
	};

	const handelSubmit = (values) => {
		console.log(values);
		loginMutate(values);
	};

	const formik = useFormik({
		initialValues: initialValues,
		onSubmit: (values) => {
			handelSubmit(values);
		},
		validationSchema: loginValidations,
	});

	return (
		<div className='loginPage'>
			<div className='loginForm_wrapper text-capitalize user-select-none '>
				<form action='submit' className='loginForm' onSubmit={formik.handleSubmit}>
					<div className='d-flex flex-column '>
						<div className='position-relative'>
							<label htmlFor='username'>username</label>
							<input
								type='text'
								id='username'
								autoComplete='on'
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
								id='password'
								autoComplete='on'
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

						<button type='submit'>Login</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
