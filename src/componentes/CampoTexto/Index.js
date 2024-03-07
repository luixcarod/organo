// Essa forma de escrever o código funciona da mesma forma
// que usamos no componente do Banner
import { useState } from 'react';
import './CampoTexto.css'


const CampoTexto = (props) => {

    //let é uma variavel diferente de const, pois iremos ficar
    //alterando o valor dela de acordo com as letras que o
    //usuario inserir nos campos de texto...
    //let valor = '';



    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto;