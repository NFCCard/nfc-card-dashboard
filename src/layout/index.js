import React from "react";
import "./index.scss";
import { Header, SideBar } from "../components";

function Layout({ children }) {
	return (
		<div className='holy-grail'>
			<header className='header'>
				<Header />
			</header>
			<aside className='holy-grail__left'>
				<SideBar />
			</aside>
			<main className='holy-grail__main '>
				<article className='holy-grail__middle'>{children}</article>
			</main>
		</div>
	);
}

export default Layout;
