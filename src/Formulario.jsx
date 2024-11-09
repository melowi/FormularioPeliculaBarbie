import React, { useState } from "react";
import Card from "./Card";
import "./Formulario.css";  // Asegúrate de que esta ruta sea correcta
import barbieImage from "./assets/barbie.png";

function Formulario() {
  const [nombre, setNombre] = useState('');
  const [barbieFavorita, setBarbieFavorita] = useState('');
  const [error, setError] = useState('');
  const [datosValidos, setDatosValidos] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validaciones
    if (nombre.trim().length < 3 || nombre.startsWith(' ') || barbieFavorita.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      setDatosValidos(false);
    } else {
      setError('');
      setDatosValidos(true);
    }
  };

  return (
    <div className="formulario-container">
       {/* Imagen de Barbie como encabezado */}
      <img 
        src={barbieImage}   // Usa la variable importada como fuente de la imagen
        alt="Barbie" 
        className="barbie-header-image" 
      />
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          className="input"
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
          placeholder="Tu nombre" 
        />
        <input 
          type="text" 
          className="input"
          value={barbieFavorita} 
          onChange={(e) => setBarbieFavorita(e.target.value)} 
          placeholder="Tu Barbie favorita" 
        />
        <button type="submit" className="submit-button">Enviar</button>
      </form>
      {error && <p className="error">{error}</p>}
      {datosValidos && <Card nombre={nombre} barbieFavorita={barbieFavorita} />}
    </div>
  );
}

export default Formulario;
