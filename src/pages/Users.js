import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Table } from "../components";
import useGetUserList from "../hooks/core/useGetUserList";
import Layout from "../layout";

function Users() {
	const { data, isLoading: userListLoading, mutate: userMutate } = useGetUserList();
	const [page, setPage] = useState(1);

	console.log(page);

	useEffect(() => {
		userMutate(page);
	}, [page]);

	return (
		<Layout>
			<Table content={data} isLoading={userListLoading} setPage={setPage} />
		</Layout>
	);
}

export default Users;
