import React, { useRef, useState, useContext } from "react";
import { CSSTransition } from "react-transition-group";
import Modal from "react-modal";
import "./style.scss";
import useClickOutside from "../../../hooks/Common/useClickOutside";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const ModalCore = ({ children, modalId, open, onDismiss }) => {
	//ref
	const modalRef = useRef(null);
	// useClickOutside(!modalRef, () => {
	// 	setOpen(false);
	// });

	// console.log({ modalRef });

	return (
		<div ref={modalRef} id={modalId}>
			<CSSTransition in={open} timeout={300} classNames='dialog'>
				<Modal isOpen={open} closeTimeoutMS={100} ariaHideApp={false}>
					<header className='d-flex justify-content-end mb-3'>
						<button onClick={onDismiss} className='tableButton '>
							<FontAwesomeIcon icon={solid("close")} color='#fff' />
						</button>
					</header>
					{children}
				</Modal>
			</CSSTransition>
		</div>
	);
};

export default ModalCore;
