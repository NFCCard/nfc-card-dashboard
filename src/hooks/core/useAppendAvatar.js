import { useContext } from "react";
import { useMutation } from "react-query";
import postRequest from "../../api/post";
import { UserDataContext } from "../../context/UserDataContextProvider";
import useGetUserList from "./useGetUserList";

const useAppendAvatar = () => {
	const { setUserData } = useContext(UserDataContext);
	const { refetch } = useGetUserList();

	return useMutation((value) => postRequest.appendAvatar(value), {
		onError: (error, variables, context) => {
			// An error happened!
		},
		onSuccess: (data, variables, context) => {
			refetch();
			setUserData({
				userProfileId: "",
			});
		},
	});
};

export default useAppendAvatar;
