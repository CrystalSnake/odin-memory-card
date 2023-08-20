import { useState, useEffect } from 'react';

function Board() {
  const cards = ['Lion', 'Cow', 'Snake', 'Lizard'];

  function shuffle(array) {
    const shuffledArray = [...array];
    shuffledArray.sort(() => Math.random() - 0.5);
    return shuffledArray;
  }

  const shuffledCards = shuffle(cards);
  const [gameStatus, setGameStatus] = useState(null);

  const [count, setCount] = useState(0);
  const [maxCount, setMaxCount] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  useEffect(() => {
    const newCount = clickedCards.length;
    setCount(newCount);
    if (newCount > maxCount) {
      setMaxCount(newCount);
    }
  }, [clickedCards]);

  const addCount = (card) => {
    setClickedCards((prevClickedCards) => [...prevClickedCards, card]);
  };

  const clickCard = (card) => {
    if (clickedCards.includes(card)) {
      const newGameStatus = 'lose';
      setGameStatus(newGameStatus);
    } else {
      addCount(card);
    }
  };

  useEffect(() => {
    if (clickedCards.length === cards.length) {
      const newGameStatus = 'win';
      setGameStatus(newGameStatus);
      const newCount = 0;
      setCount(newCount);
    }
  }, [clickedCards.length, cards.length]);

  const resetGame = () => {
    setClickedCards([]);
    setGameStatus(null);
  };

  return (
    <>
      <p>
        Count: {count}, Max count: {maxCount}
      </p>
      <div>
        <h1>Cards:</h1>
        <ul>
          {shuffledCards.map((card) => {
            return (
              <li key={card} onClick={() => clickCard(card)}>
                {card}
              </li>
            );
          })}
        </ul>
      </div>
      {gameStatus && (
        <div className="popup">
          <h2>{gameStatus === 'win' ? 'You Win!' : 'Game Over!'}</h2>
          <button onClick={resetGame}>Play Again</button>
        </div>
      )}
    </>
  );
}

export default Board;
