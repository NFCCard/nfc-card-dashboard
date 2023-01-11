import { useFormik } from "formik";
import Cookies from "js-cookie";
import React, { useState } from "react";
import useAddAvatar from "../../../hooks/core/useAddAvatar";
import useUpdateUser from "../../../hooks/core/useUpdateUser";
import { createFormStepTwoValidaition } from "../../../validations/createFormStepTwoValidaition";

const StepTwo = () => {
	const { mutate: createMutate } = useAddAvatar();
	const { mutate: patchMutate } = useUpdateUser();
	const usersImageId = Cookies.get("NEW_USER_ID");
	const [image, setImage] = useState("");

	const initialValues = {
		phone: "",
		email: "",
		firstName_fa: "",
		firstName_en: "",
		lastName_fa: "",
		lastName_en: "",
		description_fa: "",
		description_en: "",
	};

	const handleSubmit = (values) => {
		patchMutate(values);
	};

	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: createFormStepTwoValidaition,
		onSubmit: (values) => {
			handleSubmit(values);
		},
	});

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
		<div className='Step '>
			<div className='Form_wrapper  user-select-none '>
				<form action='submit' className='Form' onSubmit={formik.handleSubmit}>
					<div className='input_wrapper  position-relative'>
						{/* ---------------- image input -------------------------*/}
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
					<label htmlFor={usersImageId} className='mb-3'>
						{!image
							? "Choose your avatar from your file"
							: "Your avatar append to your profile"}
					</label>
					{/* ---------------- image input -------------------------*/}
					<div className='d-flex justify-content-center align-items-center flex-column  '>
						<div className='d-flex col-12 gap-3'>
							<div className='d-flex flex-column'>
								{/* ---------------- phone input -------------------------*/}
								<label htmlFor='phone'>Phone number</label>
								<input
									type='text'
									id='phone'
									className='textInput'
									autoComplete='off'
									onChange={(e) => {
										formik.setValues({
											...formik.values,
											phone: e.target.value,
										});
									}}
									onFocus={() => formik.setTouched({ phone: true })}
								/>
								{formik.errors.phone && formik.touched.phone && (
									<span className='usernameError'>{formik.errors.phone}</span>
								)}
								{/* ---------------- phone input -------------------------*/}
							</div>
							<div className='d-flex flex-column'>
								{/* ---------------- email input -------------------------*/}
								<label htmlFor='email'>Email</label>
								<input
									type='text'
									id='email'
									className='textInput'
									autoComplete='off'
									onChange={(e) => {
										formik.setValues({
											...formik.values,
											email: e.target.value,
										});
									}}
									onFocus={() => formik.setTouched({ email: true })}
								/>
								{formik.errors.email && formik.touched.email && (
									<span className='usernameError'>{formik.errors.email}</span>
								)}
								{/* ---------------- email input -------------------------*/}
							</div>
						</div>
						<div className='d-flex col-12 gap-3'>
							<div className='d-flex flex-column'>
								{/* ---------------- fa first name input -------------------------*/}
								<label htmlFor='faFirstName'>Persian first name</label>
								<input
									type='text'
									id='faFirstName'
									className='textInput'
									autoComplete='off'
									onChange={(e) => {
										formik.setValues({
											...formik.values,
											firstName_fa: e.target.value,
										});
									}}
									onFocus={() => formik.setTouched({ firstName_fa: true })}
								/>
								{formik.errors.firstName_fa && formik.touched.firstName_fa && (
									<span className='usernameError'>
										{formik.errors.firstName_fa}
									</span>
								)}
								{/* ---------------- fa first name input -------------------------*/}
							</div>
							<div className='d-flex flex-column'>
								{/* ---------------- fa last name input -------------------------*/}
								<label htmlFor='faLastName'>Persian last name</label>
								<input
									type='text'
									id='faLastName'
									className='textInput'
									autoComplete='off'
									onChange={(e) => {
										formik.setValues({
											...formik.values,
											lastName_fa: e.target.value,
										});
									}}
									onFocus={() => formik.setTouched({ lastName_fa: true })}
								/>
								{formik.errors.lastName_fa && formik.touched.lastName_fa && (
									<span className='usernameError'>
										{formik.errors.lastName_fa}
									</span>
								)}
								{/* ---------------- en last name input -------------------------*/}
							</div>
						</div>
						<div className='d-flex col-12 gap-3'>
							<div className='d-flex flex-column'>
								{/* ---------------- en first name input -------------------------*/}
								<label htmlFor='enFirstName'>English first name</label>
								<input
									type='text'
									id='enFirstName'
									className='textInput'
									autoComplete='off'
									onChange={(e) => {
										formik.setValues({
											...formik.values,
											firstName_en: e.target.value,
										});
									}}
									onFocus={() => formik.setTouched({ firstName_en: true })}
								/>
								{formik.errors.firstName_en && formik.touched.firstName_en && (
									<span className='usernameError'>
										{formik.errors.firstName_en}
									</span>
								)}
								{/* ---------------- en first name input -------------------------*/}
							</div>
							<div className='d-flex flex-column'>
								{/* ---------------- en last name input -------------------------*/}
								<label htmlFor='enLastName'>English last name</label>
								<input
									type='text'
									id='enLastName'
									className='textInput'
									autoComplete='off'
									onChange={(e) => {
										formik.setValues({
											...formik.values,
											lastName_en: e.target.value,
										});
									}}
									onFocus={() => formik.setTouched({ lastName_en: true })}
								/>
								{formik.errors.lastName_en && formik.touched.lastName_en && (
									<span className='usernameError'>
										{formik.errors.lastName_en}
									</span>
								)}
								{/* ---------------- en last name input -------------------------*/}
							</div>
						</div>
						<div className='d-flex col-12 gap-3'>
							<div className='d-flex flex-column'>
								{/* ---------------- en description input -------------------------*/}
								<label htmlFor='enDescription'>English description</label>
								<textarea
									type='text'
									id='enDescription'
									className='textInput'
									autoComplete='off'
									onChange={(e) => {
										formik.setValues({
											...formik.values,
											description_en: e.target.value,
										});
									}}
									onFocus={() => formik.setTouched({ description_en: true })}
								/>
								{formik.errors.description_en && formik.touched.description_en && (
									<span className='usernameError'>
										{formik.errors.description_en}
									</span>
								)}
								{/* ---------------- en description input -------------------------*/}
							</div>
							<div className='d-flex flex-column'>
								{/* ---------------- fa description input -------------------------*/}
								<label htmlFor='faDescription'>Persian description</label>
								<textarea
									type='text'
									id='faDescription'
									className='textInput'
									autoComplete='off'
									onChange={(e) => {
										formik.setValues({
											...formik.values,
											description_fa: e.target.value,
										});
									}}
									onFocus={() => formik.setTouched({ description_fa: true })}
								/>
								{formik.errors.description_fa && formik.touched.description_fa && (
									<span className='usernameError'>
										{formik.errors.description_fa}
									</span>
								)}
								{/* ---------------- fa description input -------------------------*/}
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default StepTwo;
