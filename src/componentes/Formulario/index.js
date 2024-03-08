import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto/Index';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';


//Ctrl + Espaço com o cursor no que quer importar, faz um import rapido
const Formulario = (props) => {

    //As states, estudar melhor depois...
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    //Método que é chamado quando clicamos no botão 
    //para submeter o formulário
    const aoSalvar = (evento) => {
        //Esse parametro "evento" faz com que o botão não
        //recarregue mais a página após chamar a função
        //preventDefault()
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })

        //Aqui, após o cadastro do funcionario, limpamos os campos
        //do formulário para o próximo cadastro a ser realizado...
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do jogador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />

                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite o seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />

                <CampoTexto
                    label="Imagem"
                    placeholder="Insira o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={props.nomeDosTimes} 
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />

                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;
