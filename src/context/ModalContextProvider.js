import React, { useState, createContext } from "react";

export const ModalContext = createContext();
const ModalContextProvider = ({ children }) => {
	const [modalState, setModalState] = useState({
		edit: false,
		delete: false,
		create: false,
	});

	return (
		<ModalContext.Provider value={{ modalState, setModalState }}>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalContextProvider;
