// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  width: 80%;
  justify-content: center;
`;

export const Card = styled.button`
  display: flex;
  flex-direction: column;
  background: gray;
  border-radius: 5px;
  width: 140px;
  font-size: 0.8rem;
  padding: 8px;

  transition: transform 0.3s ease;
  
  > span:nth-child(1) {
    align-self: end;
  }

  > span:nth-child(2) {
    align-self: start;
  }
  
  > img {
    border: 0.094rem solid black;
    border-radius: 8px;
    padding: 5px;
  }
  
  &:hover {
    border-color: #e9b137;
    transform: translateY(-5px);
  }
`;
