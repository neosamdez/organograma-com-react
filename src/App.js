import { useState } from 'react';
import Banner from './componentes/Banner';
import Forms from './componentes/Forms';
import Time from './componentes/Time';


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
      <Time nome="Group Sam"/>
      <Time nome="Group Sam"/>
      <Time nome="Group Sam"/>
    </div>
  );
}

export default App;
