import React from "react";
import MultiStep from "react-stepzilla";
import "./style.scss";

const MultiStepModal = ({ steps, showSteps, showNavigation }) => {
	return (
		<MultiStep
			steps={steps}
			showSteps={showSteps}
			nextButtonCls='nextButtonStyle'
			backButtonCls='prevButtonStyle'
			showNavigation={showNavigation}
			startAtStep={1}
		/>
	);
};

export default MultiStepModal;
