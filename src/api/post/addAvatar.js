import Toastify from "../../components/Toastify/Toastify";
import axios from "../axiosInstance";
import routes from "../routes";

const addAvatar = async (userAvatar) => {
	const imageFormData = new FormData();
	imageFormData.append("resource", userAvatar);
	let errMsg = [];
	Toastify({
		promise: axios.post(routes.core.addAvatar, imageFormData),
		pendingText: "uploading your image ...",
		type: "pending",
		successText: "successfuly upload 😎",
	});
	try {
		const response = await axios.post(routes.core.addAvatar, imageFormData);
		return response.data.data;
	} catch (error) {
		Object.entries(error.response.data.errors).map((messages) => {
			messages[1].map((err) => {
				errMsg.push(err);
			});
		});
	}

	errMsg.map((err) => {
		Toastify({
			errorText: err,
			type: "error",
		});
	});
};

export default addAvatar;
