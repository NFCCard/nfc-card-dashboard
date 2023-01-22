import { useMutation, useQuery } from "react-query";
import getRequest from "../../api/get";

const useGetUserList = () => {
	return useMutation((page) => getRequest.userList(page), {
		onError: (error, variables, context) => {
			// An error happened!
		},
		onSuccess: (data, variables, context) => {
			console.log(data);
		},
	});
};

export default useGetUserList;

// const { isLoading, isError, data, error, refetch, status } = useQuery(
// 	"userList",
// 	getRequest.userList
// );
// return { isLoading, isError, data, error, refetch, status };
