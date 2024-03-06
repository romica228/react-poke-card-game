import React, { useEffect, useRef, useState } from 'react';
import { ModalOverlay } from '../../App.styles.js';
import { ModalSettings, ToggleButton } from './SettingsModal.styles.js';

export default function SettingsModal({ onClose, sendDataToParent }) {
  const [cardFront, setCardFront] = useState(false);
  const [theme, setTheme] = useState('light');
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

  const handleClick = () => {
    setCardFront(!cardFront);
    sendDataToParent(cardFront, 'CardFront');
  };

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
            {theme
              ? <span aria-label="light mode" role="img">🌞</span>
              : <span aria-label="Dark mode" role="img">🌜</span>}
          </ToggleButton>
        </div>
        <div>
          <span>Card Face</span>
          <ToggleButton onClick={handleClick}>
            {cardFront ? 'Default' : 'Shiny'}
          </ToggleButton>
        </div>
      </ModalSettings>
    </ModalOverlay>
  );
}
