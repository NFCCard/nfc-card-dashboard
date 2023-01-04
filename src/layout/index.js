import React from "react";
import "./index.scss";
import { SideButton } from "../components";
import { logOuthandler } from "../helpers/function";
import nfc from "../assets/images/nfc.png";
import logout from "../assets/images/logOut.png";
import useViewUsers from "../hooks/core/useViewUsers";

function Layout({ children }) {
	const { isLoading, data } = useViewUsers();
	if (!isLoading) {
		console.log(data);
	}

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
					<div className='avatar-name d-flex  flex-column '>
						<span>{data ? data.data.first_name.en : ""}</span>
						<span>{data ? data.data.last_name.en : ""}</span>
					</div>
					<div className='avatar'>
						{data ? <img src={data.data.resource.url} alt='avatar' /> : ""}
					</div>
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
