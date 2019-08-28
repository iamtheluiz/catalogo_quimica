import React from 'react';

// Page Style
import './styles.css';

// Logo
import logo from '../../logo.svg';

// Components
import Integrantes from '../../components/Integrantes';
import Footer from '../../components/Footer';

// Page Component
export default function Home() {
  return(
    <div className="Home">
      <header>
        <img id="logo" src={logo} alt="Website Logo" />
        <h1>Catálogo de Química</h1>
        <span>Um manual de boas práticas e conhecimentos para laboratórios de química!</span>
        <a id="scrollLink" href="#projetoMain">+</a>
      </header>
      <main id="projetoMain">
        <h2>O Projeto</h2>
        <p>Esse projeto foi desenvolvido como atividade da matéria "Laboratório de Práticas Integradas 1B", ministrada pela Professora Cristina Porto no período 2019/2.</p>
        <p>A principal ideia de desenvolver um site acerca desse conteúdo é a contecentração dos tópicos em uma única plataforma, para que não seja necessária uma pesquisa excessiva em vários sites ao necessitar de resposta para algumas perguntas.</p>
      </main>
      <Integrantes />
      <Footer />
    </div>
  )
}