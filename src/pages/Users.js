import React from "react";
import { Table } from "../components";
import useGetUserList from "../hooks/core/useGetUserList";
import Layout from "../layout";

function Users() {
	const { data } = useGetUserList();
	return (
		<Layout>
			<Table content={data} />
		</Layout>
	);
}

export default Users;
