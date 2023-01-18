import { useMutation } from "react-query";
import patchRequest from "../../api/patch";
import useGetUserList from "./useGetUserList";

const useUpdateUser = () => {
	const { refetch } = useGetUserList();

	return useMutation((value) => patchRequest.updateUser(value), {
		onError: (error, variables, context) => {},
		onSuccess: (data, variables, context) => {
			refetch();
		},
	});
};

export default useUpdateUser;
