import { useContext } from "react";
import { useMutation } from "react-query";
import postRequest from "../../api/post";
import { UserDataContext } from "../../context/UserDataContextProvider";
import useAppendAvatar from "./useAppendAvatar";
import useGetUserList from "./useGetUserList";

const useAddAvatar = () => {
	const { refetch } = useGetUserList();
	const { userData } = useContext(UserDataContext);
	const { mutate: addMutate } = useAppendAvatar();

	return useMutation((value) => postRequest.addAvatar(value), {
		onError: (error, variables, context) => {
			// An error happened!
		},
		onSuccess: (data, variables, context) => {
			const userID = userData.userProfileId;
			addMutate({ imageID: data.id, userID: userID });
			refetch();
		},
	});
};

export default useAddAvatar;
