import { useState } from 'react';
import Forms from './componentes/Forms';
import Banner from './componentes/Banner'
import Time from './componentes/Time';
import Footer from './componentes/Footer';
import { v4 as uuidv4 } from 'uuid'
import { IOfficials } from './componentes/Share/interFaces/IOfficials';
import { ITime } from './componentes/Share/interFaces/ITime';




function App() {

  const [times,setTimes] = useState<ITime[]>([
  {
    id: uuidv4(),
    nome: 'Front-End',
    cor: '#E8F8FF',
  },
  {
    id: uuidv4(),
    nome: 'Data Science',
    cor: '#F0F8E2',
  },
  { 
    id: uuidv4(),
    nome: 'Devops',
    cor: '#FDE7E8',
  },
  {
    id: uuidv4(),
    nome: 'UX e Design',
    cor: '#FAE5F5',
  },
  {
    id: uuidv4(),
    nome: 'Mobile',
    cor: '#FFF5D9',
  },
  {
    id: uuidv4(),
    nome: 'Inovação e Gestão',
    cor: '#FFEEDF',
  }
  ])

  const [players, setPlayers] = useState<IOfficials[]>([])

 // ----- FUNÇÕES -----
  const onNewPlayer = (player: IOfficials): void => {
    setPlayers([...players, player])
  }

  const deletePlayer = (id: string): void => {
    setPlayers(players.filter(player => player.id !== id))
  }

  const onColorTime = (cor: string, id: string): void => {
    setTimes(times.map(time => {
      if (time.id === id) {
        return { ...time, cor }
      }
      return time
    }))
  }

  const onRegisteredTime = (newTime: { nome: string; cor: string }): void => {
    setTimes([...times, { ...newTime, id: uuidv4() }])
  }

  const favoriteResolve = (id: string): void => {
    setPlayers(players.map(player => {
      if (player.id === id) {
        return { ...player, favorito: !player.favorito }
      }
      return player
    }))
  }

  // ----- JSX -----
  return (
    <div className="App">
      <Banner enderecoImagem="imagens/banner.png" />

      <Forms
        onRegisteredTime={onRegisteredTime}
        times={times.map(time => time.nome)}
        onPlayerRegistered={onNewPlayer}
      />

      <section className="time">
        <h1>Minha organização</h1>
        {times.map(time => (
          <Time
            key={time.id}
            id={time.id}
            nome={time.nome}
            cor={time.cor}
            officials={players.filter(player => player.time === time.nome)}
            onCor={onColorTime}
            onDelete={deletePlayer}
            onFavoritar={favoriteResolve}
          />
        ))}
      </section>

      <Footer />
    </div>
  )
}

export default App