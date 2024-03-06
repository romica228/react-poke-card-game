// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';
import { notYellow } from '../../App.styles';

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  max-width: 1000px;
  justify-content: center;
`;

export const Card = styled.button`
  font-family: retro_computer, sans-serif;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.card.background};
  width: 140px;
  font-size: 0.8rem;
  padding: 8px;

  border: 0.094rem solid ${({ theme }) => theme.card.borderColor};
  box-shadow: 0 0.156rem 0 ${({ theme }) => theme.card.boxShadow};
  border-radius: 5px;

  transition: transform 0.3s ease, color 0.3s ease;
  
  > span:nth-child(1) {
    align-self: end;
  }
  
  > img {
    border: 0.094rem solid black;
    border-radius: 8px;
    padding: 5px;
  }
  
  &:hover {
    border-color: ${notYellow};
    box-shadow: 0 0.156rem 0 hsl(41, 80%, 40%);
    transform: translateY(-3px);
  }
`;
