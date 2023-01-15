import React from "react";
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
	return (
		<div className='position-relative'>
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
					style={{ zIndex: "2", right: "-200%" }}
				>
					<input
						type='text'
						placeholder={placeholder}
						value={value}
						onChange={onChange}
						className='position-relative socialInput'
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
