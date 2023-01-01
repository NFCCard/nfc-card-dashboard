import Cookies from "js-cookie";
import React from "react";
import { useMutation } from "react-query";
import api from "../../api";

const useLogin = () => {
	return useMutation(api.postRequest.login, {
		onError: (error, variables, context) => {
			// An error happened!
			console.log("error", error.response.data.message);
		},
		onSuccess: (data, variables, context) => {
			console.log("success", "با موفقیت وارد شدید");
			console.log({ data });
			Cookies.set("_s", JSON.stringify(data));
			// setTimeout(() => {
			// 	window.location.reload();
			// }, 2000);
		},
	});
};

export default useLogin;

// useMutation Example

// useQuery Example

// const useGetProfile = (username , password) => {
// 	const { data, isLoading, status, refetch } = useQuery("KEY", () =>
// api.get.getSingleProfile({ username })
// 	);
// 	return { data, isLoading, status, refetch };
// };
