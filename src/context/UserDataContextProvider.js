import React, { useState, createContext } from "react";

export const UserDataContext = createContext();
const UserDataContextProvider = ({ children }) => {
	const [userData, setUserData] = useState({
		userId: "",
		userName: "",
		userProfileId: "",
	});

	return (
		<UserDataContext.Provider value={{ userData, setUserData }}>
			{children}
		</UserDataContext.Provider>
	);
};

export default UserDataContextProvider;
