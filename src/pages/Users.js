import React, { useEffect } from "react";
import { Table } from "../components";
import useGetUserList from "../hooks/core/useGetUserList";
import useDeleteUser from "../hooks/core/useDeleteUser";
import Layout from "../layout";

function Users() {
	const { data, refetch } = useGetUserList();
	const { isLoading } = useDeleteUser();

	useEffect(() => {
		refetch();
	}, [isLoading, data]);

	return (
		<Layout>
			<Table content={data} />
		</Layout>
	);
}

export default Users;
