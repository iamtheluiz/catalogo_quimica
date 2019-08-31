import React, { useEffect } from 'react';

// Styles
import './styles.css';

// Components
import Menu from '../../components/Menu';

export default function Vidrarias() {
  useEffect(() => {
    // Execução única
    document.title = "Vidrarias | Catálogo de Química";

    // Scroll para o topo da página
    window.scrollTo(0, 0);
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