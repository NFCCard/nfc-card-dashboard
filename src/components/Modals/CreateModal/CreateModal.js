import React, { useContext } from "react";
import ModalCore from "../Base/ModalCore";
import { ModalContext } from "../../../context/ModalContextProvider";
import MultiStepModal from "../MultiStepModal";
import StepOne from "./StepOne";

const CreateModal = () => {
	const { setModalState, modalState } = useContext(ModalContext);
	const steps = [
		{ component: <StepOne /> },
		{ component: <StepOne /> },
		{ component: <StepOne /> },
	];
	const handleDismiss = () => {
		setModalState((prev) => ({
			...prev,
			create: false,
		}));
	};

	return (
		<ModalCore open={modalState.create} onDismiss={handleDismiss}>
			Create
			<MultiStepModal steps={steps} showSteps={false} />
		</ModalCore>
	);
};

export default CreateModal;
