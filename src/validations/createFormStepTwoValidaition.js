import * as yup from "yup";

export const createFormStepTwoValidaition = yup.object({
	phone: yup.number("Just number").required("*phone required"),
	email: yup
		.string()
		.email("writing email correctly")
		.required("*email required"),

	firstName_fa: yup.string().required("*Persian first name required"),
	firstName_en: yup.string().required("*English first name required"),

	lastName_fa: yup.string().required("*Persian last name required"),
	lastName_en: yup.string().required("*English last name required"),

	description_fa: yup.string().required("*Persian description required"),
	description_en: yup.string().required("*English description required"),
});
