import styled from 'styled-components';

const Modal = styled.div`
  visibility: ${props => props.show ? "visible" : "hidden"};
  transform: ${props => props.show ? "translateY(5rem)" : "translateY(-10rem)"};
  transition: all 0.2s ease-in;
  z-index: 100;
  background: #ECF1F7;
  width: 40vw;
  height: 40vh;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Modal;