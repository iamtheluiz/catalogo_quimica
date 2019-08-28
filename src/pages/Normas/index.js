import React, { useEffect } from 'react';

// Styles
import './styles.css';

// Components
import Menu from '../../components/Menu';

export default function Normas() {
  useEffect(() => {
    // Execução única
    document.title = "Normas de Segurança | Catálogo de Química";
  }, []);

  return (
    <>
      <Menu />
      <div className="Normas">
        <h2>Normas de Segurança</h2>
        <h3>Conservação do Laboratório</h3>
        <ol>
          <li>Exemplo de algo</li>
          <li>Exemplo de alguma coisa</li>
          <li>Exemplo de coisa</li>
          <li>Um bom exemplo</li>
          <li>Definitivamente o melhor exemplo de todos</li>
        </ol>
        <h3>Conservação da Vida</h3>
        <ol>
          <li>Exemplo de algo</li>
          <li>Exemplo de alguma coisa</li>
          <li>Exemplo de coisa</li>
          <li>Um bom exemplo</li>
          <li>Definitivamente o melhor exemplo de todos</li>
        </ol>
        <h3>Extremamente Importantes</h3>
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