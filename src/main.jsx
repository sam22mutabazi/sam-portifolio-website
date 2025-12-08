// src/main.jsx

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// 🔑 1. Import the EmailJS library
import emailjs from '@emailjs/browser'; 

// 🔑 2. Initialize EmailJS with your Public Key (User ID)
// This initializes the SDK globally for your entire application.
// IMPORTANT: This key MUST be correct, otherwise the send will fail.
emailjs.init("7OPzOkykutI7mPA8O"); 

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);