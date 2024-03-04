import styled, { keyframes } from 'styled-components';
import { RetroButton } from '../../App.styles';

const enterAnimation = keyframes`
  0% {
    transform: translateY(-60vh) perspective(600px) rotateX(55deg) scale3d(1,2,1);
  }
  100% {
    transform: translateY(0) perspective(600px) rotateX(55deg) scale3d(1,2,1);
  }
`;

const blinkAnimation = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

export const StartScreenBox = styled.div`
  display: flex;
  flex-direction: column;
  
  > h1,h3 {
    font-family: retro_04B_30, retro_computer, sans-serif;
  }
`;

export const Heading1 = styled.h1`
  margin: 0;
  text-shadow: 1px 7px #605f5f, 1px 8px black;
  transform-style: preserve-3d;

  animation: ${enterAnimation} 3s ease-out forwards;
`;

export const Heading3 = styled.h3`
  text-shadow: 1px 2px #605f5f, 1px 3px black;
  color: #e9b137;

  visibility: ${(props) => (props.isTextVisible ? 'visible' : 'hidden')};
`;

export const StartButton = styled(RetroButton)`
  font-family: retro_computer, sans-serif;
  font-size: 1.5rem;
  color: #090909;

  visibility: ${(props) => (props.isButtonVisible ? 'visible' : 'hidden')};
  
  > span {
    animation: ${blinkAnimation} 1.5s infinite;
  }
`;
