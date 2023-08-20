import { useState, useEffect } from 'react';

function Board() {
  const cards = ['Lion', 'Cow', 'Snake', 'Lizard'];

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
      console.log('Game Over');
    } else {
      addCount(card);
    }
  };

  useEffect(() => {
    if (clickedCards.length === cards.length) {
      console.log('Win!');
      const newCount = 0;
      setCount(newCount);
    }
  }, [clickedCards.length, cards.length]);

  return (
    <>
      <p>
        Count: {count}, Max count {maxCount}
      </p>
      <div>
        <h1>Cards: </h1>
        <ul>
          {cards.map((card) => {
            return (
              <li key={card} onClick={() => clickCard(card)}>
                {card}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Board;
