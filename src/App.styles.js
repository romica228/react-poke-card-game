import styled, { createGlobalStyle } from 'styled-components';

export const coolGray = 'hsl(0, 0%, 14%)';
export const offWhite = 'hsl(45, 29%, 97%)';
export const notYellow = 'hsl(41, 80%, 56%)';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;

    margin: 0;
    display: flex;
    place-items: center;
    min-height: 100vh;
  }

  h1 {
    font-size: 2.8rem;
    line-height: 1.1;

    @media only screen and (min-width: 768px) {
      font-size: 3.2rem;
    }
  }
`;

export const lightTheme = {
  body: `${offWhite}`,
  text: `${coolGray}`,
  button: {
    background: 'hsl(357, 78%, 50%)',
    hoverBackground: 'hsl(357, 78%, 45%)',
    boxShadow: 'hsl(357, 78%, 35%)',
  },
  svg: {
    filter: 'unset',
  },
};

export const darkTheme = {
  body: `${coolGray}`,
  text: `${offWhite}`,
  button: {
    background: 'hsl(205, 90%, 50%)',
    hoverBackground: 'hsl(205, 90%, 45%)',
    boxShadow: 'hsl(205, 90%, 35%)',
  },
  svg: {
    filter: 'invert(100%) sepia(9%) saturate(270%) hue-rotate(268deg) brightness(113%) contrast(83%)',
  },
};

export const RetroButton = styled.button`
  font-family: retro_computer, sans-serif;
  background: ${({ theme }) => theme.button.background};
  position: relative;
  box-shadow: inset -4px -4px 0 0 ${({ theme }) => theme.button.boxShadow};
  border: unset;
  border-radius: unset;
  cursor: pointer;

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.button.hoverBackground};
    box-shadow: inset -4px -4px 0 0 ${({ theme }) => theme.button.boxShadow};
  }

  &:active {
    box-shadow: inset 4px 4px 0 0 ${({ theme }) => theme.button.boxShadow};
    transform: translateY(3px);
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: content-box;
  }

  &:before {
    top: -4px;
    left: 0;
    border-top: 4px hsl(0, 0%, 4%) solid;
    border-bottom: 4px hsl(0, 0%, 4%) solid;
  }

  &:after {
    left: -4px;
    top: 0;
    border-left: 4px hsl(0, 0%, 4%) solid;
    border-right: 4px hsl(0, 0%, 4%) solid;
  }
`;

export const ModalOverlay = styled.div`
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

  background: hsl(0, 0%, 15%);
  min-height: 150px;
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
`;
