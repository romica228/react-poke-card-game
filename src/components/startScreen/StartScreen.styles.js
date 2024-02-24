import styled, { keyframes } from 'styled-components';

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
  
  > button {
    border: unset;
    background: unset;
    font-size: 1.5rem;
    
    visibility: ${(props) => (props.isButtonVisible ? 'visible' : 'hidden')};
    animation: ${blinkAnimation} 1.5s infinite;
  }
`;

export const Heading1 = styled.h1`
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
  transform-style: preserve-3d;

  animation: ${enterAnimation} 3s ease-out forwards;
`;

export const Heading3 = styled.h3`
  font-family: retro_04B_30, retro_computer, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  text-shadow: 1px 1px 1px #605f5f,
  1px 2px 1px #605f5f,
  1px 3px 1px #605f5f;
  color: #e9b137;

  visibility: ${(props) => (props.isTextVisible ? 'visible' : 'hidden')};
`;
