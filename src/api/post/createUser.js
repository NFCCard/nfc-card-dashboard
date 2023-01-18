import axios from "../axiosInstance";
import routes from "../routes";

const createUser = async (data) => {
	const response = await axios.post(routes.core.createUser, data);
	return response.data.data;
};

export default createUser;
