import { useContext } from "react";
import { useMutation } from "react-query";
import getRequest from "../../api/get";
import { UserDataContext } from "../../context/UserDataContextProvider";

const useViewUsersById = () => {
	const { setUserData } = useContext(UserDataContext);
	return useMutation((userId) => getRequest.viewUserById(userId), {
		onError: (error, variables, context) => {
			// An error happened!
		},
		onSuccess: (data, variables, context) => {
			setUserData((prev) => ({
				...prev,
				userProfileId: data.data.id,
			}));
		},
	});
};

export default useViewUsersById;
