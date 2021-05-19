import React from 'react';
import styled from 'styled-components';

import Span from '../components/Span';
import Btn from '../components/Btn';

const MySideBar = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    grid-row:1 / 2 span;
    border-right: 1px solid #ccc;
    
    header {
        width: 100%;
        height: 4rem;
        border-bottom: 1px solid #ccc;
        border-top-left-radius: 2.5rem; 
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .avatar {
        position: relative;
        width: 27%;
        height: 100%;
    }
    img {
        width: 1.9rem;
        height: 1.9rem;
        border-radius: 0.4rem;
        position: absolute;
        top: 1.3rem;
        left: 1.5rem;
    }
    .greeting {
        width: 73%;
        height: 100%;
        padding-top: 0.8rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;  
    }
    .greeting p {
        margin: 0;
        font-size: 0.6rem;
    }

    .bold {
        font-weight: bold;
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        height: 100%;
        width: 100%;
    }
    .card {
        width: 90%;
        min-height: 2.5rem;
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        border-radius: 1.2rem;
        font-size: 0.6rem;
        background-color: #F2F3F7;
        box-shadow: 3px 3px 8px 1px rgb(0 0 0 / 33%);
    }
    .task {
        display: flex;
        align-items: center;
        padding-left: 0.5rem;
        margin-bottom: 1rem;
    }
    .card-label {
        width: 90%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }    
    .completed {
        margin-top: 0.5rem;
    }
`;

const SideBar = props => {
    const {
        incompleted,
        completed,
        setShow,
        isDoneHandler
    } = props;

    return (
        <MySideBar>
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
                    {completed.length !== 0 &&
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
                    }
                </div>
            </section>
        </MySideBar>
    );
};

export default SideBar;