import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import ModalContextProvider from "./context/ModalContextProvider";
import Navigation from "./routes";

function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<ModalContextProvider>
				<Navigation />
			</ModalContextProvider>
		</QueryClientProvider>
	);
}

export default App;
