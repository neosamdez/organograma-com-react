import './Officials.css'


const Officials = ({imagem, nome, cargo, corDeFundo}) => {
    return (
    <div className='officials'>
        <div className='header' style={{ backgroundColor: corDeFundo}}>
            <img src={imagem} alt={nome} />
        </div>
        <div className='footer'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>
)

}

export default Officials