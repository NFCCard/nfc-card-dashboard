import * as yup from "yup";

export const createFormStepTwoValidaition = yup.object({
	phone: yup.number("Just number").required("*phone required"),
	email: yup
		.string()
		.email("writing email correctly")
		.required("*email required"),

	perisanName: yup.string().required("*Persian name required"),

	englishName: yup.string().required("*English name required"),

	description_fa: yup.string().required("*Persian description required"),
	description_en: yup.string().required("*English description required"),
});
