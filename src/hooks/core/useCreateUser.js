import { useContext } from "react";
import { useMutation } from "react-query";
import postRequest from "../../api/post";
import { ModalContext } from "../../context/ModalContextProvider";
import useGetUserList from "./useGetUserList";

const useCreateUser = () => {
	const { modalState } = useContext(ModalContext);
	const { refetch } = useGetUserList();

	return useMutation((value) => postRequest.createUser(value), {
		onError: (error, variables, context) => {
			// An error happened!
		},
		onSuccess: (data, variables, context) => {
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
