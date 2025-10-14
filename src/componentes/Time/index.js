import Officials from '../Officials'
import './Time.css'

const Time = ({ nome, corPrimaria, corSecundaria, officials }) => {
    if (officials.length === 0) return null  

    return (
        <section className='time' style={{ backgroundColor: corSecundaria }}>
            <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
            <div className='colaboradores'>
                {officials.map((official) => (
                    <Officials
                        key={official.nome} 
                        nome={official.nome}
                        imagem={official.imagem}
                        cargo={official.cargo}
                    />
                ))}
            </div>
        </section>
    )
}

export default Time
