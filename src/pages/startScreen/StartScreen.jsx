import React, { useEffect, useState } from 'react';
import { Heading1, Heading3, StartScreenBox } from './StartScreen.styles.js';

export default function StartScreen({ toggleVisibility }) {
  const [isTextVisible, setTextVisible] = useState(false);
  const [isButtonVisible, setButtonVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTextVisible(true);
    }, 3500);

    setTimeout(() => {
      setButtonVisible(true);
    }, 4500);
  }, []);

  return (
    <StartScreenBox
      isButtonVisible={isButtonVisible}
    >
      <Heading1>PokeMemo</Heading1>
      <Heading3 isTextVisible={isTextVisible}>{'Train Your Memory, Catch \'em All!'}</Heading3>
      <button onClick={toggleVisibility}>START GAME</button>
    </StartScreenBox>
  );
}
