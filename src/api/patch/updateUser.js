import axios from "../axiosInstance";
import routes from "../routes";

const updateUser = async ({ userData, userId }) => {
	console.log({ userId });
	console.log({ userData });
	const formdata = {
		phone: userData.phone,
		email: userData.email,
		socials: [],
		first_name: {
			en: "Ali",
			fa: "علی",
		},
		last_name: {
			en: "khoshbin",
			fa: "علینژاد",
		},
		description: {
			en: userData.description_en,
			fa: userData.description_fa,
		},
	};
	const response = await axios.patch(routes.core.updateUser + `${userId}`, formdata);
	return response.data;
};

export default updateUser;
