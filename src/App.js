export default function App() {
  const letra = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  return (
    <div className="conteudo">
      <div className="superior">
        <div className="imagem">
          <img src="assets/images/forca0.png" alt="forca" />
        </div>
        <div className="palavras">
          <button className="escolher-palavra">Escolher Palavra</button>
          <p className="palavra-sorteada">_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</p>
          {/* 16 */}
        </div>
      </div>
      <div className="inferior">
        <div className="teclado">
          {letra.map((l) => <button className="letra">{l}</button>)}
        </div>
        <div className="chute">
          <p>Já sei a palavra!</p>
          <input type="text" className="campo-chute"></input>
          <button>Chutar</button>
        </div>
      </div>
    </div>
  );
}