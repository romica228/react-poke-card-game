// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 200px;
`;

export const OuterBox = styled.div`
  width: 100%; 
  background-color: #f0f0f0;
  height: 20px; 
  position: relative;
`;

export const FillBox = styled.div`
  width: ${(props) => `${props.progress}%`};
  height: 100%;
  background-color: #e9b137;
  position: absolute;
  top: 0;
  left: 0;
`;
