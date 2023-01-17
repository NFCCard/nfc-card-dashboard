import { useContext } from "react";
import { useMutation } from "react-query";
import patchRequest from "../../api/patch";
import { ModalContext } from "../../context/ModalContextProvider";
import useGetUserList from "./useGetUserList";

const useUpdateUser = () => {
	const { modalState } = useContext(ModalContext);
	const { refetch } = useGetUserList();

	return useMutation((value) => patchRequest.updateUser(value), {
		onError: (error, variables, context) => {},
		onSuccess: (data, variables, context) => {
			refetch();
		},
	});
};

export default useUpdateUser;
