import { useState } from 'react';

function Board() {
  const cards = ['Lion', 'Cow', 'Snake', 'Lizard'];

  const [count, setCount] = useState(0);
  const [maxCount, setMaxCount] = useState(0);
  const countAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
    if (newCount > maxCount) {
      setMaxCount(newCount);
    }
  };

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
              <li key={card} onClick={countAdd}>
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
