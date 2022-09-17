import React from "react";

const routes = [
	{
		path: "/",
		element: <h2>home</h2>,
		key: "dashboard",
		name: "Dashboard",
		icon: "fas fa-home",
	},
	{
		path: "/users",
		element: <h2>Users</h2>,
		key: "user",
		name: "Users",
		icon: "fas fa-users",
	},
];

export default routes;
