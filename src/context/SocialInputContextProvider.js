import React, { useState, createContext } from "react";

export const socialContext = createContext();
const SocialInputContextProvider = ({ children }) => {
	const [inputState, setInputState] = useState({
		telegram: false,
		instagram: false,
		whatsapp: false,
		linkedin: false,
		dribbble: false,
		pinterest: false,
		twitter: false,
		youtube: false,
		aparat: false,
		tiktok: false,
		spotify: false,
		soundcloud: false,
		twitch: false,
		github: false,
		website: false,
	});

	return (
		<socialContext.Provider value={{ inputState, setInputState }}>
			{children}
		</socialContext.Provider>
	);
};

export default SocialInputContextProvider;
