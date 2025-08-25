import React from "react";
import ReactDOM from "react-dom/client";
import './index.scss';
import App from "./App.jsx";
import { Calculator } from "./components/Calculator.jsx";
import reportWebVitals from './reportWebVitals.jsx';

// Look for either #root (App) or #calculator (Calculator)
const appRoot = document.getElementById("root");
const calcRoot = document.getElementById("calculator");

if (appRoot) {
  ReactDOM.createRoot(appRoot).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

if (calcRoot) {
  ReactDOM.createRoot(calcRoot).render(
    <React.StrictMode>
      <Calculator />
    </React.StrictMode>
  );
}

reportWebVitals();
