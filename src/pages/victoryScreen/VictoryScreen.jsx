import React, { useEffect } from 'react';
import trophyIcon from '../../assets/trophy_icon.png';
import { ButtonsBox } from '../../components/gameOverModal/GameOverModal.styles.js';
import { VictoryBox, Wrapper } from './VictoryScreen.styles.js';

export default function VictoryScreen({ sendDataToParent }) {
  /**
   * Handle keystroke for New Game button.
   */
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        sendDataToParent(false);
      }
    };
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const handleClick = () => {
    sendDataToParent(false);
  };

  const youWin = ['Y', 'O', 'U', 'W', 'I', 'N', '!'];

  return (
    <Wrapper>
      <img src={trophyIcon} alt="Trophy icon" width="128px" />
      <VictoryBox>
        {youWin.map((letter) => (
          <h1 key={letter}>{letter}</h1>
        ))}
      </VictoryBox>
      <ButtonsBox>
        <button onClick={handleClick}>
          <div className="triangle" />
          Start New Game
        </button>
      </ButtonsBox>
    </Wrapper>
  );
}
