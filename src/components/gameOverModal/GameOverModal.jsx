import React from 'react';
import { ButtonsBox, Modal, Overlay } from './GameOverModal.styles.js';

export default function GameOverModal({ isOpen, onClose, sendDataToParent }) {
  if (!isOpen) return null;

  /**
   * Function to handle data passed to the parent components.
   * @returns {void}
   */
  const handleClick = () => {
    sendDataToParent(true);
  };

  return (
    <Overlay>
      <Modal>
        <div>
          <h1>G</h1>
          <h1>A</h1>
          <h1>M</h1>
          <h1>E</h1>
          <h1>O</h1>
          <h1>V</h1>
          <h1>E</h1>
          <h1>R</h1>
          <h1>!</h1>
        </div>
        <h3>CONTINUE?</h3>
        <ButtonsBox>
          <button onClick={onClose}>
            <div className="triangle" />
            YES
          </button>
          <button onClick={handleClick}>
            <div className="triangle" />
            NO
          </button>
        </ButtonsBox>
      </Modal>
    </Overlay>
  );
}
