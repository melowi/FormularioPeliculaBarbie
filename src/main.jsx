import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Asegúrate de importar App
import "./index.css"; // Estilos globales

// El punto de montaje de la aplicación
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
