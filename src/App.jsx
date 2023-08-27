import { useState } from 'react';
import './App.css';
import Board from './Board';

const difficulties = [
  { name: 'Easy', n: 4, class: 'small' },
  { name: 'Normal', n: 9, class: 'normal' },
  { name: 'Hard', n: 16, class: 'big' },
];

function App() {
  const [difficulty, setDifficulty] = useState(difficulties[0]);
  const changeDiff = () => {
    let newDiff;
    if (difficulty.name === 'Easy') {
      newDiff = difficulties[1];
    } else if (difficulty.name === 'Normal') {
      newDiff = difficulties[2];
    } else {
      newDiff = difficulties[0];
    }
    setDifficulty(newDiff);
  };

  const [game, setGame] = useState(false);

  const startHandler = () => {
    const gameStatus = true;
    setGame(gameStatus);
  };

  const exitHandler = () => {
    const gameStatus = false;
    setGame(gameStatus);
  };

  return (
    <>
      <header>
        <h1>Memory Card Game</h1>
      </header>
      {game ? (
        <Board
          n={difficulty.n}
          className={difficulty.class}
          exit={exitHandler}
        />
      ) : (
        <>
          <div className="start-buttons">
            <button onClick={startHandler}>Start</button>
            <button onClick={changeDiff}>{difficulty.name}</button>
          </div>
        </>
      )}
      <footer>
        <p>
          Copyright © 2023{' '}
          <a href="https://github.com/CrystalSnake">CrystalSnake</a>
        </p>
      </footer>
    </>
  );
}

export default App;
