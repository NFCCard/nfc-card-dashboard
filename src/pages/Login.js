import React from "react";
import "./loginStyle.scss";
import { useFormik } from "formik";
import { loginValidations } from "../validations/loginValidation";

const Login = () => {
	//formik
	const initialValues = {
		email: "",
		password: "",
	};

	const handelSubmit = (values) => {
		console.log(values);
	};

	const formik = useFormik({
		initialValues: initialValues,
		onSubmit: (values) => {
			handelSubmit(values);
		},
		validationSchema: loginValidations,
	});

	return (
		<div className='loginForm_wrapper text-capitalize user-select-none '>
			<form action='submit' className='loginForm' onSubmit={formik.handleSubmit}>
				<div className='d-flex flex-column '>
					<div className='position-relative'>
						<label htmlFor='email'>email</label>
						<input
							type='text'
							id='email'
							onChange={(e) => {
								formik.setValues({ ...formik.values, email: e.target.value });
							}}
							onFocus={() => formik.setTouched({ email: true })}
						/>
						{formik.errors.email && formik.touched.email && (
							<span className='emailError'>{formik.errors.email}</span>
						)}
					</div>
					<div className='position-relative'>
						<label htmlFor='password'>password</label>
						<input
							type='password'
							id='password'
							onChange={(e) => {
								formik.setValues({ ...formik.values, password: e.target.value });
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
	);
};

export default Login;
