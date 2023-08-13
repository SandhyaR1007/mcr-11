import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { MoviesProvider } from "./context/MoviesContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MoviesProvider>
      <Router>
        <App />
      </Router>
    </MoviesProvider>
  </React.StrictMode>
);
