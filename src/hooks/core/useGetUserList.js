import React from "react";
import { useQuery } from "react-query";
import getRequest from "../../api/get";

const useGetUserList = () => {
	const { isLoading, isError, data, error, refetch } = useQuery("userList", getRequest.userList);
	return { isLoading, isError, data, error, refetch };
};

export default useGetUserList;
