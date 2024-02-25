import React, { useEffect, useState } from 'react';
import { Card, Wrapper } from './CardsGrid.styles.js';
import GameOverModal from '../gameOverModal/GameOverModal.jsx';

export default function CardsGrid({ data, sendDataToParent }) {
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
      sendDataToParent(newScore.length, 'CardsGrid');

      if (newScore.length === cards.length) {
        setScore([]);
        sendDataToParent(0, 'CardsGrid');
        sendDataToParent(true, 'Win');
      }
    } else {
      setScore([]);
      sendDataToParent(0, 'CardsGrid');
      setIsModalOpen(true);
    }
    setCards(deckShuffler(data));
  };

  // ....
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // .....
  const handleDataFromChild = (value) => {
    sendDataToParent(value, 'GameOverModal');
  };

  return (
    <Wrapper>
      {cards && cards.map((poke) => (
        <Card key={poke.name} onClick={() => handleShuffle(poke)}>
          <span>{`No.${poke.id}`}</span>
          <span>{poke.name}</span>
          <img src={poke.images.front_default} alt="Poke front card" />
        </Card>
      ))}
      <GameOverModal
        isOpen={isModalOpen}
        onClose={closeModal}
        sendDataToParent={handleDataFromChild}
      />
    </Wrapper>
  );
}
