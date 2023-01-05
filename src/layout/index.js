import React from "react";
import "./index.scss";
import { Header, SideButton } from "../components";
import nfc from "../assets/images/nfc.png";

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
				<Header />
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
									<li className='list-item text-uppercase' key={index}>
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
