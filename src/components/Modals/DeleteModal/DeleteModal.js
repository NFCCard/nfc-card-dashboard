import React, { useContext } from "react";
import ModalCore from "../Base/ModalCore";
import { ModalContext } from "../../../context/ModalContextProvider";
import useDeleteUser from "../../../hooks/core/useDeleteUser";

const DeleteModal = ({ modalId, userName, userId }) => {
	const { mutate: userDelete } = useDeleteUser();
	const { setModalState, modalState } = useContext(ModalContext);

	const handleDismiss = () => {
		setModalState((prev) => ({
			...prev,
			delete: false,
		}));
	};

	const handleDelete = (userId) => {
		const deleteBtn = document.getElementById("deleteButton");
		deleteBtn.disabled = true;
		deleteBtn.style.backgroundColor = "#0c0c0c5d";
		deleteBtn.style.cursor = "not-allowed";
		userDelete(userId);
	};
	return (
		<ModalCore modalId={modalId} open={modalState.delete} onDismiss={handleDismiss}>
			<div>
				<h5 className='mb-3'>Are you sure you want delete to {userName} ?</h5>
				<button
					className='accpetButton text-uppercase'
					onClick={() => handleDelete(userId)}
					id='deleteButton'
				>
					yes
				</button>
				<button className='dismissButton text-uppercase' onClick={handleDismiss}>
					no
				</button>
			</div>
		</ModalCore>
	);
};

export default DeleteModal;
