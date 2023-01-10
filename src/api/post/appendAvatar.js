import axios from "../axiosInstance";
import routes from "../routes";

const appendAvatar = async ({ userID, imageID }) => {
	const response = await axios.post(routes.core.appendAvatar + `${userID}/resource/${imageID}`);
	return response.data;
};

export default appendAvatar;
