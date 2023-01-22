import React from "react";
import "./style.scss";
import logo from "../../assets/images/nfc.png";

function Loader() {
	return (
		<div className='loader-wrapper'>
			<img src={logo} alt='Logo' className='loader' />
		</div>
	);
}

export default Loader;
