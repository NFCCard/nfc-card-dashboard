import axios from "../axiosInstance";
import routes from "../routes";

const updateUser = async ({ values, userId }) => {
	const response = await axios.patch(routes.core.updateUser + `${userId}`, values);
	return response.data;
};

export default updateUser;
