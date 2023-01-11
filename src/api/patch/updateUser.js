import axios from "../axiosInstance";
import routes from "../routes";

const updateUser = async (data, userId) => {
	const response = await axios.patch(routes.core.updateUser + `${userId}`, data);
	return response.data;
};

export default updateUser;
