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

    const [isDone, setIsDone] = useState(false);
    console.log('radioCheck', isDone);

    const dispatch = useDispatch();

    const submitHandler = () => {
        dispatch(actions.addTask(title, date, isDone));
        setTitle('');
        setDate(initDate);
        setShow(false);
    };
    
    const tasks = useSelector(state => state.tasks);

    useEffect(() => {
        dispatch(actions.setTasks());
    }, [dispatch]);

    const incompleted = tasks.filter(i => i.isDone === false);
    // console.log('incom', incompleted);
    const completed = tasks.filter(i => i.isDone === true);

    const isDoneHandler = (e, id) => {
        const isChecked = e.target.checked;
        setIsDone(isChecked);
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
                <div className="day edge-t-l"></div>
                <div className="day edge-t"></div>
                <div className="day edge-t"></div>
                <div className="day edge-t"></div>
                <div className="day edge-t"></div>
                <div className="day edge-t"><p className="num">1</p></div>
                <div className="day edge-t-r"><p className="num">2</p></div>
                <div className="day edge-l"><p>3</p></div>
                <div className="day mid"><p className="num">4</p></div>
                <div className="day mid"><p className="num">5</p></div>
                <div className="day mid"><p className="num">6</p></div>
                <div className="day mid"><p className="num">7</p></div>
                <div className="day mid"><p className="num">8</p></div>
                <div className="day edge-r"><p className="num">9</p></div>
                <div className="day edge-l"><p className="num">10</p></div>
                <div className="day mid"><p className="num">11</p></div>
                <div className="day mid"><p className="num">12</p></div>
                <div className="day mid"><p className="num">13</p></div>
                <div className="day mid"><p className="num">14</p></div>
                <div className="day mid">
                    <p className="num">15</p>
                    <p className="task-title">Buy Anniversary...</p>
                </div>
                <div className="day edge-r"><p className="num">16</p></div>
                <div className="day edge-l"><p className="num">17</p></div>
                <div className="day mid">
                    <p className="num selected"><Span>18</Span></p>
                    <p className="task-title">Book Return Tick...</p>
                </div>
                <div className="day mid">
                    <p className="num">19</p>
                    <p className="task-title">Meet Chris in the...</p>
                </div>
                <div className="day mid"><p className="num">20</p></div>
                <div className="day mid"><p className="num">21</p></div>
                <div className="day mid"><p className="num">22</p></div>
                <div className="day edge-r"><p className="num">23</p></div>
                <div className="day edge-d-l"><p className="num">24</p></div>
                <div className="day edge-d"><p className="num">25</p></div>
                <div className="day edge-d"><p className="num">26</p></div>
                <div className="day edge-d"><p className="num">27</p></div>
                <div className="day edge-d"><p className="num">28</p></div>
                <div className="day edge-d"><p className="num">29</p></div>
                <div className="day edge-d-r"><p className="num">30</p></div>
            </DaysSection>
        </Wrapper>
    );
};

export default Main;

