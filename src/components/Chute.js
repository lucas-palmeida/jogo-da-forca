export default function Chute(props) {
  
  function verificarVitoria() {
    const palavraChute = props.chute.chute.toLowerCase();
    if(palavraChute !== props.chute.palavraSorteada){
      props.chute.setErros(6);
      props.chute.setFinal("perdeu");
    }
    else {
      props.chute.setFinal("ganhou");
    }
    props.chute.setPalavraOculta(props.chute.palavraSorteada);
    props.chute.setJogoComecou(false);
    props.chute.setChute('');
  }
  
  return (
    <div className="chute">
      <p>Já sei a palavra!</p>
      <input
        type="text"
        className="campo-chute"
        onChange={e => props.chute.setChute(e.target.value)}
        value={props.chute.chute}
        disabled={!(props.chute.jogoComecou)}
        data-test="guess-input"
      ></input>
      <button onClick={verificarVitoria} disabled={!(props.chute.jogoComecou)} data-test="guess-button">Chutar</button>
    </div>
  );
}
