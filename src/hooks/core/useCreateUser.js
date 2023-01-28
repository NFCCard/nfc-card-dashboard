import { useContext } from "react";
import { useMutation } from "react-query";
import postRequest from "../../api/post";
import { ModalContext } from "../../context/ModalContextProvider";
import { UserDataContext } from "../../context/UserDataContextProvider";
import useGetUserList from "./useGetUserList";
import useViewUsersById from "./useViewUsersById";

const useCreateUser = () => {
	const { modalState } = useContext(ModalContext);
	const { setUserData } = useContext(UserDataContext);
	const { mutate: viewId } = useViewUsersById();
	const { refetch } = useGetUserList(1);

	return useMutation((value) => postRequest.createUser(value), {
		onError: (error, variables, context) => {
			// An error happened!
		},
		onSuccess: (data, variables, context) => {
			setUserData((prev) => ({
				...prev,
				userId: data.id,
			}));
			viewId(data.id);

			if (modalState.create) {
				const submitBtnOnStepOne = document.getElementById("submit_form");
				submitBtnOnStepOne.disabled = true;
				submitBtnOnStepOne.style.backgroundColor = "#0c0c0c5d";
				submitBtnOnStepOne.style.cursor = "not-allowed";
			}

			refetch();
		},
	});
};

export default useCreateUser;
