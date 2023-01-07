import Cookies from "js-cookie";
import React from "react";
import ModalCore from "../Base/ModalCore";

const DeleteModal = ({ modalButton }) => {
	const token = JSON.parse(Cookies.get("INFO")).access_token;
	console.log({ token });

	return <ModalCore modalButton={modalButton}>delete</ModalCore>;
};

export default DeleteModal;
