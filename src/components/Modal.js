import styled from 'styled-components';

const Modal = styled.div`
  visibility: ${props => props.show ? "visible" : "hidden"};
  transform: ${props => props.show ? "translateY(0rem)" : "translateY(-15rem)"};
  transition: all 0.2s ease-in;
  z-index: 100;
  background: #ECF1F7;
  width: 50vw;
  height: 50vh;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .x {
    position: absolute;
    top: 0.5rem;
    right: 0.8rem;
    font-size: 0.7rem;
    border: none;
  }
  .x:focus-visible {
      outline: none;
  }
  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 90%;
    height: 20%;
    border-bottom: 1px solid #ccc;
  }
  header p {
    margin: 0;
  }
  section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 60%;
    font-size: 0.8rem;
  }
  .input-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 90%;
      height: 100%;
  }
  .input-label {
    min-width: 30%;
    height: 100%;
  }
  .input {
    border: none;
    background: transparent;
    width: 100%;
    padding: 0.5rem; 
    background-color: #F2F3F7;
    box-shadow: inset 0 0 10px rgb(0 0 0 / 10%), 
    4px 3px 12px -5px rgb(0 0 0 / 33%);
    border-radius: 1.5rem;
    border: 0.5px solid rgb(128 128 128 / 12%);
  }
  .input:focus-visible {
      outline: none;
  }
  .calendar {
    font-size: 0.35rem;
  }
  footer {
    width: 90%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 20%;
  }

`

export default Modal;