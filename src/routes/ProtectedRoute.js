import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/auth/useAuth";

const ProtectedRoute = ({ Component }) => {
	const isAuthenticated = useAuth();
	return isAuthenticated ? Component : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
