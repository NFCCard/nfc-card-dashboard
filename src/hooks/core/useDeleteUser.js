import { useContext } from "react";
import { useMutation } from "react-query";
import deleteRequest from "../../api/delete";
import { ModalContext } from "../../context/ModalContextProvider";
import useGetUserList from "./useGetUserList";

const useDeleteUser = () => {
	const { setModalState } = useContext(ModalContext);
	const { refetch } = useGetUserList();

	return useMutation((userId) => deleteRequest.deleteUser(userId), {
		onError: (error, variables, context) => {
			// An error happened!
			console.log("error", error.response.data.message);
		},
		onSuccess: (data, variables, context) => {
			refetch();
			setModalState((prev) => ({
				...prev,
				delete: false,
			}));
		},
	});
};

export default useDeleteUser;
