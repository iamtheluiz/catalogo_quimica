import React, { useEffect } from 'react';

// Styles
import './styles.css';

// Components
import Menu from '../../components/Menu';

export default function Vidrarias() {
  useEffect(() => {
    // Execução única
    document.title = "Vidrarias | Catálogo de Química";
  }, []);

  return (
    <>
      <Menu />
      <div className="Vidrarias">
        <h2>Vidrarias</h2>
      </div>
    </>
  )
}