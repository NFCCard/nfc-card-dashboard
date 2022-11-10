import React from "react";

function useLogin() {
	//useQuery unmount page => request
	//useMutation => method => onClick
}

export default useLogin;

// useMutation Example

// const useLogin = () => {
// 	const { storage, setStorage } = useContext(AppContext);

// 	return useMutation(api.post.login, {
// 		onError: (error, variables, context) => {
			// An error happened!
// 			Toastify("error", error.response.data.message);
// 		},
// 		onSuccess: (data, variables, context) => {
// 			setStorage((prev) => ({
// 				...prev,
// 				accessToken: data.access_token,
// 				userInfo: data.user,
// 			}));
// 			Toastify("success", "با موفقیت وارد شدید");
// 			setTimeout(() => {
// 				window.location.reload();
// 			}, 2000);
// 		},
// 	});
// };

// useQuery Example

// const useGetProfile = (username , password) => {
// 	const { data, isLoading, status, refetch } = useQuery("KEY", () =>
		// api.get.getSingleProfile({ username })
// 	);
// 	return { data, isLoading, status, refetch };
// };
