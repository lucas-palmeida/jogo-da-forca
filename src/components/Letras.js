export default function Letras(props) {
    
    const alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
    const letras = alfabeto.map((l) => ({
        letra: l.toUpperCase(),
        inativo: props.letras.letrasUsadas.includes(l),
        jogada: () => escolheuLetra(l)
    }));

    function escolheuLetra(letra) {
        props.letras.setLetrasUsadas([...props.letras.letrasUsadas, letra]);
        const palavraOcultaAtualizada = props.letras.palavraSorteada.includes(letra) ? mostrarLetras(letra).join('') : props.letras.palavraOculta;

        if(props.letras.palavraSorteada.includes(letra)) {
            props.letras.setPalavraOculta(palavraOcultaAtualizada);
        }
        else {
            props.letras.setErros(props.letras.erros + 1);
            if(props.letras.erros === 5) {
                props.letras.setPalavraOculta(props.letras.palavraSorteada);
                props.letras.setJogoComecou(false);
                props.letras.setFinal("perdeu");
            }
        }
        verificarVitoria(palavraOcultaAtualizada);
    }

    function mostrarLetras(letra) {
        const palavraJogo = Array.from(props.letras.palavraSorteada);
        const palavraEscondida = Array.from(props.letras.palavraOculta);
        while(palavraJogo.indexOf(letra) !== -1) {
            const index = palavraJogo.indexOf(letra);
            palavraEscondida[index] = props.letras.palavraSorteada[index];
            palavraJogo[index] = "_";
        }
        return palavraEscondida;
    }

    function verificarVitoria(palavraOcultaAtualizada) {
        if(palavraOcultaAtualizada ===  props.letras.palavraSorteada){
            props.letras.setPalavraOculta(props.letras.palavraSorteada);
            props.letras.setJogoComecou(false);
            props.letras.setFinal("ganhou");
        }
    }

    return (
        <div className="teclado">
            {letras.map((letra) => {
                const desabilitado = !(props.letras.jogoComecou) ? true : letra.inativo;
                return (
                    <button className="letra" key={letra.letra} onClick={letra.jogada} disabled={desabilitado} data-test="letter">{letra.letra}</button>
                )
            })}
        </div>
    )
}