import axios from "../axiosInstance";
import routes from "../routes";

const addAvatar = async (userAvatar) => {
	const imageFormData = new FormData();
	console.log({ userAvatar });
	imageFormData.append("resource", userAvatar);
	try {
		const response = await axios.post(routes.core.addAvatar, imageFormData);

		return response.data.data;
	} catch (error) {
		console.log(error);
	}
};

export default addAvatar;
