import React from "react";
import { useContext } from "react";
import { useRef } from "react";
import { socialContext } from "../../context/SocialInputContextProvider";
import { useOnClickOutSide } from "../../hooks/coustom/useOnClickOutSide";
import "./style.scss";

const SocialInput = ({
	open,
	handleToggle,
	placeholder,
	value,
	onChange,
	onSubmit,
	iconClass,
	background,
	svg,
	inputID,
}) => {
	const { setInputState } = useContext(socialContext);
	const ref = useRef();
	useOnClickOutSide(ref, () => setInputState(false));

	return (
		<div>
			<div onClick={handleToggle} className='icon_wrapper'>
				<i
					className={`${iconClass} iconsStyle`}
					style={{
						color: "#fff",
						fontSize: "25px",
						border: "none",
						background: `${background}`,
						padding: "0 5px",
						borderRadius: "6px",
						cursor: "pointer",
					}}
				>
					{svg}
				</i>
			</div>
			{open && (
				<div
					id={inputID}
					className='position-absolute'
					style={{ zIndex: "2", left: "0", width: "50%", marginTop: "0.5rem" }}
				>
					<input
						ref={ref}
						type='text'
						placeholder={placeholder}
						value={value}
						onChange={onChange}
						className='position-relative socialInput w-100'
					/>
					<button onClick={onSubmit} className='position-absolute submit_button'>
						<i className='far fa-check'></i>
					</button>
				</div>
			)}
		</div>
	);
};

export default SocialInput;
