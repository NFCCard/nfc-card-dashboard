import Layout from "../layout";
import React from "react";
import "../styles/global.scss";

function Dashboard() {
	return (
		<Layout>
			<div className='text-center'>
				<h3 className=''>
					Hello Admin{" "}
					<span role='img' aria-label='banana'>
						😎❤️
					</span>
				</h3>
			</div>
		</Layout>
	);
}

export default Dashboard;
