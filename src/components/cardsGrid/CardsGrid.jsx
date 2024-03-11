import React, { useEffect, useRef, useState } from 'react';
import { Card, Wrapper } from './CardsGrid.styles.js';
import GameOverModal from '../gameOverModal/GameOverModal.jsx';

export default function CardsGrid({ data, sendDataToParent, settings }) {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newRecord, setNewRecord] = useState('');

  const bestScoreRef = useRef(0);

  // ... need comment
  const deckShuffler = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Initialize the highest score once when the component mounts
  useEffect(() => {
    bestScoreRef.current = localStorage.getItem('BestScore');
  }, []);

  // ... need comment
  useEffect(() => {
    setCards(deckShuffler(data));
  }, [data]);

  // ... need comment
  const handleShuffle = ({ name }) => {
    if (!score.includes(name)) {
      const newScore = [...score, name];
      setScore(newScore);
      setCurrentScore(newScore.length);
      sendDataToParent(newScore.length, 'Score');

      if (newScore.length > bestScoreRef.current) {
        bestScoreRef.current = newScore.length;
        setNewRecord('New record');
        sendDataToParent(newScore.length !== null ? newScore.length : 0, 'BestScore');
      } else {
        setNewRecord('');
      }

      if (newScore.length === cards.length) {
        setScore([]);
        sendDataToParent(0, 'Score');
        sendDataToParent(true, 'Win');
      }
    } else {
      setScore([]);
      sendDataToParent(0, 'Score');
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
    sendDataToParent(value, 'Lose');
  };

  return (
    <Wrapper>
      {cards && cards.map((poke) => (
        <Card key={poke.name} onClick={() => handleShuffle(poke)}>
          <span>{poke.name}</span>
          <img
            src={settings.cardFace === 'default'
              ? poke.images.front_default
              : poke.images.front_shiny}
            alt="Poke front card"
            width="121px"
          />
        </Card>
      ))}
      <GameOverModal
        isOpen={isModalOpen}
        onClose={closeModal}
        sendDataToParent={handleDataFromChild}
        currentScore={currentScore}
        newRecord={newRecord}
      />
    </Wrapper>
  );
}
