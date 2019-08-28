import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import './styles.css';

// Assets
import home from '../../assets/home.svg';

// Tópicos do Site
import topicos from '../../services/topicos';

// Menu component
export default function Menu() {
  return (
    <div id="mainMenu">
      <Link to="/"><img src={home} alt="Home Link" /></Link>
      <ul>
        {topicos.map((topico, index) => (
          <li key={index}><Link to={topico.url}>{topico.nome.split(" ")[0]}</Link></li>
        ))}
      </ul>
    </div>
  )
}