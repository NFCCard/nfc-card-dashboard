import { useQuery } from "react-query";
import getRequest from "../../api/get";

const useGetUserList = () => {
	const { isLoading, isError, data, error, refetch, status } = useQuery(
		"userList",
		getRequest.userList
	);
	return { isLoading, isError, data, error, refetch, status };
};

export default useGetUserList;
