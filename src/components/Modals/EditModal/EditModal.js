import React, { useContext, useState } from "react";
import ModalCore from "../Base/ModalCore";
import { ModalContext } from "../../../context/ModalContextProvider";
import { socialContext } from "../../../context/SocialInputContextProvider";
import useAddAvatar from "../../../hooks/core/useAddAvatar";
import useUpdateUser from "../../../hooks/core/useUpdateUser";
import { useFormik } from "formik";
import { editValidations } from "../../../validations/editValidations";
import Compressor from "compressorjs";
import SocialInput from "../../SocialInput/SocialInput";
import { UserDataContext } from "../../../context/UserDataContextProvider";
import { useEffect } from "react";

const EditModal = ({ userId, userData }) => {
	const { setUserData } = useContext(UserDataContext);
	const { setModalState, modalState } = useContext(ModalContext);
	const [initialValues, setInitialValues] = useState({
		phone: "",
		email: "",
		perisanFirstName: "",
		persianLastName: "",
		englishFirstName: "",
		englishLastName: "",
		description_fa: "",
		description_en: "",
	});
	const handleDismiss = () => {
		setModalState((prev) => ({
			...prev,
			edit: false,
		}));
	};

	useEffect(() => {
		if (userData) {
			console.log(userData);
			formik.setValues({
				phone: userData.profile.phone,
				email: userData.profile.email,
				perisanFirstName: userData.profile.perisanFirstName,
				persianLastName: userData.profile.persianLastName,
				englishFirstName: userData.profile.englishFirstName,
				englishLastName: userData.profile.englishLastName,
				description_fa: userData.profile.description.fa,
				description_en: userData.profile.description.en,
			});
		}

		console.log(formik.values);
	}, [userData]);

	const { inputState, setInputState } = useContext(socialContext);
	const { mutate: createMutate } = useAddAvatar();
	const { mutate: patchMutate, status } = useUpdateUser();
	const [image, setImage] = useState({
		imageAsFile: "",
		imageAsBlob: "",
	});

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
		if (values.telegram)
			socialMediaList.push({
				social: "telegram",
				url: `https://t.me/joinchat/${values.telegram}`,
			});
		if (values.instagram)
			socialMediaList.push({
				social: "instagram",
				url: `https://www.instagram.com/${values.instagram}`,
			});
		if (values.whatsapp)
			socialMediaList.push({ social: "whatsapp", url: `https://wa.me/${values.whatsapp}` });
		if (values.linkedin)
			socialMediaList.push({
				social: "linkedin",
				url: `https://www.linkedin.com/${values.linkedin}`,
			});
		if (values.dribbble)
			socialMediaList.push({
				social: "dribbble",
				url: `https://www.dribbble.com/${values.dribbble}`,
			});
		if (values.pinterest)
			socialMediaList.push({
				social: "pinterest",
				url: `https://www.pinterest.com/${values.pinterest}`,
			});
		if (values.twitter)
			socialMediaList.push({
				social: "twitter",
				url: `https://www.twitter.com/${values.twitter}`,
			});
		if (values.youtube)
			socialMediaList.push({
				social: "youtube",
				url: `https://www.youtube.com/channel/${values.youtube}`,
			});
		if (values.aparat)
			socialMediaList.push({
				social: "aparat",
				url: `https://www.aparat.com/${values.aparat}`,
			});
		if (values.tiktok)
			socialMediaList.push({
				social: "tiktok",
				url: `https://www.tiktok.com/${values.tiktok}`,
			});
		if (values.spotify)
			socialMediaList.push({
				social: "spotify",
				url: `https://www.spotify.com/${values.spotify}`,
			});
		if (values.soundcloud)
			socialMediaList.push({
				social: "soundcloud",
				url: `https://www.soundcloud.com/${values.soundcloud}`,
			});
		if (values.twitch)
			socialMediaList.push({
				social: "twitch",
				url: `https://www.twitch.com/${values.twitch}`,
			});
		if (values.github)
			socialMediaList.push({ social: "github", url: `https://github.com/${values.github}` });
		if (values.website) socialMediaList.push({ social: "website", url: values.website });

		const formdata = {
			phone: formik.values.phone,
			email: formik.values.email,
			socials: socialMediaList,
			first_name: {
				en: formik.values.englishFirstName,
				fa: formik.values.perisanFirstName,
			},
			last_name: {
				en: formik.values.englishLastName,
				fa: formik.values.persianLastName,
			},
			description: {
				en: formik.values.description_en,
				fa: formik.values.description_fa,
			},
		};
		patchMutate({ values: formdata, userId: userId });
		if (status === "idle") {
			setModalState((prev) => ({
				...prev,
				edit: false,
			}));
		}
	};

	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: editValidations,
		onSubmit: (values) => {
			handleSubmit(values);
		},
	});

	const handleImage = (e) => {
		setUserData({
			userProfileId: userId,
		});
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
		<ModalCore open={modalState.edit} onDismiss={handleDismiss}>
			{userData ? (
				<div className='Step d-flex flex-column'>
					<span className='text-center mb-2'> User name : {userData.username}</span>
					<div className='Form_wrapper  user-select-none '>
						<form action='submit' className='Form' onSubmit={formik.handleSubmit}>
							<div className='input_wrapper  position-relative'>
								{/* ---------------- image input -------------------------*/}
								<div className='avatarInput'>
									<input
										type='file'
										accept='image/*'
										id={userId}
										className='imageInput'
										onChange={(e) => handleImage(e)}
									/>
									<i className='fa fa-edit edit_icon'></i>
								</div>
								<div className='preview' id='preview'>
									<img
										src={
											userData && userData.profile.resource
												? userData.profile.resource.url
												: image.imageAsBlob
										}
										alt='preview'
									/>
								</div>
							</div>
							<label htmlFor={userId} className='mb-3'>
								Choose your avatar from your file
							</label>
							{/* ---------------- image input -------------------------*/}
							<div className='d-flex  flex-column w-75 '>
								<div className='d-flex col-12 gap-3 justify-content-center align-items-center'>
									<div className='d-flex flex-column w-100 position-relative'>
										{/* ---------------- phone input -------------------------*/}
										<label htmlFor='phone'>Phone number</label>
										<input
											value={formik.values.phone}
											type='text'
											id='phone'
											className='textInput '
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
											<span className='usernameError'>
												{formik.errors.phone}
											</span>
										)}
										{/* ---------------- phone input -------------------------*/}
									</div>
									<div className='d-flex flex-column w-100 position-relative'>
										{/* ---------------- email input -------------------------*/}
										<label htmlFor='email'>Email</label>
										<input
											value={formik.values.email}
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
											<span className='usernameError'>
												{formik.errors.email}
											</span>
										)}
										{/* ---------------- email input -------------------------*/}
									</div>
								</div>
								<div className=' gap-3 justify-content-center align-items-center position-relative'>
									<div className=''>
										{/* ---------------- persian name input -------------------------*/}
										<label htmlFor='PersianName'>Persian first name</label>
										<input
											value={formik.values.perisanFirstName}
											type='text'
											id='PersianName'
											className='textInput'
											autoComplete='off'
											onChange={(e) => {
												formik.setValues({
													...formik.values,
													perisanFirstName: e.target.value,
												});
											}}
											onFocus={() =>
												formik.setTouched({ perisanFirstName: true })
											}
										/>
										{formik.errors.perisanFirstName &&
											formik.touched.perisanFirstName && (
												<span className='usernameError'>
													{formik.errors.perisanFirstName}
												</span>
											)}
										{/* ---------------- persian name input -------------------------*/}
										{/* ---------------- persian last input -------------------------*/}
										<label htmlFor='PersianLastName'>Persian last name</label>
										<input
											value={formik.values.persianLastName}
											type='text'
											id='PersianLastName'
											className='textInput'
											autoComplete='off'
											onChange={(e) => {
												formik.setValues({
													...formik.values,
													persianLastName: e.target.value,
												});
											}}
											onFocus={() =>
												formik.setTouched({ persianLastName: true })
											}
										/>
										{formik.errors.persianLastName &&
											formik.touched.persianLastName && (
												<span className='usernameError'>
													{formik.errors.persianLastName}
												</span>
											)}
										{/* ---------------- persian last input -------------------------*/}
									</div>
								</div>
								<div className=' gap-3 justify-content-center align-items-center '>
									<div className='position-relative'>
										{/* ---------------- english first name input -------------------------*/}
										<label htmlFor='EnglishFirstName'>English first name</label>
										<input
											value={formik.values.englishFirstName}
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
											onFocus={() =>
												formik.setTouched({ englishFirstName: true })
											}
										/>
										{formik.errors.englishFirstName &&
											formik.touched.englishFirstName && (
												<span className='usernameError'>
													{formik.errors.englishFirstName}
												</span>
											)}
										{/* ---------------- english first name input -------------------------*/}
										{/* ---------------- english last name input -------------------------*/}
										<label htmlFor='EnglishLastName'>English last name</label>
										<input
											value={formik.values.englishLastName}
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
											onFocus={() =>
												formik.setTouched({ englishLastName: true })
											}
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
								<div className='d-flex col-12 gap-3 justify-content-center align-items-center '>
									<div className='d-flex flex-column w-100 position-relative'>
										{/* ---------------- en description input -------------------------*/}
										<label htmlFor='enDescription'>English description</label>
										<textarea
											value={formik.values.description_en}
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
											onFocus={() =>
												formik.setTouched({ description_en: true })
											}
										/>
										{formik.errors.description_en &&
											formik.touched.description_en && (
												<span className='usernameError'>
													{formik.errors.description_en}
												</span>
											)}
										{/* ---------------- en description input -------------------------*/}
									</div>
									<div className='d-flex flex-column w-100 position-relative'>
										{/* ---------------- fa description input -------------------------*/}
										<label htmlFor='faDescription'>Persian description</label>
										<textarea
											value={formik.values.description_fa}
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
											onFocus={() =>
												formik.setTouched({ description_fa: true })
											}
										/>
										{formik.errors.description_fa &&
											formik.touched.description_fa && (
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
												inputID={index && inputIndex}
												open={social.state}
												handleToggle={() =>
													handleToggle(social.name, index)
												}
												name={social.name}
												key={index}
												iconClass={social.icon}
												background={
													social.state
														? social.background
														: social.overlay
												}
												svg={social.state ? social.svg : social.svgOverlay}
												onSubmit={() => dissmis(social.name, index)}
												onChange={(e) => {
													const nameOfSocial = social.name;
													formik.setValues({
														...formik.values,
														[nameOfSocial]: e.target.value,
													});
												}}
											/>
										);
									})}
								</div>
							</div>
							<button type='submit' id='submitForm2'>
								submit
							</button>
						</form>
					</div>
				</div>
			) : null}
		</ModalCore>
	);
};

export default EditModal;
