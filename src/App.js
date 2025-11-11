import { useState } from 'react';
import Forms from './componentes/Forms';
import Banner from './componentes/Banner'
import Time from './componentes/Time';
import Footer from './componentes/Footer';
import { v4 as uuidv4 } from 'uuid'


function App() {

  const [times,setTimes] = useState([
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

  const inicial = [
  {
    id: uuidv4(),
    favorito: false,
    nome: 'JULIANA AMOASEI',
    cargo: 'Desenvolvedora de software e instrutora',
    imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
    time: times[0].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'NEO SAM',
    cargo: 'Engenheiro de Software na Stone Age',
    imagem: 'https://github.com/neosamdez.png',
    time: times[0].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'GUILHERME LIMA',
    cargo: 'Desenvolvedor Python e JavaScript na Alura',
    imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
    time: times[0].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'PAULO SILVEIRA',
    cargo: 'Hipster e CEO da Alura',
    imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
    time: times[0].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'JULIANA AMOASEI',
    cargo: 'Desenvolvedora de software e instrutora',
    imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
    time: times[1].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'DANIEL ARTINE',
    cargo: 'Engenheiro de Software na Stone Age',
    imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
    time: times[1].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'GUILHERME LIMA',
    cargo: 'Desenvolvedor Python e JavaScript na Alura',
    imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
    time: times[1].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'PAULO SILVEIRA',
    cargo: 'Hipster e CEO da Alura',
    imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
    time: times[1].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'JULIANA AMOASEI',
    cargo: 'Desenvolvedora de software e instrutora',
    imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
    time: times[2].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'DANIEL ARTINE',
    cargo: 'Engenheiro de Software na Stone Age',
    imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
    time: times[2].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'GUILHERME LIMA',
    cargo: 'Desenvolvedor Python e JavaScript na Alura',
    imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
    time: times[2].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'PAULO SILVEIRA',
    cargo: 'Hipster e CEO da Alura',
    imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
    time: times[2].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'JULIANA AMOASEI',
    cargo: 'Desenvolvedora de software e instrutora',
    imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
    time: times[3].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'DANIEL ARTINE',
    cargo: 'Engenheiro de Software na Stone Age',
    imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
    time: times[3].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'GUILHERME LIMA',
    cargo: 'Desenvolvedor Python e JavaScript na Alura',
    imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
    time: times[3].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'PAULO SILVEIRA',
    cargo: 'Hipster e CEO da Alura',
    imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
    time: times[3].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'JULIANA AMOASEI',
    cargo: 'Desenvolvedora de software e instrutora',
    imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
    time: times[4].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'DANIEL ARTINE',
    cargo: 'Engenheiro de Software na Stone Age',
    imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
    time: times[4].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'GUILHERME LIMA',
    cargo: 'Desenvolvedor Python e JavaScript na Alura',
    imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
    time: times[4].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'PAULO SILVEIRA',
    cargo: 'Hipster e CEO da Alura',
    imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
    time: times[4].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'JULIANA AMOASEI',
    cargo: 'Desenvolvedora de software e instrutora',
    imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
    time: times[5].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'DANIEL ARTINE',
    cargo: 'Engenheiro de Software na Stone Age',
    imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
    time: times[5].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'GUILHERME LIMA',
    cargo: 'Desenvolvedor Python e JavaScript na Alura',
    imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
    time: times[5].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'PAULO SILVEIRA',
    cargo: 'Hipster e CEO da Alura',
    imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
    time: times[5].nome
  },
]


  const [players, setPlayers] = useState(inicial)

  const onNewPlayer = (player) => {
    setPlayers([...players, player])

  }

  const deletePlayer = (id) => {
    setPlayers(players.filter(player => player.id !== id ))
  }

  function onColorTime(cor, id){
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor
      }
      return time
    }))
  }

  const onRegisteredTime = (newTime) => {
    setTimes([...times, {...newTime, id: uuidv4()}])

  }

  function favoriteResolve(id){
    setPlayers(players.map(player => {
      if (player.id === id) player.favorito = !player.favorito
      return player
    }))
  }


  return (
    <div className="App">
      <Banner enderecoImagem = 'imagens/banner.png' />
      <Forms 
        onRegisteredTime={onRegisteredTime}
        times={times.map(time => time.nome)}
        onPlayerRegistered={player => onNewPlayer(player)}
      />
        <section className="time">
        <h1>Minha organização</h1>
      {times.map(time => 
        <Time 
          onFavoritar={favoriteResolve}
          id={time.id}
          onCor={onColorTime}
          key={time.nome} 
          nome={time.nome} 
          cor={time.cor}
          officials={players.filter(player => player.time === time.nome)}
          onDelete={deletePlayer}
        /> )}
        </section>
      <Footer/>

    </div>
  );
}

export default App;
