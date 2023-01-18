import React from "react";
import SideButton from "../SideButton";
import "./style.scss";
import nfc from "../../assets/images/nfc.png";

const SideBar = () => {
	const buttonData = [
		{
			buttonUrl: "/dashboard",
			title: "Dashboard",
		},
		{
			buttonUrl: "/users",
			title: "Users",
		},
	];

	return (
		<div className='w-100'>
			<div className='nfcLogo mb-3 d-flex justify-content-center'>
				<img src={nfc} alt='NFC Logo' width={100} />
			</div>
			<div className='w-100 d-flex flex-column flex-grow-1'>
				<ul className='list-unstyled '>
					{buttonData.map((button, index) => {
						return (
							<li className='list-item text-capitalize' key={index}>
								<SideButton
									key={index}
									ButtonUrl={button.buttonUrl}
									buttonContent={button.title}
								/>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default SideBar;
