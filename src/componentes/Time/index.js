import Officials from '../Officials'
import './Time.css'

const Time = ({ nome, corPrimaria, corSecundaria, officials, onDelete }) => {
    if (officials.length === 0) return null  

    return (
        <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: corSecundaria }}>
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
