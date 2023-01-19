import * as yup from "yup";

export const editValidations = yup.object({
	phone: yup.number("Just number").required("*phone required"),
	email: yup
		.string()
		.email("writing email correctly")
		.required("*email required"),

	perisanFirstName: yup.string("number is worng").required("*Persian first name required"),
	persianLastName: yup.string("number	is worng").required("*Persian last name required"),

	englishFirstName: yup.string("number is worng").required("*English first name required"),
	englishLastName: yup.string("number is worng").required("*English last name required"),

	description_fa: yup.string(),
	description_en: yup.string(),
});
