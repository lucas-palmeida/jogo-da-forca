import palavras from "../palavras";

export default function Jogo(props) {
  
  function iniciarJogo() {
    const palavra = palavras[Math.floor(Math.random() * palavras.length)];
    props.jogo.setPalavraSorteada(palavra);
    const palavraEscondida = Array.from(palavra).map(() => "_");
    props.jogo.setPalavraOculta(palavraEscondida.join(""));
    props.jogo.setJogoComecou(true);
    props.jogo.setErros(0);
    props.jogo.setLetrasUsadas([]);
    props.jogo.setFinal("");
  }

  return (
        <div className="jogo">
        <div className="imagem">
          <img src={props.jogo.imagem} alt="forca" data-test="game-image" />
        </div>
        <div className="palavras">
          <button className="escolher-palavra" onClick={iniciarJogo} data-test="choose-word" >Escolher Palavra</button>
          <p className={`palavra-sorteada ${props.jogo.final}`} data-test="word" data-answer={props.jogo.palavraSorteada}>{props.jogo.palavraOculta}</p>
        </div>
      </div>
    )
}