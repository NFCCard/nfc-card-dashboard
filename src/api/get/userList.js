import axios from "../axiosInstance";
import routes from "../routes";

const userList = async (data) => {
	const response = await axios.get(routes.core.userlist, {
		params: { include_filter: "profile" },
	});

	return response.data;
};

export default userList;
