import { useMutation } from "react-query";
import postRequest from "../../api/post";

const useAppendAvatar = () => {
	return useMutation((value) => postRequest.appendAvatar(value), {
		onError: (error, variables, context) => {
			// An error happened!
		},
		onSuccess: (data, variables, context) => {},
	});
};

export default useAppendAvatar;
