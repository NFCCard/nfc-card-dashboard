import Cookies from "js-cookie";

export function logOuthandler() {
	Cookies.remove("INFO");
	window.location.replace("/login");
}

export function formatPhoneNumber(phoneNumberString) {
	var cleaned = phoneNumberString.replace(/\D/g, "");
	var match = cleaned.match(/^(\d{4})(\d{3})(\d{4})$/);
	if (match) {
		return match[1] + "-" + match[2] + "-" + match[3];
	}
	return null;
}
