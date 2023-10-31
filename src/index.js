import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-tooltip/dist/react-tooltip.css";
import App from "./App";
import "react-multi-carousel/lib/styles.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Components/context/auth";
import ScrollToTop from './Components/ScrollToTop'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <BrowserRouter>
      <App />
      <ScrollToTop/>
    </BrowserRouter>
  </AuthProvider>
);
