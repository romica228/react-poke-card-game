import styled, { createGlobalStyle } from 'styled-components';

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
  body: 'rgba(255, 255, 255, 0.9)',
  text: '#242424',
  button: {
    background: '#e21c27',
    boxShadow: '#b0161e',
    hoverBackground: '#c91922',
  },
  svg: {
    filter: 'unset',
  },
};

export const darkTheme = {
  body: '#242424',
  text: 'rgba(255, 255, 255, 0.9)',
  button: {
    background: '#0a79ca',
    boxShadow: '#07558d',
    hoverBackground: '#0861a2',
  },
  svg: {
    filter: 'invert(100%) sepia(9%) saturate(270%) hue-rotate(268deg) brightness(113%) contrast(83%)',
  },
};

export const RetroButton = styled.button`
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
    border-top: 4px #090909 solid;
    border-bottom: 4px #090909 solid;
  }

  &:after {
    left: -4px;
    top: 0;
    border-left: 4px #090909 solid;
    border-right: 4px #090909 solid;
  }
`;
