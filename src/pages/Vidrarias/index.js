import React, { useEffect } from 'react';

// Styles
import './styles.css';

export default function Vidrarias() {
  useEffect(() => {
    // Execução única
    document.title = "Vidrarias | Catálogo de Química";
  }, []);

  return(
    <div className="Vidrarias">
      <h2>Vidrarias</h2>
    </div>
  )
}