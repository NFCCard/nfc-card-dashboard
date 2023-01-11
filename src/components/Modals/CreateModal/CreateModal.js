import React, { useContext } from "react";
import ModalCore from "../Base/ModalCore";
import { ModalContext } from "../../../context/ModalContextProvider";
import MultiStepModal from "../MultiStepModal";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import "./style.scss";
import useCreateUser from "../../../hooks/core/useCreateUser";

const CreateModal = () => {
	const { setModalState, modalState } = useContext(ModalContext);
	const { mutate: createMutate, isLoading, isSuccess, data } = useCreateUser();
	const handelSubmit = (values) => {
		createMutate(values);
	};

	const steps = [
		{
			name: "step 1",
			component: <StepOne onSubmit={handelSubmit} isLoading={isLoading} data={data} />,
		},
		{ name: "step 2", component: <StepTwo /> },
		{ name: "step 3", component: <></> },
	];

	const handleDismiss = () => {
		setModalState((prev) => ({
			...prev,
			create: false,
		}));
	};

	return (
		<ModalCore open={modalState.create} onDismiss={handleDismiss}>
			<MultiStepModal steps={steps} showSteps={false} showNavigation={isSuccess} />
		</ModalCore>
	);
};

export default CreateModal;
