import React from "react";
import "./index.scss";
import { SideButton } from "../components";

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
		<div>
			<div className='holy-grail'>
				<header className='header'>header</header>
				<main className='holy-grail__main'>
					<aside className='holy-grail__left sidebar'>
						<div className='logoWrapper mb-3'>
							<img src='#' alt='#' />
						</div>
						<div className='w-100 d-flex flex-column flex-grow-1'>
							<ul className='list-unstyled '>
								{buttonData.map((button, index) => {
									return (
										<>
											<li className='list-item'>
												<SideButton
													key={index}
													ButtonUrl={button.buttonUrl}
													buttonContent={button.title}
												/>
											</li>
										</>
									);
								})}
							</ul>
						</div>
					</aside>

					<article className='holy-grail__middle'>{children}</article>
				</main>
			</div>
		</div>
	);
}

export default Layout;
