import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Page Style
import './styles.css';

// Svg's
import logo from '../../assets/logo.svg';
import link from '../../assets/link.svg';
import plus from '../../assets/plus.svg';

// Components
import Integrantes from '../../components/Integrantes';
import Footer from '../../components/Footer';

// Tópicos do Site
import topicos from '../../services/topicos';

// Page Component
export default function Home() {
  useEffect(() => {
    // Define o titulo da página
    document.title = "Catálogo de Química";

    // Scroll para o topo da página
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Home">
      <header>
        <img id="logo" src={logo} alt="Website Logo" />
        <h1>Catálogo de Química</h1>
        <span>Um manual de boas práticas e conhecimentos para laboratórios de química!</span>
        <a id="scrollLink" href="#projetoMain">
          <img src={plus} alt="Mostrar mais" />
        </a>
      </header>
      <main id="projetoMain">
        <h2>O Projeto</h2>
        <p>Esse projeto foi desenvolvido como atividade da matéria "Laboratório de Práticas Integradas 1B", ministrada pela Professora Cristina Porto no período 2019/2.</p>
        <p>A principal ideia de desenvolver um site acerca desse conteúdo é a contecentração dos tópicos em uma única plataforma, para que não seja necessária uma pesquisa excessiva em vários sites ao necessitar de resposta para algumas perguntas.</p>
        <h2>Conteúdo</h2>
        <ul>
          {topicos.map((topico, index) => (
            <li key={index}><img className="linkSvg" src={link} alt="Anchor" /><Link to={topico.url}>{topico.nome}</Link></li>
          ))}
        </ul>
        <p className="legenda">* Obs: Para acessar um tópico, clique no link</p>
      </main>
      <Integrantes />
      <Footer />
    </div>
  )
}