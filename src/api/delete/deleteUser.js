import axios from "../axiosInstance";
import routes from "../routes";

const deleteUser = async (userId) => {
	const response = await axios.delete(routes.core.deleteUser + `${userId}`);

	return response;
};

export default deleteUser;
