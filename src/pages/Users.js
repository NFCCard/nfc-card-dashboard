import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Table } from "../components";
import Loader from "../components/Loader/Loader";
import useGetUserList from "../hooks/core/useGetUserList";
import Layout from "../layout";

function Users() {
	const loaction = useLocation();
	const navigate = useNavigate();
	const { data, isLoading, refetch } = useGetUserList({
		pageParam: loaction.search.split("=")[1],
	});

	if (data && data.meta.total <= 15) {
		loaction.search = "?page=1";
	}

	useEffect(() => {
		if (loaction.search) {
			return;
		}
		navigate(`/users?page=${1}`);
	}, []);

	useEffect(() => {
		// userMutate(page);
		refetch();
	}, [loaction]);

	return <Layout>{!isLoading ? <Table content={data} /> : <Loader />}</Layout>;
}

export default Users;
