import styled, { keyframes } from 'styled-components';

const bounceAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VictoryBox = styled.div`
  display: flex;
  font-family: retro_04B_30, retro_computer, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  text-shadow: 1px 1px 1px #605f5f,
  1px 2px 1px #605f5f,
  1px 3px 1px #605f5f,
  1px 4px 1px #605f5f,
  1px 5px 1px #605f5f,
  1px 6px 1px #605f5f,
  1px 7px 1px #605f5f,
  1px 8px 1px #605f5f,
  1px 9px 1px #605f5f,
  1px 10px 1px #605f5f;

  h1 {
    font-size: 3.8rem;
    animation: ${bounceAnimation} 1.5s ease infinite;
    // Ensures that the letters stay in their final position after the animation
    animation-fill-mode: both;
  }

  // Stagger the animation delay for each letter
  h1:nth-child(2) {
    animation-delay: 0.2s;
  }
  h1:nth-child(3) {
    animation-delay: 0.4s;
  }
  h1:nth-child(4) {
    animation-delay: 0.6s;
  }
  h1:nth-child(4) {
    animation-delay: 0.8s;
    margin-left: 10px;
  }
  h1:nth-child(5) {
    animation-delay: 0.1s;
  }
  h1:nth-child(6) {
    animation-delay: 0.3s;
  }
`;
