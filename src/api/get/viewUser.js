import axios from "../axiosInstance";
import routes from "../routes";

const viewUser = async () => {
	const response = await axios.get(routes.core.viewUser + `${1}`);

	return response.data;
};

export default viewUser;
