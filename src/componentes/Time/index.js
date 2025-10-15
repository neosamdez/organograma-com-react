import Officials from '../Officials'
import './Time.css'

const Time = ({ nome, corPrimaria, corSecundaria, officials, onDelete, onCor }) => {
    if (officials.length === 0) return null  

    return (
        <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: corSecundaria }}>
            <input 
                onChange={event => onCor(event.target.value, nome)}
                value={corSecundaria} 
                type='color' 
                className='input-cor'
            />
            <h3 style={{ borderColor: corSecundaria }}>{nome}</h3>
            <div className='colaboradores'>
                {officials.map((official) => {
                    return <Officials
                        corDeFundo={corPrimaria}
                        key={official.nome} 
                        nome={official.nome}
                        imagem={official.imagem}
                        cargo={official.cargo}
                        onDelete={() => {}}
                    />
                })}
            </div>
        </section>
    )
}

export default Time
