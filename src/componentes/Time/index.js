import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {

    const css = { backgroundColor: props.corSecundaria };

    return (
        //a linha abaixo faz uma verificação no arrey de colaboradores
        //e verifica se é maior que 0, caso seja verdadeiro, ele renderiza
        //somente o time que tiver colaborador dentro. Já os times que
        //ainda não tiveram colaboradores cadastrados, não será renderizado
        props.colaboradores.length > 0 &&
        <section className='time' style={css} >
            <h3 style={{ borderColor: props.corPrimaria }} > {props.nome} </h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador =>
                    <Colaborador
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        corDeFundo={props.corPrimaria}
                    />
                )}
            </div>
        </section>
    )
}

export default Time;