import { useState, useEffect } from 'react';
import getGifs from './GetCards';

function Board(props) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function makeCardList() {
      try {
        const links = await getGifs(props.n);
        setCards(links);
      } catch (error) {
        console.error('Error:', error);
      }
    }
    makeCardList();
  }, [props.n]);

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
    if (clickedCards.includes(card) && gameStatus == null) {
      const newGameStatus = 'lose';
      setGameStatus(newGameStatus);
    }
    if (gameStatus === null) {
      addCount(card);
    }
  };

  useEffect(() => {
    if (cards.length > 0 && clickedCards.length === cards.length) {
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

  const [popupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    if (gameStatus === 'win' || gameStatus === 'lose') {
      const timeout = setTimeout(() => {
        setPopupVisible(true);
      }, 10);

      return () => clearTimeout(timeout);
    } else {
      setPopupVisible(false);
    }
  }, [gameStatus]);

  return (
    <>
      <p>
        Count: {count}, Max count: {maxCount}
      </p>
      <h2>Select card without repeats:</h2>
      <div className={'card-board' + ' ' + props.className}>
        {shuffledCards.map((card) => {
          return (
            <div className="card" key={card}>
              <img
                className="card-image"
                src={card}
                onClick={() => clickCard(card)}
              />
            </div>
          );
        })}
      </div>
      {gameStatus && (
        <div className={`popup ${popupVisible ? 'show' : ''}`}>
          <h2>{gameStatus === 'win' ? 'You Win!' : 'Game Over!'}</h2>
          <button onClick={resetGame}>Play Again</button>
          <button onClick={props.exit}>Exit</button>
        </div>
      )}
    </>
  );
}

export default Board;
