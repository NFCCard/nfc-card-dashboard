import Cookies from "js-cookie";
import { useMutation } from "react-query";
import api from "../../api";

const useLogin = () => {
	var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
	var day = currentDate.getDate() + 1;

	return useMutation(api.postRequest.login, {
		onError: (error, variables, context) => {
			// An error happened!
		},
		onSuccess: (data, variables, context) => {
			if (data.user.username === "mammadkamalipour") {
				Cookies.set(
					"INFO",
					JSON.stringify({
						access_token: data.access_token,
						username: data.user.username,
						userId: data.user.id,
					}),
					{ expires: day }
				);
				window.location.replace("/dashboard");
			}
		},
	});
};

export default useLogin;
