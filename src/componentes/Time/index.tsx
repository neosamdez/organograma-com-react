import Officials from '../Officials'
import { IOfficials } from '../Share/interFaces/IOfficials'
import './Time.css'
import hexToRgba from 'hex-to-rgba'

interface TimeProps {
  cor: string
  nome: string
  officials: IOfficials[]
  onDelete: (id: string) => void
  onCor: (novaCor: string, id: string) => void
  id: string
  onFavoritar: (id: string) => void
}

const Time = ({
  nome,
  cor,
  officials,
  onDelete,
  onCor,
  id,
  onFavoritar
}: TimeProps) => {
  if (officials.length === 0) return null

  return (
    <section
      className="time"
      style={{
        backgroundImage: 'url(/imagens/fundo.png)',
        backgroundColor: hexToRgba(cor, '0.6')
      }}
    >
      <input
        onChange={event => onCor(event.target.value, id)}
        value={cor}
        type="color"
        className="input-cor"
      />
      <h3 style={{ borderColor: cor }}>{nome}</h3>
      <div className="colaboradores">
        {officials.map(official => (
          <Officials
            key={official.id}
            id={official.id}
            nome={official.nome}
            cargo={official.cargo}
            imagem={official.imagem}
            favorito={official.favorito}
            corDeFundo={cor}
            onDelete={() => onDelete(official.id)}
            onFavoritar={onFavoritar}
            data={official.data}
          />
        ))}
      </div>
    </section>
  )
}

export default Time
