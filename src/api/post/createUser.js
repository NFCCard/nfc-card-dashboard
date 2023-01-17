import Cookies from "js-cookie";
import axios from "../axiosInstance";
import routes from "../routes";

const createUser = async (data) => {
	const response = await axios.post(routes.core.createUser, data);
	// console.log(response);
	Cookies.set("NEW_USER_ID", response.data.data.id);
	return response.data.data;
};

export default createUser;
