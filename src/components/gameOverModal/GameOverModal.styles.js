import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #292727;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 999;
  box-shadow: 
          0 0 0 4px #999898, 
          0 0 0 8px #585957, 
          -6px 0 0 4px #585957, 
          0 -6px 0 4px #585957, 
          0 6px 0 4px #585957, 
          6px 0 0 4px #585957,
          0 0 0 12px black,
          -8px 0 0 6px black,
          0 -8px 0 6px black,
          0 8px 0 6px black,
          8px 0 0 6px black;

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
  
  > div {
    display: flex;
    padding: 0 14px;

    > h1 {
      font-family: retro_04B_30, retro_computer, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;;
      margin: 0;
      text-shadow: -2px -2px #16388d, -3px -3px #d5a02a, -4px -4px #9b3445;
      animation: bounce 1.5s ease infinite;
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
    }
    h1:nth-child(5) {
      animation-delay: 0.1s;
      margin-left: 8px;
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

export const ButtonsBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;

  @keyframes bounceLeft {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-5px);
    }
    100% {
      transform: translateX(0);
    }
  }
  
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
      animation: bounceLeft 1.5s ease infinite;
    }
  }
  
  > button:hover div {
    display: block;
  }
`;
