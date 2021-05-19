import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../store/actions/tasks';
import Wrapper from '../components/Wrapper';
import SideBar from '../components/SideBar';
import Btn from '../components/Btn';
import Header from '../components/Header';
import DaysSection from '../components/DaysSection';
import Span from '../components/Span';
import Backdrop, { ClickableBackdrop } from '../components/Backdrop';
import Modal from '../components/Modal';
import cells from '../data/cells';

import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';

const Main = props => {
    const [show, setShow] = useState(false);

    const [title, setTitle] = useState('');

    const initDate = {
        year: 2019,
        month: 11,
        day: 18,
    };
    const [date, setDate] = useState(initDate);

    const dispatch = useDispatch();

    const submitHandler = () => {
        if (title === '') {
            alert("Task title should not be empty!");
            return;
        }
        dispatch(actions.addTask(title, date));
        setTitle('');
        setDate(initDate);
        setShow(false);
    };

    const tasks = useSelector(state => state.tasks);

    useEffect(() => {
        dispatch(actions.setTasks());
    }, [dispatch]);

    const incompleted = tasks.filter(i => i.isDone === false);
    const completed = tasks.filter(i => i.isDone === true);

    const isDoneHandler = (e, id) => {
        const isChecked = e.target.checked;
        dispatch(actions.updateTask(isChecked, id));
    };

    return (
        <Wrapper>
            <Backdrop show={show}>
                <ClickableBackdrop onClick={() => setShow(false)} />
                <Modal show={show}>
                    <button className="x" onClick={() => setShow(false)}>
                        <i className="fas fa-times"></i>
                    </button>
                    <header>
                        <p>Adding New task</p>
                    </header>
                    <section>
                        <div className="input-container" >
                            {/* <label htmlFor="title" className="title-label">Your Task:</label> */}
                            <input
                                type="text"
                                className="input"
                                placeholder="New Task..."
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="input-container">
                            {/* <label htmlFor="date" className="input-label">Due Date:</label> */}
                            <DatePicker
                                id="date"
                                value={date}
                                onChange={setDate}
                                inputPlaceholder="Select a day"
                                shouldHighlightWeekends
                                calendarPopperPosition="right"
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
                </Modal>
            </Backdrop>
            <SideBar>
                <header>
                    <div className="avatar">
                        <img src={require('../assets/imgs/linus.jpg').default} alt="linus" />
                    </div>
                    <div className="greeting">
                        <p>Good morning.</p>
                        <p className="bold">Linus!</p>
                    </div>
                </header>
                <section>
                    <div className="card">
                        {incompleted.length === 0
                            ? <div className="card-label">
                                <p>Add Task</p>
                                <Span onClick={() => setShow(true)}><i className="fas fa-plus"></i></Span>
                            </div>
                            : <Btn onClick={() => setShow(true)}>
                                <Span><i className="fas fa-plus"></i></Span>
                                Add a Task
                            </Btn>
                        }
                        {incompleted.map(i => (
                            <div className="task" key={i.id}>
                                <input
                                    className="task-check"
                                    type="checkbox"
                                    checked={i.isDone}
                                    onChange={(e) => isDoneHandler(e, i.id)}
                                    id="t1"
                                />
                                <label className="task-label" htmlFor="t1">
                                    {i.title}
                                </label>
                            </div>
                        ))}
                    </div>
                    <div className="card">
                        <div className="card-label">
                            <p>Completed</p>
                            <Span><i className="fas fa-angle-down"></i></Span>
                        </div>
                        <div className="completed">
                            {completed.map(i => (
                                <div className="task" key={i.id}>
                                    <input
                                        className="task-check"
                                        type="checkbox"
                                        checked={i.isDone}
                                        onChange={(e) => isDoneHandler(e, i.id)}
                                        id="t1"
                                    />
                                    <label className="task-label" htmlFor="t1">
                                        {i.title}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </SideBar>
            <Header>
                <header>
                    <p className="year-month">November 2019</p>
                    <div className="today">
                        <p>Today</p>
                        <p className="gray">18, MON</p>
                    </div>
                    <div className="search">
                        <Span><i className="fas fa-search"></i></Span>
                        <input type="search" className="search-input" placeholder="Search" />
                    </div>
                </header>
                <section>
                    <Span><i className="fas fa-angle-left"></i></Span>
                    <p>Day</p>
                    <p>Week</p>
                    <p className="picked">Month</p>
                    <Span><i className="fas fa-angle-right"></i></Span>
                </section>
                <footer>
                    <p>Sun</p>
                    <p>Mon</p>
                    <p>Tue</p>
                    <p>Wed</p>
                    <p>Thu</p>
                    <p>Fri</p>
                    <p>Sat</p>
                </footer>
            </Header>
            <DaysSection>
                {cells.map((cell, i) => (
                    <div key={i} className={`day ${cell.className}`}>
                        <p className="num">{cell.day}</p>
                        {tasks.filter(
                            t => t.date.day === cell.day
                                && t.date.month === 11
                        ).map(t => (
                            <p className="task-title">
                                {
                                    t.title.length > 17 &&
                                    t.title.substring(0, 16) + "..."
                                }
                            </p>
                        ))}

                    </div>
                ))}
            </DaysSection>
        </Wrapper>
    );
};

export default Main;

