// Entry point for the React application
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App"; // Corrected import path

// Render the App component into the root element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
