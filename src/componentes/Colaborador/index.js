import './Colaborador.css'


// Os parametros que usei dentro das chaves ainda são as "props"
//porem agora, eu citei o que somente quero usar, nesse caso
//mesmo passando outros parametros, usarei somente os que foram
//selecionados

const Colaborador = ({ nome, imagem, cargo, corDeFundo }) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4> {nome} </h4>
                <h5> {cargo} </h5>
            </div>
        </div>
    )
}

export default Colaborador;