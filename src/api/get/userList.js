import axios from "../axiosInstance";
import routes from "../routes";

const userList = async (pageParam) => {
	const response = await axios.get(routes.core.userlist + `?page=${pageParam}`, {
		params: { include_filter: "profile" },
	});

	return response.data;
};

export default userList;
