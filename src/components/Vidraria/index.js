import React from 'react';

// Styles
import './styles.css';

// Vidraria
export default function Vidraria(props) {
  return(
    <div className="vidrariaItem">
      <li><b>{props.data.name}: </b>{props.data.description}</li>
      <img src={props.image} alt={props.data.name} />
    </div>
  )
}