import React from "react";
import { SocialIcon } from "react-social-icons";

const SocialInput = ({
	open,
	handleToggle,
	placeholder,
	value,
	onChange,
	onSubmit,
	socialIcon,
}) => {
	return (
		<>
			<div onClick={handleToggle} className='icon_wrapper'>
				<SocialIcon network={socialIcon} />
			</div>
			{open && (
				<div>
					<input
						type='text'
						placeholder={placeholder}
						value={value}
						onChange={onChange}
					/>
					<button onClick={onSubmit}></button>
				</div>
			)}
		</>
	);
};

export default SocialInput;
