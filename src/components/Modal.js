import React from 'react';
import styled from 'styled-components';

import Btn from '../components/Btn';
import Span from '../components/Span';
import Backdrop, { ClickableBackdrop } from '../components/Backdrop';
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';

const MyModal = styled.div`
  visibility: ${props => props.show ? "visible" : "hidden"};
  transform: ${props => props.show ? "translateY(0rem)" : "translateY(-15rem)"};
  transition: all 0.2s ease-in;
  z-index: 100;
  background: #ECF1F7;
  width: 35vw;
  height: 35vh;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .x {
    position: absolute;
    top: 0.6rem;
    right: 0.7rem;
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
    width: 80%;
    height: 20%;
    box-sizing: border-box;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid #ccc;
  }
  header p {
    margin: 0rem;
  }
  section {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    width: 85%;
    height: 55%;
    font-size: 0.8rem;
  }
  .input-container {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center; 
  }
  
  .input-label {
    text-align: left;
    margin-right: 0.6rem;
  }
  .input {
    border: none;
    background: transparent;
    width: 15rem;
    padding: 0.5rem; 
    background-color: #F2F3F7;
    box-shadow: inset 0 0 10px rgb(0 0 0 / 10%), 
    4px 3px 12px -5px rgb(0 0 0 / 33%);
    border-radius: 1.5rem;
    border: 0.5px solid rgb(128 128 128 / 12%);
    text-align: center;
  }
  .validation {
    background-color: ${props => props.isValid ? "#F2F3F7" : "salmon"}; 
  }
  .input:focus-visible {
      outline: none;
  }
  .calendar {
    font-size: 0.45rem;
  }
  footer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25%;
  }
`

const Modal = props => {
  const {
    show,
    setShow,
    submitHandler,
    title,
    setTitle,
    date,
    setDate,
    isValid,
    isValidHandler
  } = props;

  return (
    <Backdrop show={show}>
      <ClickableBackdrop onClick={() => setShow(false)} />
      <MyModal show={show} isValid={isValid}>
        <button className="x" onClick={() => setShow(false)}>
          <i className="fas fa-times"></i>
        </button>
        <header>
          <p>Adding New task...</p>
        </header>
        <section>
          <div className="input-container" >
            <label htmlFor="title" className="input-label">Task:</label>
            <input
              type="text"
              className="input validation"
              placeholder={isValid ? "New Task..." : "This field is required!"}
              value={title}
              onChange={e => {
                setTitle(e.target.value);
                isValidHandler();
              }}
            />
          </div>
          <div className="input-container">
            <label htmlFor="date" className="input-label">Date:</label>
            <DatePicker
              id="date"
              value={date}
              onChange={setDate}
              inputPlaceholder="Select a day"
              shouldHighlightWeekends
              calendarClassName="calendar"
              inputClassName="input"
              colorPrimary="linear-gradient(37deg, rgba(227,137,60,1) 74%, rgba(235,155,86,1) 100%)"
            />
          </div>
        </section>
        <footer>
          <Btn onClick={submitHandler}>
            <Span><i className="fas fa-check"></i></Span>
            Submit
          </Btn>
        </footer>
      </MyModal>
    </Backdrop>
  );
};

export default Modal;