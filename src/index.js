import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import "./assets/fonts/font-style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/font-awesome/css/all.min.css";
import "./styles/global.scss";
import "./api/interceptor.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
