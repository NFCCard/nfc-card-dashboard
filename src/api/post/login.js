import axios from "../axiosInstance";
import routes from "../routes";

const login = async (data) => {
	console.log(data);
	const response = await axios.post(routes.auth.login, data);

	return response.data;
};

export default login;
