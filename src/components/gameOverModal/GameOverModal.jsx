import React from 'react';
import { ButtonsBox, Modal, Overlay } from './GameOverModal.styles.js';

export default function GameOverModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <Overlay>
      <Modal>
        <h1>GAME OVER!</h1>
        <h3>CONTINUE?</h3>
        <ButtonsBox>
          <button onClick={onClose}>YES</button>
          <button onClick={onClose}>NO</button>
        </ButtonsBox>
      </Modal>
    </Overlay>
  );
}
