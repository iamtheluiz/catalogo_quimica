import React from 'react';

// Import Styles
import './styles.css';

export default function Pictograma(props) {
  return (
    <div className="pictograma">
      <img src={props.image} alt={props.data.name} />
      <div className="info">
        <h3>{props.data.name}</h3>
        <strong>Apresenta {props.data.danger}</strong>
        <p>{props.data.description}</p>
        <p>Usado nas seguintes classes e categorias: </p>
        <ul>
          {props.data.usos.map((uso, index) => (
            <li key={index}>{uso}</li>
          ))}
        </ul>
      </div>
    </div>
  )
} 
