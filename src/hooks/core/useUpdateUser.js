import { useMutation } from "react-query";
import patchRequest from "../../api/patch";
import useGetUserList from "./useGetUserList";

const useUpdateUser = () => {
	const { refetch } = useGetUserList();

	return useMutation((value) => patchRequest.updateUser(value), {
		onError: (error, variables, context) => {
			console.log(error);
		},
		onSuccess: (data, variables, context) => {
			console.log(data);
			refetch();
		},
	});
};

export default useUpdateUser;
