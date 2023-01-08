import React from "react";
import MultiStep from "react-stepzilla";

const MultiStepModal = ({ steps, showSteps }) => {
	return <MultiStep steps={steps} showSteps={showSteps} />;
};

export default MultiStepModal;
