import axios from "../axiosInstance";
import routes from "../routes";

const addAvatar = async (data) => {
	const imageFormData = new FormData();
	imageFormData.append("resource", data);
	const response = await axios.post(routes.core.addAvatar, imageFormData);

	return response.data.data;
};

export default addAvatar;
