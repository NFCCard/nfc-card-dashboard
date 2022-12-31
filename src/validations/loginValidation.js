import * as yup from "yup";

export const loginValidations = yup.object({
	email: yup
		.string()
		.email("فرمت ایمیل اشتباه است")
		.required("ایمیل ضروری است"),
	password: yup.string().required("پسورد ضروری است"),
});
