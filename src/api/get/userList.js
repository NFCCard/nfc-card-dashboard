import axios from "../axiosInstance";
import routes from "../routes";

const userList = async (pageNumber) => {
	console.log(pageNumber);
	const response = await axios.get(routes.core.userlist + `?page=${pageNumber}`, {
		params: { include_filter: "profile" },
	});

	return response.data;
};

export default userList;
