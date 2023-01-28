import { useContext } from "react";
import { useMutation } from "react-query";
import patchRequest from "../../api/patch";
import { UserDataContext } from "../../context/UserDataContextProvider";
import useGetUserList from "./useGetUserList";

const useUpdateUser = () => {
	const { refetch } = useGetUserList(1);
	const { setUserData } = useContext(UserDataContext);

	return useMutation((value) => patchRequest.updateUser(value), {
		onError: (error, variables, context) => {},
		onSuccess: (data, variables, context) => {
			refetch();
			setUserData({
				userProfileId: "",
			});
		},
	});
};

export default useUpdateUser;
