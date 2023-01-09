import React from "react";
import { Table } from "../components";
import useGetUserList from "../hooks/core/useGetUserList";
import Layout from "../layout";

function Users() {
	const { data, isLoading: userListLoading } = useGetUserList();
	return (
		<Layout>
			<Table content={data} isLoading={userListLoading} />
		</Layout>
	);
}

export default Users;
