import React, { useEffect, useRef, useState } from 'react';
import { ModalSettings, SettingsOverlay } from './SettingsModal.styles.js';

export default function SettingsModal({ onClose, sendDataToParent }) {
  const [theme, setTheme] = useState(false);
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
    setTheme(!theme);
    sendDataToParent(theme, 'Settings');
  };

  return (
    <SettingsOverlay>
      <ModalSettings ref={modalRef}>
        <h1>Settings</h1>
        <div>
          <span>Card Face</span>
          <button onClick={handleClick}>
            {theme ? 'Default' : 'Shiny'}
          </button>
        </div>
      </ModalSettings>
    </SettingsOverlay>
  );
}
