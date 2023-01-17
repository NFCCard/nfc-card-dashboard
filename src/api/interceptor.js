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
			if (response.status === 201 && !response.data.data.extension) {
				Toastify({
					type: "success",
					text: `${response.data.data.username} created`,
					id: response.status,
				});
			}
			if (response.status === 201 && response.data.data.extension) {
				Toastify({ type: "success", text: "Avatar added", id: response.status });
			}
			if (response.status === 200 && response.config.method === "delete") {
				Toastify({
					type: "success",
					text: `${response.data.data.username} deleted`,
					id: response.status,
				});
			}
			if (response.status === 200 && response.data.type === "profiles") {
				Toastify({ type: "success", text: "User Data added", id: response.status });
			}
			if (response.status === 200 && response.data.access_token) {
				if (
					window.location.href.includes("/login") &&
					response.data.user.username === "mammadkamalipour"
				) {
					Toastify({ type: "success", text: "login", id: response.status });
				} else {
					Toastify({
						type: "error",
						text: "User name or Password incorect",
						id: response.status,
					});
				}
			}
		}
		return response;
	},
	function(error) {
		Object.entries(error.response.data.errors).map((messages) => {
			messages[1].map((err) => {
				Toastify({ type: "error", text: err, id: err });
			});
		});

		return Promise.reject(error);
	}
);
