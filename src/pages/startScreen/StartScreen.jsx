import React, { useEffect, useState } from 'react';
import {
  Heading1, Heading3, StartButton, StartScreenBox,
} from './StartScreen.styles.js';

export default function StartScreen({ toggleVisibility }) {
  const [isTextVisible, setTextVisible] = useState(false);
  const [isButtonVisible, setButtonVisible] = useState(false);

  /**
   * Used for styling - adds text apparition delay effect.
   */
  useEffect(() => {
    setTimeout(() => {
      setTextVisible(true);
    }, 3500);

    setTimeout(() => {
      setButtonVisible(true);
    }, 4500);
  }, []);

  return (
    <StartScreenBox>
      <Heading1>PokeMemo</Heading1>
      <Heading3 isTextVisible={isTextVisible}>{'Train Your Memory, Catch \'em All!'}</Heading3>
      <StartButton
        onClick={toggleVisibility}
        isButtonVisible={isButtonVisible}
      >
        <span>START GAME</span>
      </StartButton>
    </StartScreenBox>
  );
}
