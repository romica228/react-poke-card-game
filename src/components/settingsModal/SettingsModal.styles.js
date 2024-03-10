import styled from 'styled-components';
import { Modal, RetroButton, SecondaryButton } from '../../App.styles';

export const ModalSettings = styled(Modal)`
  padding: 15px;
  width: 80%;
  max-width: 300px;
  gap: 20px;
  
  > h1 {
    margin: 0;
    font-size: 2rem;
  }
  
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }
`;

export const ToggleButton = styled(RetroButton)`
  width: 90px;
  min-height: 28px;
`;

export const ReturnButton = styled(SecondaryButton)`
  min-height: 28px;
  align-self: center;
`;
