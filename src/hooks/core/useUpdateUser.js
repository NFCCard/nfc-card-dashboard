import { useMutation } from "react-query";
import patchRequest from "../../api/patch";

const useUpdateUser = () => {
	return useMutation((value) => patchRequest.updateUser(value), {
		onError: (error, variables, context) => {
			console.log(error);
			// An error happened!
		},
		onSuccess: (data, variables, context) => {
			console.log(data);
		},
	});
};

export default useUpdateUser;
