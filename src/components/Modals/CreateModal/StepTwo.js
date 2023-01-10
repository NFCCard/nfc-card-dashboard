import { useFormik } from "formik";
import Cookies from "js-cookie";
import React, { useState } from "react";
import useAddAvatar from "../../../hooks/core/useAddAvatar";
import { createFormStepTwoValidaition } from "../../../validations/createFormStepTwoValidaition";

const StepTwo = () => {
	const { mutate: createMutate } = useAddAvatar();
	const usersImageId = Cookies.get("NEW_USER_ID");
	const [image, setImage] = useState("");

	const initialValues = {
		phone: "",
		email: 1,
		first_name: {
			en: "",
			fa: "",
		},
		last_name: {
			en: "",
			fa: "",
		},
		description: {
			en: "",
			fa: "",
		},
	};

	const handelSubmit = (values) => {
		// createMutate(values);
	};

	// const formik = useFormik({
	// 	initialValues: initialValues,
	// 	onSubmit: (values) => {
	// 		onSubmit(values);
	// 	},
	// 	validationSchema: createFormStepOnValidaition,
	// });

	const handleImage = async (e) => {
		const file = e.target.files[0];
		const base64 = await convertBase64(file);
		setImage(base64);
		createMutate(file);
	};

	const convertBase64 = (file) => {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file);

			fileReader.onload = () => {
				resolve(fileReader.result);
			};

			fileReader.onerror = (error) => {
				reject(error);
			};
		});
	};

	// onSubmit={formik.handleSubmit}

	return (
		<div className='Step'>
			<div className='Form_wrapper  user-select-none '>
				<form action='submit' className='Form'>
					<div className='input_wrapper  position-relative'>
						<input
							type='file'
							accept='image/*'
							id={usersImageId}
							className='imageInput'
							onChange={(e) => handleImage(e)}
						/>
						<div
							className='preview'
							id='preview'
							style={image ? { display: "unset" } : { display: "none" }}
						>
							<img src={image} alt='preview' />
						</div>
					</div>
					<label htmlFor={usersImageId}>
						{!image
							? "Choose your avatar from your file"
							: "Your avatar append to your profile"}
					</label>
					<label htmlFor='username'>username</label>
					{/* <input
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
					)} */}
				</form>
			</div>
		</div>
	);
};

export default StepTwo;
