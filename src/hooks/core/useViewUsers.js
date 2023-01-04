import React from "react";
import { useQuery } from "react-query";
import getRequest from "../../api/get";

const useViewUsers = () => {
	const { isLoading, isError, data, error, refetch } = useQuery("viewUser", getRequest.viewUser);
	return { isLoading, isError, data, error, refetch };
};

export default useViewUsers;
