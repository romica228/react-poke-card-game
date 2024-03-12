import React, { useState, useEffect } from 'react';
import { FillBox, OuterBox, Wrapper } from './LoadingBar.styles.js';

export default function LoadingBar({ sendDataToParent }) {
  const [progress, setProgress] = useState(0);

  /**
   * Used for styling - adds a 3 seconds progress to loading bar.
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 10;
        }
        clearInterval(interval);
        sendDataToParent(false, 'Loading');
        return prevProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <span>LOADING...</span>
      <OuterBox>
        <FillBox progress={progress} />
      </OuterBox>
    </Wrapper>
  );
}
