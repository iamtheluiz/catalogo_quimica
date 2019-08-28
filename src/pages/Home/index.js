import React from 'react';

// Page Style
import './styles.css';

// Logo
import logo from '../../logo.svg';

// Page Component
export default function Home() {
  return(
    <div className="Home">
      <header>
        <img id="logo" src={logo} alt="Website Logo" />
        <h1>Catálogo de Química</h1>
        <span>Um manual de boas práticas e conhecimentos para laboratórios de química!</span>
      </header>
    </div>
  )
}