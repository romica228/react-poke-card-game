import styled from 'styled-components';

export const SettingsOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
`;

export const ModalSettings = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  background: #292727;
  height: 220px;
  padding: 15px;
  display: flex;
  flex-direction: column;
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
    margin: 0;
  }
  
  > div {
    align-self: start;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
  }
`;
