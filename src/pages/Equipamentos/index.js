import React, { useEffect } from 'react';

// Styles
import './styles.css';

// Components
import Menu from '../../components/Menu';

export default function Equipamentos() {
  useEffect(() => {
    // Execução única
    document.title = "Equipamentos | Catálogo de Química";

    // Scroll para o topo da página
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Menu />
      <div className="Equipamentos">
        <h2>Equipamentos</h2>
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
    </>
  )
}