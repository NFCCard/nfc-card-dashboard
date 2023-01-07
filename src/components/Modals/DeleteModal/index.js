import React, { useContext } from "react";
import ModalCore from "../Base/ModalCore";
import { ModalContext } from "../../../context/ModalContextProvider";

const DeleteModal = ({ modalId, userName }) => {
	const { setModalState, modalState } = useContext(ModalContext);

	const handleDismiss = () => {
		setModalState((prev) => ({
			...prev,
			delete: false,
		}));
	};

	return (
		<ModalCore modalId={modalId} open={modalState.delete} onDismiss={handleDismiss}>
			<div>
				<h5 className='mb-3'>Are you sure you want delete to {userName} ?</h5>
				<button className='accpetButton text-uppercase'>yes</button>
				<button className='dismissButton text-uppercase' onClick={handleDismiss}>
					no
				</button>
			</div>
		</ModalCore>
	);
};

export default DeleteModal;
