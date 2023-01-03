import React from "react";
import "./index.scss";
import { SideButton } from "../components";
import Cookies from "js-cookie";
import { logOuthandler } from "../helpers/function";
import nfc from "../assets/images/nfc.png";
import logout from "../assets/images/logOut.png";

function Layout({ children }) {
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
		<div className='holy-grail'>
			<header className='header'>
				<div className='header_title'>
					<div className='tooltip'>خروج</div>
					<div className='logoWrapper'>
						<img src={logout} alt='logout' onClick={() => logOuthandler()} />
					</div>
					<span>{Cookies.get("USER_NAME")}</span>
				</div>
			</header>
			<main className='holy-grail__main '>
				<aside className='holy-grail__left sidebar'>
					<div className='nfcLogo mb-3'>
						<img src={nfc} alt='NFC Logo' width={100} />
					</div>
					<div className='w-100 d-flex flex-column flex-grow-1'>
						<ul className='list-unstyled '>
							{buttonData.map((button, index) => {
								return (
									<li className='list-item' key={index}>
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
				</aside>

				<article className='holy-grail__middle'>{children}</article>
			</main>
		</div>
	);
}

export default Layout;
