import React, { useEffect } from 'react';

// Styles
import './styles.css';

// Components
import Menu from '../../components/Menu';

export default function Referencias() {
  useEffect(() => {
    // Execução única
    document.title = "Referências | Catálogo de Química";
  }, []);

  return (
    <>
      <Menu />
      <div className="Referencias">
        <h2>Referências</h2>
        <ul>
          <li>Da Silva, André Luis Silva. “Segurança em Laboratórios de Química”, Infoescola, Disponível em: {"<https://www.infoescola.com/quimica/seguranca-em-laboratorios-de-quimica/>"} Acesso em: 27 de agosto de 2019.</li>
          <li>Sociedade Brasileira de Farmacognosia. “Normas de Segurança no Laboratório”, Disponível em: {"<http://www.sbfgnosia.org.br/Ensino/Normas_de_seguranca.html>"} Acesso em: 27 de agosto de 2019.</li>
          <li>RUSSELL, John B.; Química Geral vol.1, São Paulo: Pearson Education do Brasil, Makron Books, 1994.</li>
          <li>FELTRE, Ricardo; Fundamentos da Química, vol. Único, Ed. Moderna, São Paulo/SP – 1990.</li>
          <li>HARRIS, Daniel c.; Análise Química Quantitativa, Ed. LTC, Rio de Janeiro/RJ – 1999.</li>
          <li>HUMISTON, Gerard E.; BRADY, James E.; Química Geral, Ed. LTC, Rio de Janeiro/RJ – 2000</li>
          
        </ul>
      </div>
    </>
  )
}