import { AiFillCloseCircle } from 'react-icons/ai'
import './Officials.css'


const Officials = ({imagem, nome, cargo, corDeFundo, onDelete}) => {
    return (
    <div className='officials'>
        <AiFillCloseCircle size={30} className='delete' onClick={onDelete} />
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