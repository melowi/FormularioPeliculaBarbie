import React, { useState } from "react";
import "./app.css"; // Importa los estilos específicos para App
import Formulario from "./Formulario"; // Importa el formulario
import Card from "./Card"; // Importa el componente Card

function App() {
  return (
    <div className="app-container">
      <h1>Formulario Pelicula de Barbie Favorita</h1>
      <Formulario />
    </div>
  );
}

export default App;
