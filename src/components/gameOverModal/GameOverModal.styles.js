import styled, { keyframes } from 'styled-components';
import { Modal, ModalOverlay } from '../../App.styles';

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

const bounceLeftAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
  }
`;

export const Overlay = styled(ModalOverlay)`

  h3 {
    margin: 0;
  }

  h1 {
    font-family: retro_04B_30, retro_computer, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    margin: 0;
    text-shadow: -2px -2px #16388d, -3px -3px #d5a02a, -4px -4px #9b3445;
    animation: ${bounceAnimation} 1.5s ease infinite;
    // Ensures that the letters stay in their final position after the animation
    animation-fill-mode: both;
  }
`;

export const ModalOver = styled(Modal)`
  justify-content: center;
  
  > div {
    display: flex;
    padding: 14px;

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
    h1:nth-child(7) {
      animation-delay: 0.5s;
    }
    h1:nth-child(8) {
      animation-delay: 0.7s;
    }
    h1:nth-child(9) {
      animation-delay: 0.9s;
    }
  }
`;

export const GameOverBox = styled.div`
  display: flex;
  flex-direction: column;
  
  > div {
    display: flex;

    h1:nth-child(4) {
      margin-left: 0;
    }

    h1:nth-child(5) {
      margin-left: 10px;
    }
  }
`;

export const ButtonsBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  
  > button {
    border: none;
    border-radius: unset;
    background: none;

    position: relative;
    overflow: hidden;
    
    > div {
      display: none;
      position: absolute;
      top: 38%;
      left: 6px;
      transform: translateY(-50%);
      width: 0;
      height: 0;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-left: 8px solid #e9b136;
      animation: ${bounceLeftAnimation} 1.5s ease infinite;
    }
  }
  
  > button:hover div {
    display: block;
  }
`;
