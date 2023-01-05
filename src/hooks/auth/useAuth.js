import Cookies from "js-cookie";

const useAuth = () => {
	let isAuthenticated = false;

	if (Cookies.get("INFO")) {
		const userName = JSON.parse(Cookies.get("INFO")).username;
		if (userName === "mammadkamalipour") {
			isAuthenticated = true;
		} else {
			isAuthenticated = false;
		}
	} else {
		isAuthenticated = false;
	}
	return isAuthenticated;
};

export { useAuth };
