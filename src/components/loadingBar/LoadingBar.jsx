import React, { useState, useEffect } from 'react';
import { FillBox, OuterBox, Wrapper } from './LoadingBar.styles.js';

export default function LoadingBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 10;
        }
        clearInterval(interval);
        return prevProgress;
      });
    }, 200);

    setTimeout(() => {
      clearInterval(interval);
    }, 3000);

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
