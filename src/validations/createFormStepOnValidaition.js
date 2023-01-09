import * as yup from "yup";

export const createFormStepOnValidaition = yup.object({
	username: yup.string().required("*username required"),
	password: yup.string().required("*password required"),
	password_confirmation: yup.string().required("*confirm password required"),
});
