import React from "react";
import "./index.scss";
import { SideBar } from "../components";
import Header from "../components/Header/Header";

function Layout({ children }) {
	return (
		<div className='holy-grail'>
			<header className='header d-flex  align-items-center justify-content-between ps-3 pe-3 '>
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
