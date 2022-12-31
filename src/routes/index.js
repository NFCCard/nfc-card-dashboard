import React from "react";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Login from "../pages/Login";
import { Route, Routes } from "react-router-dom";

function Navigation() {
	return (
		<Routes>
			<Route path='login' element={<Login />} />
			<Route path='/*' element={<Dashboard />} />
			<Route path='dashboard' element={<Dashboard />} />
			<Route path='users' element={<Users />} />
		</Routes>
	);
}

// const routes = [
// 	{
// 		path: "/dashboard",
// 		element: <Dashboard />,
// 		key: "dashboard",
// 		name: "Dashboard",
// 		icon: "fas fa-home",
// 	},
// 	{
// 		path: "/users",
// 		element: <Users />,
// 		key: "user",
// 		name: "Users",
// 		icon: "fas fa-users",
// 	},
// ];

export default Navigation;
