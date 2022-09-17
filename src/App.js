import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router";
import routes from "./routes";

function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<Routes>
				{routes.map((route) => {
					const { path, name, element, key } = route;
					return <Route key={key} path={path} name={name} element={element} />;
				})}
			</Routes>
		</QueryClientProvider>
	);
}

export default App;
