import { useState } from 'react';
import Banner from './componentes/Banner';
import Forms from './componentes/Forms';
import Time from './componentes/Time';


function App() {

  const times = [
  {
    nome: 'Front-End',
    corPrimaria: '#82CFFA',
    corSecundaria: '#E8F8FF',
  },
  {
    nome: 'Data Science',
    corPrimaria: '#A6D157',
    corSecundaria: '#F0F8E2',
  },
  { 
    nome: 'Devops',
    corPrimaria: '#E06B69',
    corSecundaria: '#FDE7E8',
  },
  {
    nome: 'UX e Design',
    corPrimaria: '#D86EBF',
    corSecundaria: '#FAE5F5',
  },
  {
    nome: 'Mobile',
    corPrimaria: '#FEBA05',
    corSecundaria: '#FFF5D9',
  },
  {
    nome: 'Inovação e Gestão',
    corPrimaria: '#FF8A29',
    corSecundaria: '#FFEEDF',
  }
  ]

  const [players, setPlayers] = useState([])

  const onNewPlayer = (player) => {
    setPlayers([...players, player])

  }

  return (
    <div className="App">
      <Banner />
      <Forms times={times.map(time => time.nome)} onPlayerRegistered={player => onNewPlayer(player)}/>

      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria}
      corSecundaria={time.corSecundaria}
      officials={players.filter(player => player.time === time.nome)}
      /> )}

    </div>
  );
}

export default App;
