import React, { useEffect } from 'react';

// Styles
import './styles.css';

// Components
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

export default function Referencias() {
  useEffect(() => {
    // Execução única
    document.title = "Referências | Catálogo de Química";

    // Scroll para o topo da página
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Menu />
      <div className="Referencias">
        <h2 className="Title">Referências</h2>
        <p>DA SILVA, André Luis Silva. <b>“Segurança em Laboratórios de Química”</b>, Infoescola, Disponível em: {"<https://www.infoescola.com/quimica/seguranca-em-laboratorios-de-quimica/>"}. Acesso em: 27 de agosto de 2019.</p>
        <p>RUSSELL, John B.; <b>Química Geral vol.1</b>, São Paulo: Pearson Education do Brasil, Makron Books, 1994.</p>
        <p>FELTRE, Ricardo; <b>Fundamentos da Química</b>, vol. Único, Ed. Moderna, São Paulo/SP – 1990.</p>
        <p>HARRIS, Daniel c.; <b>Análise Química Quantitativa</b>, Ed. LTC, Rio de Janeiro/RJ – 1999.</p>
        <p>HUMISTON, Gerard E.; BRADY, James E.; <b>Química Geral</b>, Ed. LTC, Rio de Janeiro/RJ – 2000.</p>
        <p>Sociedade Brasileira de Farmacognosia. <b>“Normas de Segurança no Laboratório”</b>, Disponível em: {"<http://www.sbfgnosia.org.br/Ensino/Normas_de_seguranca.html>"}. Acesso em: 27 de agosto de 2019.</p>
        <p><b>Material e equipamento de uso comum no Laboratório de Química.</b> Disponível em: {"<https://sites.google.com/site/etlafq/material_laboratorio>"}. Acesso em: 27 de agosto de 2019.</p>
        <p>LADISLAU, Marcos Tulios Frota, <b>“Símbolos de riscos – a nova norma de classificação e simbologia GHS”</b> Atomizando. Disponível em: {"<https://atomizandoifam.wixsite.com/atomizando/simbolos-de-riscos>. Acesso em: 27 de agosto de 2019"}.</p>
        <p>ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. <b>NBR 14725-2: Produtos químicos — Informações sobre segurança, saúde e meio ambiente Parte 2: Sistema de classificação de perigo.</b> Rio de Janeiro. 2009. Disponível em: {"<http://www2.iq.usp.br/pos-graduacao/images/documentos/seg_2_2013/nbr147252.pdf>"}. Acesso em: 31 de agosto de 2019.</p>
      </div>
      <Footer />
    </>
  )
}