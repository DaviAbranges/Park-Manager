import React from "react";
import ReactDOM from "react-dom/client"; // Importação alterada
import "./styles/global.css";
import App from "./App";

// Substitua ReactDOM.render() por ReactDOM.createRoot()
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
); // Criação do root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
