import React from "react";
import "./index.scss";
import { Header, SideBar, SideButton } from "../components";

function Layout({ children }) {
	return (
		<div className='holy-grail'>
			<header className='header'>
				<Header />
			</header>
			<main className='holy-grail__main '>
				<aside className='holy-grail__left'>
					<SideBar />
				</aside>
				<article className='holy-grail__middle'>{children}</article>
			</main>
		</div>
	);
}

export default Layout;
