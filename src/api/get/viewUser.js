import Cookies from "js-cookie";
import axios from "../axiosInstance";
import routes from "../routes";

const viewUser = async () => {
	const userId = JSON.parse(Cookies.get("INFO")).userId;
	const response = await axios.get(routes.core.viewUser + `${userId}`);
	return response.data;
};

export default viewUser;
