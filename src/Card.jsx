import React from 'react';

function Card({ nombre, barbieFavorita }) {
  return (
    <div className="card">
      <h2>Información Ingresada</h2>
      <p>Nombre: {nombre}</p>
      <p>Barbie Favorita: {barbieFavorita}</p>
    </div>
  );
}

export default Card;
