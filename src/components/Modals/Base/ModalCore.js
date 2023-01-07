import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import Modal from "react-modal";
import "./style.scss";
import useClickOutside from "../../../hooks/Common/useClickOutside";

const ModalCore = ({ children, modalButton }) => {
	//ref
	const modalRef = useRef(null);
	useClickOutside(!modalRef, () => {
		setOpen(false);
	});

	console.log({ modalRef });

	const [open, setOpen] = useState(false);
	const toggleModal = () => {
		setOpen((prev) => !prev);
	};
	return (
		<div ref={modalRef}>
			<button onClick={toggleModal} className='tableButton'>
				{modalButton}
			</button>
			<CSSTransition in={open} timeout={300} classNames='dialog'>
				<Modal isOpen={open} closeTimeoutMS={100} ariaHideApp={false}>
					<header>
						<button onClick={toggleModal}>Close Modal</button>
					</header>
					{children}
				</Modal>
			</CSSTransition>
		</div>
	);
};

export default ModalCore;
