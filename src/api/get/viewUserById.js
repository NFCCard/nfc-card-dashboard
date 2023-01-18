import axios from "../axiosInstance";
import routes from "../routes";

const viewUserById = async (userId) => {
	const response = await axios.get(routes.core.viewById + `${userId}/profile`);
	return response.data;
};

export default viewUserById;
