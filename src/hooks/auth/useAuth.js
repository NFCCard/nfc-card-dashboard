import Cookies from "js-cookie";

const useAuth = () => {
	let isAuthenticated = false;
	const userName = Cookies.get("USER_NAME");
	if (userName === "mammadkamalipour") {
		isAuthenticated = true;
	} else {
		isAuthenticated = false;
	}
	return isAuthenticated;
};

export { useAuth };
