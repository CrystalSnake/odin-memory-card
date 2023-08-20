import { useState } from 'react';
import './App.css';
import Board from './Board';

function App() {
  const [game, setGame] = useState(false);

  const startHandler = () => {
    const gameStatus = true;
    setGame(gameStatus);
  };

  return (
    <>
      <h1>Memory Card Game</h1>
      {game ? <Board /> : <button onClick={startHandler}>Start</button>}
    </>
  );
}

export default App;
