import React from 'react';
import trophyIcon from '../../assets/trophy_icon.png';
import Heading from './VictoryScreen.styles.js';
import { ButtonsBox } from '../gameOverModal/GameOverModal.styles.js';

export default function VictoryScreen({ sendDataToParent }) {
  /**
   * Function to handle data passed to the parent components.
   * @returns {void}
   */
  const handleClick = () => {
    sendDataToParent(false);
  };

  return (
    <>
      <img src={trophyIcon} alt="Trophy icon" width="128px" />
      <Heading>You WIN!</Heading>
      <ButtonsBox>
        <button onClick={handleClick}>
          <div className="triangle" />
          Start New Game
        </button>
      </ButtonsBox>
    </>
  );
}
