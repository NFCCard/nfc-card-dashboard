import { useContext } from "react";
import { useMutation } from "react-query";
import patchRequest from "../../api/patch";
import { UserDataContext } from "../../context/UserDataContextProvider";
import useGetUserList from "./useGetUserList";

const useUpdateUser = () => {
	const { refetch } = useGetUserList();
	const { setUserData } = useContext(UserDataContext);

	return useMutation((value) => patchRequest.updateUser(value), {
		onError: (error, variables, context) => {
			console.log(error);
		},
		onSuccess: (data, variables, context) => {
			console.log(data);
			refetch();
			setUserData({
				userProfileId: "",
			});
		},
	});
};

export default useUpdateUser;
