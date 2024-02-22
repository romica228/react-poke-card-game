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
  width: 400px;
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
  > h1 {
    font-family: retro_04B_30, retro_computer, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;;
    margin: 0;
    text-shadow: -2px -2px #16388d, -3px -3px #d5a02a, -4px -4px #9b3445;
  }
`;

export const ButtonsBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;
