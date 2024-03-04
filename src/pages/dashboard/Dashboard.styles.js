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
    filter: ${({ theme }) => theme.svg.filter};
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
  height: 80px;
  background: #f4f6f6;
  // Retro-inspired box border
  box-shadow: 0 0 0 4px #1a1a1a,
  0 0 0 8px #e9b137,
  -6px 0 0 4px #e9b137,
  0 -6px 0 4px #e9b137,
  0 6px 0 4px #e9b137,
  6px 0 0 4px #e9b137;
  margin: 15px;
  color: #1a1a1a;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  // Stripe pattern
  background: repeating-linear-gradient(45deg, #fff, #fff 10px, #e1dcdc 10px, #e1dcdc 20px);
`;
