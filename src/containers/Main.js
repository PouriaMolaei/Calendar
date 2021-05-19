import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../store/actions/tasks';
import Wrapper from '../components/Wrapper';
import SideBar from '../components/SideBar';
import Header from '../components/Header';
import Cells from '../components/Cells';
import Modal from '../components/Modal';

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
            <Modal 
                show={show}
                setShow={setShow}
                submitHandler={submitHandler}
                title={title}
                setTitle={setTitle}
                date={date}
                setDate={setDate}
            />
            <SideBar 
                incompleted={incompleted}
                completed={completed}
                setShow={setShow}
                isDoneHandler={isDoneHandler}
            />
            <Header />
            <Cells tasks={tasks} />
        </Wrapper>
    );
};

export default Main;

