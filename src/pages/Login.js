import React, { useEffect } from "react";
import "./loginStyle.scss";
import { useFormik } from "formik";
import { loginValidations } from "../validations/loginValidation";
import useLogin from "../hooks/auth/useLogin";
import Cookies from "js-cookie";
import { useAuth } from "../hooks/auth/useAuth";

const Login = () => {
	const { mutate, data, isLoading } = useLogin();

	//formik
	const initialValues = {
		username: "",
		password: "",
	};

	const handelSubmit = (values) => {
		console.log(values);
		mutate(values);
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
						<label htmlFor='username'>username</label>
						<input
							type='text'
							id='username'
							onChange={(e) => {
								formik.setValues({ ...formik.values, username: e.target.value });
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
