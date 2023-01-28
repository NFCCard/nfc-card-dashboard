import { useContext } from "react";
import { useMutation } from "react-query";
import deleteRequest from "../../api/delete";
import { ModalContext } from "../../context/ModalContextProvider";
import useGetUserList from "./useGetUserList";

const useDeleteUser = () => {
	const { setModalState } = useContext(ModalContext);
	const { refetch } = useGetUserList(1);

	return useMutation((userId) => deleteRequest.deleteUser(userId), {
		onError: (error, variables, context) => {
			// An error happened!
		},
		onSuccess: (data, variables, context) => {
			setModalState((prev) => ({
				...prev,
				delete: false,
			}));
			refetch();
		},
	});
};

export default useDeleteUser;
