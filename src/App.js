import { useState } from 'react';
import Banner from './componentes/Banner';
import Forms from './componentes/Forms';


function App() {

  const [players, setPlayers] = useState([])

  const onNewPlayer = (player) => {
    console.log(player)
    setPlayers([...players, player])

  }

  return (
    <div className="App">
      <Banner />
      <Forms onPlayerRegistered={player => onNewPlayer(player)}/>
    </div>
  );
}

export default App;
