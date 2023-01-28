import { useMutation } from "react-query";
import postRequest from "../../api/post";
import useGetUserList from "./useGetUserList";

const useAppendAvatar = () => {
	const { refetch } = useGetUserList(1);

	return useMutation((value) => postRequest.appendAvatar(value), {
		onError: (error, variables, context) => {
			// An error happened!
		},
		onSuccess: (data, variables, context) => {
			refetch();
		},
	});
};

export default useAppendAvatar;
