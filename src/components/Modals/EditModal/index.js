import React, { useContext } from "react";
import ModalCore from "../Base/ModalCore";
import { ModalContext } from "../../../context/ModalContextProvider";

const EditModal = ({ userId }) => {
	const { setModalState, modalState } = useContext(ModalContext);

	const handleDismiss = () => {
		setModalState((prev) => ({
			...prev,
			edit: false,
		}));
	};

	return (
		<ModalCore open={modalState.edit} onDismiss={handleDismiss}>
			edit {userId}
		</ModalCore>
	);
};

export default EditModal;
