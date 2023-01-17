import { toast } from "react-toastify";

const Toastify = ({ type, text, id, successText, errorText, promise, pendingText }) => {
	if (type === "pending") {
		toast.promise(promise, {
			pending: pendingText,
			success: successText,
			error: errorText,
		});
	}

	if (type === "success") {
		toast.success(text, { toastId: id });
	}
	if (type === "error") {
		toast.error(text, { toastId: id });
	}
};
export default Toastify;
