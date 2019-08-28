import React, { useEffect } from 'react';

// Styles
import './styles.css';

export default function Referencias() {
  useEffect(() => {
    // Execução única
    document.title = "Referências | Catálogo de Química";
  }, []);

  return(
    <div className="Referencias">
      <h2>Referências</h2>
      <ul>
        <li>Exemplo de algo</li>
        <li>Exemplo de alguma coisa</li>
        <li>Exemplo de coisa</li>
        <li>Um bom exemplo</li>
        <li>Definitivamente o melhor exemplo de todos</li>
      </ul>
    </div>
  )
}