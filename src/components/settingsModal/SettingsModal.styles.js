import styled from 'styled-components';
import { Modal } from '../../App.styles';

const ModalSettings = styled(Modal)`
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

export default ModalSettings;
