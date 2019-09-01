import React, { useEffect } from 'react';

// Styles
import './styles.css';

// Components
import Menu from '../../components/Menu';
import Vidraria from '../../components/Vidraria';
import Footer from '../../components/Footer';

// Vidrarias
import vidrarias from '../../services/vidrarias';

// Imagens
import v1 from '../../assets/vidraria/1.jpg';
import v2 from '../../assets/vidraria/2.jpg';
import v3 from '../../assets/vidraria/3.jpg';
import v4 from '../../assets/vidraria/4.jpg';
import v5 from '../../assets/vidraria/5.jpg';
import v6 from '../../assets/vidraria/6.jpg';
import v7 from '../../assets/vidraria/7.jpg';
import v8 from '../../assets/vidraria/8.jpg';
import v9 from '../../assets/vidraria/9.jpg';
import v10 from '../../assets/vidraria/10.jpg';
import v11 from '../../assets/vidraria/11.jpg';
import v12 from '../../assets/vidraria/12.jpg';
import v13 from '../../assets/vidraria/13.jpg';
import v14 from '../../assets/vidraria/14.jpg';
import v15 from '../../assets/vidraria/15.jpg';
import v16 from '../../assets/vidraria/16.jpg';
import v17 from '../../assets/vidraria/17.jpg';
import v18 from '../../assets/vidraria/18.jpg';
import v19 from '../../assets/vidraria/19.jpg';
import v20 from '../../assets/vidraria/20.jpg';
import v21 from '../../assets/vidraria/21.jpg';
import v22 from '../../assets/vidraria/22.jpg';
import v23 from '../../assets/vidraria/23.jpg';
import v24 from '../../assets/vidraria/24.jpg';
import v25 from '../../assets/vidraria/25.jpg';
import v26 from '../../assets/vidraria/26.jpg';
import v27 from '../../assets/vidraria/27.jpg';
import v28 from '../../assets/vidraria/28.jpg';
import v29 from '../../assets/vidraria/29.jpg';
import v30 from '../../assets/vidraria/30.jpg';
import v31 from '../../assets/vidraria/31.jpg';
import v32 from '../../assets/vidraria/32.jpg';
import v33 from '../../assets/vidraria/33.jpg';
import v34 from '../../assets/vidraria/34.jpg';
import v35 from '../../assets/vidraria/35.jpg';
import v36 from '../../assets/vidraria/36.jpg';
import v37 from '../../assets/vidraria/37.jpg';
import v38 from '../../assets/vidraria/38.jpg';
import v39 from '../../assets/vidraria/39.jpg';
import v40 from '../../assets/vidraria/40.jpg';
import v41 from '../../assets/vidraria/41.jpg';
import v42 from '../../assets/vidraria/42.jpg';

export default function Vidrarias() {
  useEffect(() => {
    // Execução única
    document.title = "Vidrarias e Equipamentos | Catálogo de Química";

    // Scroll para o topo da página
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Menu />
      <div className="Vidrarias">
        <h2 className="Title">Vidrarias e Equipamentos</h2>
        <p>Essas são algumas das vidrarias mais importantes para todo laboratório de química:</p>
        <ul>
          <Vidraria data={vidrarias["1"]} image={v1} />
          <Vidraria data={vidrarias["2"]} image={v2} />
          <Vidraria data={vidrarias["3"]} image={v3} />
          <Vidraria data={vidrarias["4"]} image={v4} />
          <Vidraria data={vidrarias["5"]} image={v5} />
          <Vidraria data={vidrarias["6"]} image={v6} />
          <Vidraria data={vidrarias["7"]} image={v7} />
          <Vidraria data={vidrarias["8"]} image={v8} />
          <Vidraria data={vidrarias["9"]} image={v9} />
          <Vidraria data={vidrarias["10"]} image={v10} />
          <Vidraria data={vidrarias["11"]} image={v11} />
          <Vidraria data={vidrarias["12"]} image={v12} />
          <Vidraria data={vidrarias["13"]} image={v13} />
          <Vidraria data={vidrarias["14"]} image={v14} />
          <Vidraria data={vidrarias["15"]} image={v15} />
          <Vidraria data={vidrarias["16"]} image={v16} />
          <Vidraria data={vidrarias["17"]} image={v17} />
          <Vidraria data={vidrarias["18"]} image={v18} />
          <Vidraria data={vidrarias["19"]} image={v19} />
          <Vidraria data={vidrarias["20"]} image={v20} />
          <Vidraria data={vidrarias["21"]} image={v21} />
          <Vidraria data={vidrarias["22"]} image={v22} />
          <Vidraria data={vidrarias["23"]} image={v23} />
          <Vidraria data={vidrarias["24"]} image={v24} />
          <Vidraria data={vidrarias["25"]} image={v25} />
          <Vidraria data={vidrarias["26"]} image={v26} />
          <Vidraria data={vidrarias["27"]} image={v27} />
          <Vidraria data={vidrarias["28"]} image={v28} />
          <Vidraria data={vidrarias["29"]} image={v29} />
          <Vidraria data={vidrarias["30"]} image={v30} />
          <Vidraria data={vidrarias["31"]} image={v31} />
          <Vidraria data={vidrarias["32"]} image={v32} />
          <Vidraria data={vidrarias["33"]} image={v33} />
          <Vidraria data={vidrarias["34"]} image={v34} />
          <Vidraria data={vidrarias["35"]} image={v35} />
          <Vidraria data={vidrarias["36"]} image={v36} />
          <Vidraria data={vidrarias["37"]} image={v37} />
          <Vidraria data={vidrarias["38"]} image={v38} />
          <Vidraria data={vidrarias["39"]} image={v39} />
          <Vidraria data={vidrarias["40"]} image={v40} />
          <Vidraria data={vidrarias["41"]} image={v41} />
          <Vidraria data={vidrarias["42"]} image={v42} />
        </ul>
      </div>
      <Footer />
    </>
  )
}