import React, { useState, createContext } from "react";

export const modalContext = createContext();
const ModalContextProvider = ({ children }) => {
	const [modalState, setModalState] = useState({
		edit: false,
		delete: false,
	});

	return (
		<modalContext.Provider value={{ modalState, setModalState }}>
			{children}
		</modalContext.Provider>
	);
};

export default ModalContextProvider;
