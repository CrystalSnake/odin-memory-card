import { useState } from 'react';
import './App.css';
import Board from './Board';

function App() {
  let [game, setGame] = useState(false);
  const startHandler = () => {
    game = true;
    setGame(game);
  };

  if (game) {
    return (
      <>
        <h1>Memory Card Game</h1>
        <Board />
      </>
    );
  }
  return (
    <>
      <h1>Memory Card Game</h1>
      <button onClick={startHandler}>Start</button>
    </>
  );
}

export default App;
