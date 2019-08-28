import React, { useEffect } from 'react';

// Styles
import './styles.css';

export default function Simbologia() {
  useEffect(() => {
    // Execução única
    document.title = "Simbologia de Risco | Catálogo de Química";
  }, []);

  return(
    <div className="Simbologia">
      <h2>Simbologia de Risco</h2>
      <h3>Agitação</h3>
      <ol>
        <li>Exemplo de algo</li>
        <li>Exemplo de alguma coisa</li>
        <li>Exemplo de coisa</li>
        <li>Um bom exemplo</li>
        <li>Definitivamente o melhor exemplo de todos</li>
      </ol>
      <h3>Análises</h3>
      <ol>
        <li>Exemplo de algo</li>
        <li>Exemplo de alguma coisa</li>
        <li>Exemplo de coisa</li>
        <li>Um bom exemplo</li>
        <li>Definitivamente o melhor exemplo de todos</li>
      </ol>
      <h3>Aquecimento</h3>
      <ol>
        <li>Exemplo de algo</li>
        <li>Exemplo de alguma coisa</li>
        <li>Exemplo de coisa</li>
        <li>Um bom exemplo</li>
        <li>Definitivamente o melhor exemplo de todos</li>
      </ol>
    </div>
  )
}