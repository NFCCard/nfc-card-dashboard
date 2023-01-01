import * as yup from "yup";

export const loginValidations = yup.object({
	username: yup.string().required("نام کاربری ضروری است"),
	password: yup.string().required("پسورد ضروری است"),
});
