import { useQuery } from "react-query";
import getRequest from "../../api/get";

const useGetUserList = ({ pageParam }) => {
	const { isLoading, isError, data, error, refetch } = useQuery(["getUser"], () =>
		getRequest.userList(pageParam)
	);
	return { isLoading, isError, data, error, refetch };
};

export default useGetUserList;
