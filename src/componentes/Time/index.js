import Officials from '../Officials'
import './Time.css'
import hexToRgba from 'hex-to-rgba'

const Time = ({ nome, cor, officials, onDelete, onCor, id }) => {
    if (officials.length === 0) return null  

    return (
        <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(cor, '0.6') }}>
            <input 
                onChange={event => onCor(event.target.value, id)}
                value={cor} 
                type='color' 
                className='input-cor'
            />
            <h3 style={{ borderColor: cor }}>{nome}</h3>
            <div className='colaboradores'>
                {officials.map((official) => {
                    return <Officials
                        id={id}
                        corDeFundo={cor}
                        key={official.nome} 
                        nome={official.nome}
                        imagem={official.imagem}
                        cargo={official.cargo}
                        onDelete={() => onDelete(official.id)}
                    />
                })}
            </div>
        </section>
    )
}

export default Time
