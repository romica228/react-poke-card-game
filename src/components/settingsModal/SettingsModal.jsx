import React, { useEffect, useRef, useState } from 'react';
import { ModalOverlay } from '../../App.styles.js';
import { ModalSettings, ReturnButton, ToggleButton } from './SettingsModal.styles.js';

export default function SettingsModal({ onClose, sendDataToParent }) {
  const [cardFace, setCardFace] = useState(localStorage.getItem('CardFace'));
  const [theme, setTheme] = useState(localStorage.getItem('Theme'));
  const modalRef = useRef();

  // Detect clicks outside the modal and close it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  // ...
  const toggleCardFront = () => {
    const updatedCardFace = cardFace === 'default' ? 'shiny' : 'default';
    setCardFace(updatedCardFace);
    localStorage.setItem('CardFace', updatedCardFace);
    sendDataToParent(cardFace, 'CardFront');
  };

  // ...
  const toggleTheme = () => {
    const updatedTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(updatedTheme);
    localStorage.setItem('Theme', updatedTheme);
    sendDataToParent(theme, 'Theme');
  };

  return (
    <ModalOverlay>
      <ModalSettings ref={modalRef}>
        <h1>Settings</h1>
        <div>
          <span>Theme</span>
          <ToggleButton onClick={toggleTheme}>
            {theme === 'dark'
              ? 'Light'
              : 'Dark'}
          </ToggleButton>
        </div>
        <div>
          <span>Card Face</span>
          <ToggleButton onClick={toggleCardFront}>
            {cardFace === 'default'
              ? 'Shiny'
              : 'Default'}
          </ToggleButton>
        </div>
        <ReturnButton onClick={onClose}>
          Return
        </ReturnButton>
      </ModalSettings>
    </ModalOverlay>
  );
}
