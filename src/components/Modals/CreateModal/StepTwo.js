import { useFormik } from "formik";
import React, { useState } from "react";
import { useContext } from "react";
import { ModalContext } from "../../../context/ModalContextProvider";
import { socialContext } from "../../../context/SocialInputContextProvider";
import useAddAvatar from "../../../hooks/core/useAddAvatar";
import useUpdateUser from "../../../hooks/core/useUpdateUser";
import { createFormStepTwoValidaition } from "../../../validations/createFormStepTwoValidaition";
import SocialInput from "../../SocialInput/SocialInput";
import Compressor from "compressorjs";
import { UserDataContext } from "../../../context/UserDataContextProvider";

const StepTwo = () => {
	const { inputState, setInputState } = useContext(socialContext);
	const { userData } = useContext(UserDataContext);
	const { setModalState } = useContext(ModalContext);
	const { mutate: createMutate } = useAddAvatar();
	const { mutate: patchMutate, status } = useUpdateUser();
	const usersImageId = userData.userProfileId;
	const [image, setImage] = useState({
		imageAsFile: "",
		imageAsBlob: "",
	});

	const initialValues = {
		phone: "",
		email: "",
		perisanFirstName: "",
		perisanLastName: "",
		englishFirstName: "",
		englishLastName: "",
		description_fa: "",
		description_en: "",
	};

	const socialMedias = [
		{
			icon: "fab fa-telegram",
			background: "#0088CC",
			overlay: "#0088CC5d",
			name: "telegram",
			link: "",
			state: inputState.telegram,
		},
		{
			icon: "fab fa-instagram",
			background:
				"radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
			overlay:
				"radial-gradient(circle at 30% 107%, #fdf4975d 0%, #fdf4975d 5%, #fd59495d 45%,#d6249f5d 60%,#285AEB5d 90%)",
			name: "instagram",
			link: "",
			state: inputState.instagram,
		},
		{
			icon: "fab fa-whatsapp",
			background: "#4FCE5d",
			overlay: "#4FCE",
			name: "whatsapp",
			link: "",
			state: inputState.whatsapp,
		},
		{
			icon: "fab fa-linkedin",
			background: "#006192",
			overlay: "#0061925d",
			name: "linkedin",
			link: "",
			state: inputState.linkedin,
		},
		{
			icon: "fab fa-dribbble",
			background: "#E94C88",
			overlay: "#E94C885d",
			name: "dribbble",
			link: "",
			state: inputState.dribbble,
		},
		{
			icon: "fab fa-pinterest",
			background: "#F0002A",
			overlay: "#F0002A5d",
			name: "pinterest",
			link: "",
			state: inputState.pinterest,
		},
		{
			icon: "fab fa-twitter",
			background: "#1DA1F2",
			overlay: "#1DA1F25d",
			name: "twitter",
			link: "",
			state: inputState.twitter,
		},
		{
			icon: "fab fa-youtube",
			background: "#FF0000",
			overlay: "#FF00005d",
			name: "youtube",
			link: "",
			state: inputState.youtube,
		},
		{
			svg: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 68.33 68.33'
					width={27}
					height={34}
				>
					<defs>
						<style></style>
					</defs>
					<title>icon--color-black</title>
					<g id='Layer_2' data-name='Layer 2'>
						<g id='brand'>
							<g id='icon--color-black'>
								<path
									className='cls-1'
									d='M29.49,2,23.2.36A10.58,10.58,0,0,0,10.25,7.87L8.68,13.8A32.4,32.4,0,0,1,29.49,2Z'
									fill='#231f20'
								/>
								<path
									className='cls-1'
									d='M1.9,39.33.36,45.14A10.58,10.58,0,0,0,7.87,58.08l6,1.6A32.41,32.41,0,0,1,1.9,39.33Z'
									fill='#231f20'
								/>
								<path
									className='cls-1'
									d='M60.46,10.25,53.73,8.46a32.4,32.4,0,0,1,12.4,21.7l1.85-7A10.58,10.58,0,0,0,60.46,10.25Z'
									fill='#231f20'
								/>
								<path
									className='cls-1'
									d='M38.69,66.26,45.14,68a10.58,10.58,0,0,0,12.94-7.51l1.82-6.84A32.42,32.42,0,0,1,38.69,66.26Z'
									fill='#231f20'
								/>
								<path
									className='cls-2'
									d='M34.17,4.54A29.63,29.63,0,1,0,63.79,34.17,29.63,29.63,0,0,0,34.17,4.54ZM17.39,19.32a8.46,8.46,0,1,1,6.71,9.91A8.46,8.46,0,0,1,17.39,19.32ZM29.7,44.92A8.46,8.46,0,1,1,23,35,8.46,8.46,0,0,1,29.7,44.92Zm3.59-6.85a3.76,3.76,0,1,1,4.41-3A3.76,3.76,0,0,1,33.29,38.07ZM50.94,49a8.46,8.46,0,1,1-6.71-9.91A8.46,8.46,0,0,1,50.94,49Zm-5.6-15.68a8.46,8.46,0,1,1,9.91-6.71A8.46,8.46,0,0,1,45.34,33.33Z'
									fill='#ed145b'
								/>
							</g>
						</g>
					</g>
				</svg>
			),
			svgOverlay: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 68.33 68.33'
					width={27}
					height={34}
				>
					<defs>
						<style></style>
					</defs>
					<title>icon--color-black</title>
					<g id='Layer_2' data-name='Layer 2'>
						<g id='brand'>
							<g id='icon--color-black'>
								<path
									className='cls-1'
									d='M29.49,2,23.2.36A10.58,10.58,0,0,0,10.25,7.87L8.68,13.8A32.4,32.4,0,0,1,29.49,2Z'
									fill='#231f205d'
								/>
								<path
									className='cls-1'
									d='M1.9,39.33.36,45.14A10.58,10.58,0,0,0,7.87,58.08l6,1.6A32.41,32.41,0,0,1,1.9,39.33Z'
									fill='#231f205d'
								/>
								<path
									className='cls-1'
									d='M60.46,10.25,53.73,8.46a32.4,32.4,0,0,1,12.4,21.7l1.85-7A10.58,10.58,0,0,0,60.46,10.25Z'
									fill='#231f205d'
								/>
								<path
									className='cls-1'
									d='M38.69,66.26,45.14,68a10.58,10.58,0,0,0,12.94-7.51l1.82-6.84A32.42,32.42,0,0,1,38.69,66.26Z'
									fill='#231f205d'
								/>
								<path
									className='cls-2'
									d='M34.17,4.54A29.63,29.63,0,1,0,63.79,34.17,29.63,29.63,0,0,0,34.17,4.54ZM17.39,19.32a8.46,8.46,0,1,1,6.71,9.91A8.46,8.46,0,0,1,17.39,19.32ZM29.7,44.92A8.46,8.46,0,1,1,23,35,8.46,8.46,0,0,1,29.7,44.92Zm3.59-6.85a3.76,3.76,0,1,1,4.41-3A3.76,3.76,0,0,1,33.29,38.07ZM50.94,49a8.46,8.46,0,1,1-6.71-9.91A8.46,8.46,0,0,1,50.94,49Zm-5.6-15.68a8.46,8.46,0,1,1,9.91-6.71A8.46,8.46,0,0,1,45.34,33.33Z'
									fill='#ed145b5d'
								/>
							</g>
						</g>
					</g>
				</svg>
			),
			icon: "",
			background: "#c6c6c6",
			overlay: "#c6c6c6d",
			name: "aparat",
			link: "",
			state: inputState.aparat,
		},
		{
			icon: "fab fa-tiktok",
			background: "#69C9D0",
			overlay: "#69C9D05d",
			name: "tiktok",
			link: "",
			state: inputState.tiktok,
		},
		{
			icon: "fab fa-spotify",
			background: "#1ED761",
			overlay: "#1ED7615d",
			name: "spotify",
			link: "",
			state: inputState.spotify,
		},
		{
			icon: "fab fa-soundcloud",
			background:
				"-webkit-linear-gradient(15deg , #FF9533 ,  #FF7F34 , #FE6D35 , #FF5836 ,  #FF4137)",
			overlay:
				"-webkit-linear-gradient(15deg , #FF95335d ,  #FF7F345d , #FE6D355d , #FF58365d ,  #FF41375d)",
			name: "soundcloud",
			link: "",
			state: inputState.soundcloud,
		},
		{
			icon: "fab fa-twitch",
			background: "#6441A4",
			overlay: "#6441A45d",
			name: "twitch",
			link: "",
			state: inputState.twitch,
		},
		{
			icon: "fab fa-github",
			background: "#4183C4",
			overlay: "#4183C45d",
			name: "github",
			link: "",
			state: inputState.github,
		},
		{
			icon: "far fa-globe",
			background: "#999999",
			overlay: "#9999995d",
			name: "website",
			link: "",
			state: inputState.website,
		},
	];

	const handleSubmit = (values) => {
		let socialMediaList = [];
		console.log(values);
		if (values.telegram.length)
			socialMediaList.push({ social: "telegram", url: values.telegram });
		if (values.instagram.length)
			socialMediaList.push({ social: "instagram", url: values.instagram });
		if (values.whatsapp.length)
			socialMediaList.push({ social: "whatsapp", url: values.whatsapp });
		if (values.linkedin.length)
			socialMediaList.push({ social: "linkedin", url: values.linkedin });
		if (values.dribbble.length)
			socialMediaList.push({ social: "dribbble", url: values.dribbble });
		if (values.pinterest.length)
			socialMediaList.push({ social: "pinterest", url: values.pinterest });
		if (values.twitter.length) socialMediaList.push({ social: "twitter", url: values.twitter });
		if (values.youtube.length) socialMediaList.push({ social: "youtube", url: values.youtube });
		if (values.aparat.length) socialMediaList.push({ social: "aparat", url: values.aparat });
		if (values.tiktok.length) socialMediaList.push({ social: "tiktok", url: values.tiktok });
		if (values.spotify.length) socialMediaList.push({ social: "spotify", url: values.spotify });
		if (values.soundcloud.length)
			socialMediaList.push({ social: "soundcloud", url: values.soundcloud });
		if (values.twitch.length) socialMediaList.push({ social: "twitch", url: values.twitch });
		if (values.github.length) socialMediaList.push({ social: "github", url: values.github });
		if (values.website.length) socialMediaList.push({ social: "website", url: values.website });

		const formdata = {
			phone: values.phone,
			email: values.email,
			socials: socialMediaList,
			first_name: {
				en: "alireza",
				fa: "علیرضا",
			},
			last_name: {
				en: "alinezhad",
				fa: "علینژاد",
			},
			description: {
				en: values.description_en,
				fa: values.description_fa,
			},
		};
		patchMutate({ values: formdata, userId: usersImageId });
		if (status === "idle") {
			setModalState((prev) => ({
				...prev,
				create: false,
			}));
		}
	};

	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: createFormStepTwoValidaition,
		onSubmit: (values) => {
			handleSubmit(values);
		},
	});

	const handleImage = (e) => {
		new Compressor(e.target.files[0], {
			quality: 0.4,
			convertTypes: ["image/jpg"],
			success: (result) => {
				var file = new File([result], result.name);
				const fileReader = new FileReader();
				if (file) {
					fileReader.readAsDataURL(file);
				}

				fileReader.addEventListener("load", () => {
					setImage({ imageAsFile: file, imageAsBlob: fileReader.result });
				});
				createMutate(file);
			},
		});
	};

	const [inputIndex, setInputIndex] = useState();

	const handleToggle = (name, index) => {
		setInputIndex(index);
		setInputState(() => ({
			[name]: true,
		}));
	};

	const dissmis = (name) => {
		setInputState(() => ({
			[name]: false,
		}));
	};

	return (
		<div className='Step d-flex flex-column item'>
			<div className='Form_wrapper  user-select-none '>
				<form action='submit' className='Form' onSubmit={formik.handleSubmit}>
					<div className='d-flex align-items-center flex-column'>
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
								style={
									image.imageAsBlob ? { display: "unset" } : { display: "none" }
								}
							>
								<img src={image.imageAsBlob} alt='preview' />
							</div>
						</div>
						<label htmlFor={usersImageId} className='mb-3'>
							Choose an avatar
						</label>
					</div>
					<div>
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
						<div className=' d-flex col-12 gap-3 justify-content-center align-items-center'>
							<div className='d-flex flex-column w-75 position-relative'>
								{/* ---------------- persian first name input -------------------------*/}

								<label htmlFor='PersianFirstName'>Persian first name</label>
								<input
									type='text'
									id='PersianFirstName'
									className='textInput'
									autoComplete='off'
									onChange={(e) => {
										formik.setValues({
											...formik.values,
											perisanFirstName: e.target.value,
										});
									}}
									onFocus={() => formik.setTouched({ perisanFirstName: true })}
								/>
								{formik.errors.perisanFirstName &&
									formik.touched.perisanFirstName && (
										<span className='usernameError'>
											{formik.errors.perisanFirstName}
										</span>
									)}
								{/* ----------------  persian first name input -------------------------*/}
							</div>
							<div className='d-flex flex-column w-75 position-relative'>
								{/* ---------------- persian last name input -------------------------*/}
								<label htmlFor='PersianLastName'>Persian last name</label>
								<input
									type='text'
									id='PersianLastName'
									className='textInput'
									autoComplete='off'
									onChange={(e) => {
										formik.setValues({
											...formik.values,
											perisanLastName: e.target.value,
										});
									}}
									onFocus={() => formik.setTouched({ perisanLastName: true })}
								/>
								{formik.errors.perisanLastName &&
									formik.touched.perisanLastName && (
										<span className='usernameError'>
											{formik.errors.perisanLastName}
										</span>
									)}
								{/* ----------------  persian first name input -------------------------*/}
							</div>
						</div>
						<div className=' d-flex col-12 gap-3 justify-content-center align-items-center'>
							<div className='d-flex flex-column w-75 position-relative'>
								{/* ---------------- english first name input -------------------------*/}
								<label htmlFor='EnglishFirstName'>English first name</label>
								<input
									type='text'
									id='EnglishFirstName'
									className='textInput'
									autoComplete='off'
									onChange={(e) => {
										formik.setValues({
											...formik.values,
											englishFirstName: e.target.value,
										});
									}}
									onFocus={() => formik.setTouched({ englishFirstName: true })}
								/>
								{formik.errors.englishFirstName &&
									formik.touched.englishFirstName && (
										<span className='usernameError'>
											{formik.errors.englishFirstName}
										</span>
									)}
								{/* ---------------- english first name input -------------------------*/}
							</div>
							<div className='d-flex flex-column w-75 position-relative'>
								{/* ---------------- english last name input -------------------------*/}
								<label htmlFor='EnglishLastName'>English last name</label>
								<input
									type='text'
									id='EnglishLastName'
									className='textInput'
									autoComplete='off'
									onChange={(e) => {
										formik.setValues({
											...formik.values,
											englishLastName: e.target.value,
										});
									}}
									onFocus={() => formik.setTouched({ englishLastName: true })}
								/>
								{formik.errors.englishLastName &&
									formik.touched.englishLastName && (
										<span className='usernameError'>
											{formik.errors.englishLastName}
										</span>
									)}
								{/* ---------------- english last name input -------------------------*/}
							</div>
						</div>
						<div className='d-flex col-12 gap-3 justify-content-center align-items-center'>
							<div className='d-flex flex-column w-75'>
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
							<div className='d-flex flex-column w-75'>
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
						<div className='d-flex flex-wrap w-100 justify-content-center align-items-center mb-4 mt-4 gap-1 position-relative'>
							{socialMedias.map((social, index) => {
								const nameOfSocial = social.name;
								const socialItems = Object.entries(formik.values).find(
									(item) => item[0] === nameOfSocial
								);

								console.log(socialItems && socialItems[1]);

								return (
									<SocialInput
										value={socialItems ? socialItems[1] : ""}
										placeholder='https://www. link . domain / ...'
										inputID={index && inputIndex}
										open={social.state}
										handleToggle={() => handleToggle(social.name, index)}
										name={social.name}
										key={index}
										iconClass={social.icon}
										background={
											socialItems && socialItems[1]
												? social.background
												: social.overlay
										}
										svg={
											socialItems && socialItems[1]
												? social.svg
												: social.svgOverlay
										}
										onSubmit={() => dissmis(social.name, index)}
										onChange={(e) => {
											formik.setValues({
												...formik.values,
												[nameOfSocial]: e.target.value,
											});
										}}
									/>
								);
							})}
						</div>
						<div className='d-flex justify-content-end'>
							<button type='submit' id='submitForm2'>
								submit
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default StepTwo;
