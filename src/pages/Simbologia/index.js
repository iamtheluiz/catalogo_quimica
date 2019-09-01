import React, { useEffect } from 'react';

// Styles
import './styles.css';

// Components
import Menu from '../../components/Menu';
import Pictograma from '../../components/Pictograma';
import Footer from '../../components/Footer';

// Simbolos
import simbolos from '../../services/simbologias';

// Images
import s1 from '../../assets/simbologia/1.webp';
import s2 from '../../assets/simbologia/2.webp';
import s3 from '../../assets/simbologia/3.webp';
import s4 from '../../assets/simbologia/4.webp';
import s5 from '../../assets/simbologia/5.webp';
import s6 from '../../assets/simbologia/6.webp';
import s7 from '../../assets/simbologia/7.webp';
import s8 from '../../assets/simbologia/8.webp';
import s9 from '../../assets/simbologia/9.webp';
import s10 from '../../assets/simbologia/10.webp';
import s11 from '../../assets/simbologia/11.webp';

export default function Simbologia() {
  useEffect(() => {
    // Execução única
    document.title = "Simbologia de Risco | Catálogo de Química";

    // Scroll para o topo da página
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Menu />
      <div className="Simbologia">
        <h2 className="Title">Simbologia de Risco</h2>
        <p>Foram definidos três tipos de perigos:</p>
        <p><strong>Perigos Físicos:</strong> Inflamáveis, explosivos, comburentes e substâncias/misturas auto reativas;</p>
        <p><strong>Perigos para a Saúde:</strong> Irritantes, nocivos, corrosivos, mutagénicos, tóxicos, entre outros;</p>
        <p><strong>Perigos para o Meio Ambiente:</strong> Toxicidade aquática aguda, entre outros.</p>

        <p className="legenda">Os pictogramas de cor alaranjado é a simbologia antiga, mas ainda muito presente nos reagente cuja data de fabricação é anterior ao ano de 2015.</p>

        <Pictograma data={simbolos["1"]} image={s1} />
        <Pictograma data={simbolos["2"]} image={s2} />
        <Pictograma data={simbolos["3"]} image={s3} />
        <Pictograma data={simbolos["4"]} image={s4} />
        <Pictograma data={simbolos["5"]} image={s5} />
        <Pictograma data={simbolos["6"]} image={s6} />
        <Pictograma data={simbolos["7"]} image={s7} />
        <Pictograma data={simbolos["8"]} image={s8} />
        <Pictograma data={simbolos["9"]} image={s9} />
        <Pictograma data={simbolos["10"]} image={s10} />
        <Pictograma data={simbolos["11"]} image={s11} />

      </div>
      <Footer />
    </>
  )
}