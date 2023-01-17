import Cookies from "js-cookie";
import { useMutation } from "react-query";
import postRequest from "../../api/post";
import useAppendAvatar from "./useAppendAvatar";

const useAddAvatar = () => {
	const { mutate: addMutate } = useAppendAvatar();

	return useMutation((value) => postRequest.addAvatar(value), {
		onError: (error, variables, context) => {
			// An error happened!
		},
		onSuccess: (data, variables, context) => {
			const userID = Cookies.get("NEW_USER_ID");
			console.log(data);
			console.log(userID);
			addMutate({ imageID: data.id, userID: userID });
		},
	});
};

export default useAddAvatar;
