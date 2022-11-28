import React, { useState } from "react";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import Chute from "./components/Chute";

import forca0 from "./assets/images/forca0.png";
import forca1 from "./assets/images/forca1.png";
import forca2 from "./assets/images/forca2.png";
import forca3 from "./assets/images/forca3.png";
import forca4 from "./assets/images/forca4.png";
import forca5 from "./assets/images/forca5.png";
import forca6 from "./assets/images/forca6.png";

export default function App() {
  const forcas = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
  const [palavraSorteada, setPalavraSorteada] = useState("");
  const [palavraOculta, setPalavraOculta] = useState("");
  const [letrasUsadas, setLetrasUsadas] = useState([]);
  const [erros, setErros] = useState(0);
  const [chute, setChute] = useState("");
  const [jogoComecou, setJogoComecou] = useState(false);
  const [final, setFinal] = useState("");

  const estados = {
    imagem: forcas[erros],
    palavraSorteada,
    palavraOculta,
    letrasUsadas,
    erros,
    chute,
    jogoComecou,
    final,
    setPalavraSorteada,
    setPalavraOculta,
    setLetrasUsadas,
    setErros,
    setChute,
    setJogoComecou,
    setFinal,
  };

  return (
    <div className="conteudo">
      <Jogo jogo={estados} />
      <div className="inferior">
        <Letras letras={estados} />
        <Chute chute={estados} />
      </div>
    </div>
  );
}
