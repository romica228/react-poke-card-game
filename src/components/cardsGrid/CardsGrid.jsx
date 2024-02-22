import React, { useEffect, useState } from 'react';
import { Card, Wrapper } from './CardsGrid.styles.js';
import GameOverModal from '../gameOverModal/GameOverModal.jsx';

export default function CardsGrid(props) {
  const { data, sendDataToParent } = props;
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ... need comment
  const deckShuffler = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // ... need comment
  useEffect(() => {
    setCards(deckShuffler(data));
  }, [data]);

  // ... need comment
  const handleShuffle = ({ name }) => {
    if (!score.includes(name)) {
      const newScore = [...score, name];
      setScore(newScore);
      sendDataToParent(newScore.length);
    } else {
      setScore([]);
      sendDataToParent(0);
      setIsModalOpen(true);
    }
    setCards(deckShuffler(data));
  };

  // ....
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Wrapper>
      {cards && cards.map((poke) => (
        <Card key={poke.name} onClick={() => handleShuffle(poke)}>
          <img src={poke.images.front_default} alt="Poke front card" />
          <span>{poke.name}</span>
        </Card>
      ))}
      <GameOverModal isOpen={isModalOpen} onClose={closeModal} />
    </Wrapper>
  );
}
