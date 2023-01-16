import Toastify from "../components/Toastify/Toastify";
import axios from "./axiosInstance";

axios.interceptors.request.use(
	function(config) {
		return config;
	},
	function(error) {
		return Promise.reject(error);
	}
);

axios.interceptors.response.use(
	function(response) {
		if (response.config.url !== "core/users" && response.config.url !== "/core/profiles/1") {
			console.log(response);
			if (response.status === 201 && !response.data.data.extension) {
				Toastify("success", `${response.data.data.username} created`, response.status);
			}
			if (response.status === 201 && response.data.data.extension) {
				Toastify("success", "Avatar adedd", response.status);
			}
			if (response.status === 200 && response.config.method === "delete") {
				Toastify("success", `${response.data.data.username} deleted`, response.status);
			}
			if (response.status === 200 && response.data.type === "profiles") {
				Toastify("success", "User Data adedd", response.status);
			}
			if (response.status === 200 && response.data.access_token) {
				Toastify("success", "login", response.status);
			}
		}
		return response;
	},
	function(error) {
		console.log(error.response.data.errors);
		Object.entries(error.response.data.errors).map((messages) => {
			messages[1].map((err) => {
				Toastify("error", err, err);
			});
		});

		return Promise.reject(error);
	}
);
