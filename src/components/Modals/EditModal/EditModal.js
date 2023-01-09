import React, { useContext } from "react";
import ModalCore from "../Base/ModalCore";
import { ModalContext } from "../../../context/ModalContextProvider";
import MultiStepModal from "../MultiStepModal";
import StepOne from "./StepOne";

const EditModal = ({ userId }) => {
	const { setModalState, modalState } = useContext(ModalContext);
	const steps = [
		{ name: "step 1", component: <StepOne /> },
		{ name: "step 2", component: <StepOne /> },
		{ name: "step 3", component: <StepOne /> },
	];
	const handleDismiss = () => {
		setModalState((prev) => ({
			...prev,
			edit: false,
		}));
	};

	return (
		<ModalCore open={modalState.edit} onDismiss={handleDismiss}>
			edit {userId}
			<MultiStepModal steps={steps} showSteps={false} />
		</ModalCore>
	);
};

export default EditModal;
