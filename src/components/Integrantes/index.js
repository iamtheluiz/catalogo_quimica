import React from 'react';

//Styles
import './styles.css';

// ListaDeIntegrantes
import ListaDeIntegrantes from '../../services/integrantes';

// Component
export default function Integrantes() {
  return (
    <div id="integrantes">
      <h1>Integrantes</h1>
      <ul>
        {ListaDeIntegrantes.map((integrante, key) => (
          <li key={key}>{integrante}</li>
        ))}
      </ul>
    </div>
  )
}