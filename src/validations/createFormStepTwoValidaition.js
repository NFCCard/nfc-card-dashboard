import * as yup from "yup";

export const createFormStepTwoValidaition = yup.object({
	phone: yup.string().required("*Phone number required"),
	email: yup.string().required("*Email required"),
	en: yup.string().required("*Field required"),
	fa: yup.string().required("*Field required"),
});
