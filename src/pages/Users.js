import React from "react";
import { Table } from "../components";
import useGetUserList from "../hooks/core/useGetUserList";
import Layout from "../layout";

function Users() {
	const { isLoading, isError, data, error, refetch } = useGetUserList();
	if (!isLoading) {
		console.log(data);
	}
	return (
		<Layout>
			<Table data={data} />
		</Layout>
	);
}

export default Users;
