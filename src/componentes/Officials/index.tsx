import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import './Officials.css'

interface OfficialsProps {
    nome: string
    imagem: string
    cargo: string
    corDeFundo: string
    id: string
    onDelete: (id: string) => void
    favorito: boolean
    onFavoritar: (id: string) => void
}

const Officials = ({
    id, 
    imagem, 
    nome, 
    cargo, 
    corDeFundo, 
    onDelete, 
    favorito, 
    onFavoritar
}: OfficialsProps) => {

    function favoritar( ) {
        onFavoritar(id)
    }

    const propsfavorito = {
        size: 24,
        onClick: favoritar
    }

    return (
    <div className='officials'>
        <AiFillCloseCircle 
            size={30} 
            className='delete' 
            onClick={() => onDelete(id)}

        />
        <div className='header' style={{ backgroundColor: corDeFundo}}>
            <img src={imagem} alt={nome} />
        </div>
        <div className='footer'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
            <div className='favoritar'>
                {favorito 
                    ? <AiFillHeart {...propsfavorito}color='#ff0000'/> 
                    : <AiOutlineHeart {...propsfavorito}/>
                }
            </div>
        </div>
    </div>
)

}

export default Officials