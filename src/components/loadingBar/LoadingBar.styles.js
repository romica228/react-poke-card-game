import styled from 'styled-components';
import { notYellow } from '../../App.styles';

export const Wrapper = styled.div`
  width: 200px;
`;

export const OuterBox = styled.div`
  width: 100%; 
  background-color: hsl(0, 0%, 94%);
  height: 20px; 
  position: relative;
`;

export const FillBox = styled.div`
  width: ${(props) => `${props.progress}%`};
  height: 100%;
  background-color: ${notYellow};
  position: absolute;
  top: 0;
  left: 0;
`;
