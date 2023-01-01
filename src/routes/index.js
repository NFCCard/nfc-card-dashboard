import React from "react";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Login from "../pages/Login";
import { Route, Routes, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { useAuth } from "../hooks/auth/useAuth";

function Navigation() {
	const isAuthenticated = useAuth();

	return (
		<>
			{isAuthenticated ? (
				<Routes>
					<Route path='users' element={<ProtectedRoute Component={<Users />} />} />
					<Route
						path='dashboard'
						element={<ProtectedRoute Component={<Dashboard />} />}
					/>
					<Route path='/*' element={<Navigate to={"dashboard"} />} />
				</Routes>
			) : (
				<Routes>
					<Route path='/*' element={<Login />} />
				</Routes>
			)}
		</>
	);
}

export default Navigation;
