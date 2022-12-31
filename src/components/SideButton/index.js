import React from "react";
import "./index.scss";
import { Link, useLocation } from "react-router-dom";

const SideButton = ({ buttonContent, ButtonUrl, onClick }) => {
	const location = useLocation().pathname;
	return (
		<div>
			<Link
				className={`sideButton text-decoration-none ${
					location.includes(ButtonUrl) ? "active" : ""
				}`}
				to={ButtonUrl}
				onClick={onClick}
			>
				{buttonContent}
			</Link>
		</div>
	);
};

export default SideButton;
