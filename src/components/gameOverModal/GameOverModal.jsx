import React from 'react';
import {
  ButtonsBox, GameOverBox, ModalOver, NavButton, Overlay,
} from './GameOverModal.styles.js';

export default function GameOverModal({
  isOpen,
  onClose,
  sendDataToParent,
  currentScore,
  newRecord,
}) {
  if (!isOpen) return null;

  const handleClick = () => {
    sendDataToParent(true);
  };

  const gameOver = ['G', 'A', 'M', 'E', 'O', 'V', 'E', 'R', '!'];
  const nuRecord = ['N', 'E', 'W', 'R', 'E', 'C', 'O', 'R', 'D', '!'];

  return (
    <Overlay>
      <ModalOver>
        <div>
          {newRecord ? (
            nuRecord.map((letter) => (
              <h1 key={letter}>{letter}</h1>
            ))
          ) : (
            <GameOverBox>
              <div>
                {gameOver.map((letter) => (
                  <h1 key={letter}>{letter}</h1>
                ))}
              </div>
              <h3>{`Your score: ${currentScore}`}</h3>
            </GameOverBox>
          )}
        </div>
        <h3>CONTINUE?</h3>
        <ButtonsBox>
          <NavButton onClick={onClose}>
            <div className="triangle" />
            YES
          </NavButton>
          <NavButton onClick={handleClick}>
            <div className="triangle" />
            NO
          </NavButton>
        </ButtonsBox>
      </ModalOver>
    </Overlay>
  );
}
