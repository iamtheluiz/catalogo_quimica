import React, { useEffect } from 'react';

// Styles
import './styles.css';

// Components
import Menu from '../../components/Menu';

export default function Normas() {
  useEffect(() => {
    // Execução única
    document.title = "Normas de Segurança | Catálogo de Química";

    // Scroll para o topo da página
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Menu />
      <div className="Normas">
        <h2 className="Title">Normas de Segurança</h2>
        <p>Qualquer laboratório onde se manipule substâncias químicas é potencialmente perigoso. Portanto, tenha o máximo de cautela e atenção ao realizar um experimento, evitando conversas e brincadeiras que dispersem a concentração. Existe uma regra geral que deve ser seguida neste ambiente: toda substância desconhecida é potencialmente perigosa até que se prove o contrário! A toxidade das substâncias químicas varia enormemente e nem todas, mesmo as mais comuns, tiveram seus aspectos toxicológicos suficientemente estudados.</p>
        <p>A ocorrência de acidentes em laboratório de química, infelizmente, não é tão raro. Com a finalidade de reduzir a frequência e a gravidade desses acidentes, torna-se imprescindível que, durante os trabalhos realizados, se observe uma série de normas de segurança. Muitas das operações de laboratório necessitam de instruções específicas que os alunos devem seguir para a sua segurança e de seus colegas.</p>
        <p>Ao iniciar o trabalho em um laboratório, é fundamental conhecer os procedimentos de segurança que irão permitir uma atuação com um mínimo de risco. Lembre-se sempre: você é parte integrante de uma equipe. Sua responsabilidade perante o laboratório estende-se a seus colegas. A segurança no trabalho depende da ação de todos, e não apenas das pessoas encarregadas especificamente de promovê-la.</p>
        <p>As principais normas de segurança em um laboratório de química são:</p>
        <ul>
          <li>Evite trabalhar sozinho no laboratório. Um companheiro, ao menos, sempre será uma ajuda ou testemunha em caso de acidente;</li>
          <li>Use o guarda-pó ou avental para proteger a roupa, sempre abotoado (fechado);</li>
          <li>Não deixe de usar óculos de segurança nos laboratórios onde seu uso é obrigatório. Use-os quando for executar uma operação que represente riscos;</li>
          <li>Não coloque materiais de laboratório em roupas ou gavetas de uso pessoal;</li>
          <li>Não leve as mãos à boca ou aos olhos quando estiver manipulando produtos químicos;</li>
          <li>Use sapato fechado (nunca sandálias ou chinelos) e calça;</li>
          <li>Não use roupas de tecido sintético ou outro material facilmente inflamável;</li>
          <li>Não ingira ou beba qualquer alimento no laboratório;</li>
          <li>Não coloque alimentos nas bancadas, armários e geladeiras dos laboratórios;</li>
          <li>Não utilize vidraria de laboratório como utensílios domésticos;</li>
          <li>Não fume no laboratório;</li>
          <li>Evite fazer brincadeiras no laboratório;</li>
          <li>Se algum ácido ou outro produto químico for derramado, lave local com bastante água e cuidado;</li>
          <li>Leia com atenção o rótulo dos reagentes para se ter certeza de que pegou frasco correto. Não jogue material sólido na pia;</li>
          <li>Observe a limpeza dos materiais antes de utilizá-los;</li>
          <li>Não gaste reagentes e soluções inutilmente, utilize somente o necessário para o experimento;</li>
          <li>Nunca pese material diretamente sobre o prato da balança, use béquer, vidro de relógio ou papel toalha;</li>
          <li>Se houver precipitado ou duas fases em solução a ser utilizada, agite cuidadosamente de modo a homogeneizá-la;</li>
          <li>Não recoloque nos frascos soluções restantes, podem contaminar o conteúdo do recipiente;</li>
          <li>Quando utilizar soluções e reagentes, certifique-se que o rótulo esteja voltado para cima, evitando que se estrague;</li>
          <li>Só use água destilada nos experimentos;</li>
          <li>Não trabalhe com material defeituoso, principalmente o de vidro;</li>
          <li>Não deixe sobre a mesa a lamparina acesa com chama forte;</li>
          <li>Não deixe vidro quente em lugar que possam pegá-lo inadvertidamente;</li>
          <li>Não prove ou engula drogas ou reagentes do laboratório;</li>
          <li>Não trabalhe com inflamáveis próximos a chamas;</li>
          <li>Não aqueça tubos de ensaio com a boca virada para si ou para outra pessoa. Habitue-se a aquecer o tubo de ensaio de forma intermitente;</li>
          <li>Não aqueça substâncias inflamáveis ou voláteis em chama direta, use banho-maria;</li>
          <li>Feche direito os frascos das soluções e regentes, principalmente os que forem voláteis e inflamáveis;</li>
          <li>Evite jogar líquidos inflamáveis na pia, se o fizer abra bastante a torneira; </li>
          <li>Lave bem as mãos ao deixar o laboratório e antes de cada lanche ou refeição; </li>
          <li>Nunca pipete com a boca soluções, líquidos puros ou produtos tóxicos, use pipetas automáticas ou preás de aspiração;</li>
          <li>Nunca adicione água a uma solução de ácido ou base concentrada para diluí-los. Sempre adicione essas soluções concentradas à água;</li>
          <li>Substâncias como vapores tóxicos tais como: bromo, cloro, ácido clorídrico e nítrico concentrados, solução concentrada de amônia entre outras devem ser manipuladas na capela;</li>
          <li>Não use lentes de contato, elas podem ser danificadas por produtos químicos causando graves lesões.</li>
          <li>Não se exponha às radiações ultravioleta, infravermelho ou luminosidade intensa sem proteção adequada (óculos com lentes filtrantes);</li>
          <li>Feche todas as gavetas e portas antes de sair;</li>
          <li>Certas dosagens bioquímicas se alteram em presença de luz de iodo, neste caso só acender a luz na hora de fazer a leitura;</li>
          <li>Os materiais após seu uso não devem ser colocados na pia, sem antes um tratamento químico;</li>
          <li>Mantenha as bancadas sempre limpas e livres de materiais estranhos ao trabalho;</li>
          <li>Ao esvaziar um frasco de reagente, limpe-o com água antes de colocá-lo para lavagem;</li>
          <li>Rotule imediatamente todo e qualquer preparado, reagente ou solução e amostras coletadas;</li>
          <li>Retire da bancada os materiais, amostras e reagentes empregados no trabalho logo após terminá-lo;</li>
          <li>Jogue papéis e materiais usados no lixo somente quando não apresentarem riscos;</li>
          <li>Use pinças de tamanho adequado em perfeito estado de conservação;</li>
          <li>Limpe imediatamente todo e qualquer derramamento de produtos e reagentes.</li>
        </ul>
        <p>Em caso de derramamento de líquidos inflamáveis, faça o seguinte:</p>
        <ul>
          <li>Interrompa o trabalho;</li>
          <li>Avise as pessoas próximas sobre o ocorrido;</li>
          <li>Solicite ou efetue a limpeza imediatamente;</li>
          <li>Alerte o responsável pelo laboratório;</li>
          <li>Verifique e corrija o problema.</li>
        </ul>
        <p>É de extrema importância seguir cuidadosamente cada uma das regras para se tem um bom trabalho no laboratório de química e acima de tudo não se machucar nem machucar os colegas ao redor, também é imprescindível seguir todas as ordens do professor responsável durante a aula.</p>
      </div>
    </>
  )
}