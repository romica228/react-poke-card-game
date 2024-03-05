import styled from 'styled-components';
import { notYellow } from '../../App.styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const ScoreBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    font-size: 1.2rem;
  }
  
  > img {
    filter: ${({ theme }) => theme.svg.filter};
  }

  @media only screen and (min-width: 1024px) {
    flex-direction:initial;
    align-items: unset;
    width: 1000px;
    justify-content: space-evenly;
    
    > h1 {
      font-size: 1.5rem;
    }

    > img {
      margin-right: 60px;
    }
  }
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  > button {
    font-size: 1.2rem;
    padding: 5px;
  }

  @media only screen and (min-width: 1024px) {
    flex-direction:initial;
    gap: 40px;
    width: 73%;
    justify-content: end;
  }
`;

export const InstructionSection = styled.div`
  max-width: 500px;

  // Retro-inspired box border
  box-shadow: 0 0 0 4px hsl(0, 0%, 10%),
  0 0 0 8px ${notYellow},
  -6px 0 0 4px ${notYellow},
  0 -6px 0 4px ${notYellow},
  0 6px 0 4px ${notYellow},
  6px 0 0 4px ${notYellow};

  margin: 15px;
  padding: 3px;
  color: hsl(0, 0%, 10%);
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  
  // Stripe pattern
  background: repeating-linear-gradient(
          45deg, white, white 10px, 
          hsl(0, 0%, 95%) 10px, 
          hsl(0, 0%, 95%) 20px);
`;
