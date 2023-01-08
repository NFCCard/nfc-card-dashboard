import React from "react";
import { CSSTransition } from "react-transition-group";
import Modal from "react-modal";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const ModalCore = ({ children, modalId, open, onDismiss }) => {
	return (
		<div id={modalId}>
			<CSSTransition in={open} timeout={300} classNames='dialog'>
				<Modal
					isOpen={open}
					closeTimeoutMS={100}
					ariaHideApp={false}
					onRequestClose={onDismiss}
				>
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