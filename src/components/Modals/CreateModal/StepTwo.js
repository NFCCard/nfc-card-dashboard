import { useFormik } from "formik";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import useAddAvatar from "../../../hooks/core/useAddAvatar";
import useUpdateUser from "../../../hooks/core/useUpdateUser";
import { createFormStepTwoValidaition } from "../../../validations/createFormStepTwoValidaition";
import SocialInput from "../../SocialInput/SocialInput";

const StepTwo = () => {
	const { mutate: createMutate } = useAddAvatar();
	const { mutate: patchMutate } = useUpdateUser();
	const usersImageId = Cookies.get("NEW_USER_ID");
	const [image, setImage] = useState("");

	const initialValues = {
		phone: "",
		email: "",
		perisanName: "",
		englishName: "",
		description_fa: "",
		description_en: "",
	};

	const socialMedias = [
		{
			icon: "",
			color: "",
			name: "telegram",
			link: "",
		},
		{
			icon: "",
			color: "",
			name: "instagram",
			link: "",
		},
		{
			icon: "",
			color: "",
			name: "whatsapp",
			link: "",
		},
		{
			icon: "",
			color: "",
			name: "linkedin",
			link: "",
		},
		{
			icon: "",
			color: "",
			name: "dribbble",
			link: "",
		},
		{
			icon: "",
			color: "",
			name: "pinterest",
			link: "",
		},
		{
			icon: "",
			color: "",
			name: "twitter",
			link: "",
		},
		{
			icon: "",
			color: "",
			name: "youtube",
			link: "",
		},
		{
			icon: "",
			color: "",
			name: "aparat",
			link: "",
		},
		{
			icon: "",
			color: "",
			name: "tiktok",
			link: "",
		},
		{
			icon: "",
			color: "",
			name: "spotify",
			link: "",
		},
		{
			icon: "",
			color: "",
			name: "soundcloud",
			link: "",
		},
		{
			icon: "",
			color: "",
			name: "twitch",
			link: "",
		},
		{
			icon: "",
			color: "",
			name: "github",
			link: "",
		},
	];

	const handleSubmit = (values) => {
		patchMutate({ userData: values, userId: usersImageId });
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

	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen((prev) => !prev);
	};

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
					<div className='d-flex  flex-column w-75 '>
						<div className='d-flex col-12 gap-3 justify-content-center align-items-center'>
							<div className='d-flex flex-column w-100'>
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
							<div className='d-flex flex-column w-100'>
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
						<div className=' gap-3 justify-content-center align-items-center'>
							<div className=''>
								{/* ---------------- persian name input -------------------------*/}
								<label htmlFor='PersianName'>Persian name</label>
								<input
									type='text'
									id='PersianName'
									className='textInput'
									autoComplete='off'
									onChange={(e) => {
										formik.setValues({
											...formik.values,
											perisanName: e.target.value,
										});
									}}
									onFocus={() => formik.setTouched({ perisanName: true })}
								/>
								{formik.errors.perisanName && formik.touched.perisanName && (
									<span className='usernameError'>
										{formik.errors.perisanName}
									</span>
								)}
								{/* ---------------- persian name input -------------------------*/}
							</div>
						</div>
						<div className=' gap-3 justify-content-center align-items-center'>
							<div className=''>
								{/* ---------------- english name input -------------------------*/}
								<label htmlFor='EnglishName'>English name</label>
								<input
									type='text'
									id='EnglishName'
									className='textInput'
									autoComplete='off'
									onChange={(e) => {
										formik.setValues({
											...formik.values,
											englishName: e.target.value,
										});
									}}
									onFocus={() => formik.setTouched({ englishName: true })}
								/>
								{formik.errors.englishName && formik.touched.englishName && (
									<span className='usernameError'>
										{formik.errors.englishName}
									</span>
								)}
								{/* ---------------- english name input -------------------------*/}
							</div>
						</div>
						<div className='d-flex col-12 gap-3 justify-content-center align-items-center'>
							<div className='d-flex flex-column w-100'>
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
							<div className='d-flex flex-column w-100'>
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
						<div className='d-flex flex-wrap w-100 justify-content-center align-items-center mb-4 mt-4 gap-1'>
							{socialMedias.map((social, index) => {
								return (
									<SocialInput
										open={isOpen}
										handleToggle={handleToggle}
										name={social.name}
										key={index}
										socialIcon={social.name}
									/>
								);
							})}
						</div>
					</div>
					<button type='submit'>submit</button>
				</form>
			</div>
		</div>
	);
};

export default StepTwo;
