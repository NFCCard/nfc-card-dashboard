import { useMutation } from "react-query";
import postRequest from "../../api/post";
import useGetUserList from "./useGetUserList";

const useCreateUser = () => {
	const { refetch } = useGetUserList();

	return useMutation((value) => postRequest.createUser(value), {
		onError: (error, variables, context) => {
			// An error happened!
			console.log("error", error.response.data.message);
		},
		onSuccess: (data, variables, context) => {
			refetch();
		},
	});
};

export default useCreateUser;
