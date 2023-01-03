import Cookies from "js-cookie";

export function logOuthandler() {
	Cookies.remove("TOKEN");
	Cookies.remove("USER_NAME");
	Cookies.remove("USER_TYPE");
	window.location.replace("/login");
}
