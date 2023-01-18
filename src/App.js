import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import ModalContextProvider from "./context/ModalContextProvider";
import SocialInputContextProvider from "./context/SocialInputContextProvider";
import UserDataContextProvider from "./context/UserDataContextProvider";
import Navigation from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<ModalContextProvider>
				<SocialInputContextProvider>
					<UserDataContextProvider>
						<Navigation />
						<ToastContainer
							theme='dark'
							position='top-center'
							autoClose={1500}
							hideProgressBar={true}
							newestOnTop={false}
							closeOnClick
							pauseOnFocusLoss
							pauseOnHover
						/>
					</UserDataContextProvider>
				</SocialInputContextProvider>
			</ModalContextProvider>
		</QueryClientProvider>
	);
}

export default App;
