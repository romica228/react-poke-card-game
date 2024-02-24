// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const ScoreBoard = styled.div`
  display: flex;
  width: 1000px;
  justify-content: space-evenly;
  align-items: center;
  
  font-size: 1.5rem;
  
  > img {
    margin-right: 60px;
  }
`;

export const TopSection = styled.div`
  display: flex;
  gap: 40px;
  width: 80%;
  justify-content: end;
  align-items: center;
  margin-right: 82px;
`;

export const InstructionSection = styled.div`
  width: 50%;
  height: 100px;
  background: #f4f6f6;
  // Retro-inspired box border
  box-shadow:
          0 0 0 4px #1a1a1a,
          0 0 0 8px #e9b137,
          -6px 0 0 4px #e9b137,
          0 -6px 0 4px #e9b137,
          0 6px 0 4px #e9b137,
          6px 0 0 4px #e9b137;
  margin: 15px;
  color: #1a1a1a;
`;

export const SettingButton = styled.button`
  background: #969dca;
  position: relative;
  box-shadow: inset -4px -4px 0 0 #555d9c;
  border: unset;
  border-radius: unset;

  &:hover,
  &:focus {
    background: #7982b9;
    box-shadow: inset -4px -4px 0 0 #555d9c;
  }

  &:active {
    box-shadow: inset 4px 4px 0 0 #555d9c;
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
    border-top: 4px black solid;
    border-bottom: 4px black solid;
  }

  &:after {
    left: -4px;
    top: 0;
    border-left: 4px black solid;
    border-right: 4px black solid;
  }
`;
