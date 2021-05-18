import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.main`
    width: 80vw;
    height: 85vh;
    background-color: #ECF1F7;
    border: 6px solid #e0dede;
    border-radius: 2.8rem;
    box-shadow: 10px 10px 31px -13.5px rgba(0, 0, 0, 0.33);
    display: grid;
    grid-template-columns: 27% 73%;
    grid-template-rows: 27% 73%;
    font-family: 'Open Sans', sans-serif;
    color: #3e3d3d;
`;

const SideBar = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    grid-row-start: 1;
    grid-row-end: 3;
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
        /* padding-left: 0.2rem; */
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
    .btn {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin: 1rem;
        border: none;
        width: 7rem;
        padding: 0.5rem;
        background-color: #F2F3F7;
        box-shadow: 3px 7px 21px -2px rgb(0 0 0 / 33%);
        border-radius: 1.5rem;
        color: #3e3e3e;
        font-size: 0.7rem;
        font-weight: bold;
    }
    .btn::focus-visible {
        outline: none;
    }
    .task {
        display: flex;
        align-items: flex-end;
        padding-left: 0.5rem;
        margin-bottom: 1rem;
    }
    .completed-label {
        width: 90%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

const Header = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(13, 13, 13, 0.06);
    border-top-right-radius: 2.5rem; 
    border-bottom-left-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
    box-shadow: 0px 13px 27px -6.5px rgba(0, 0, 0, 0.33);

    header {
        width: 90%;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .year-month {
        font-weight: 600;
    }

    .today {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .today p {
        margin: 1px;
        font-size: 0.6rem;
    }
    .gray {
        color: gray;
    }

    .search {
        background-color: #E3E7F0;
        width: 8.7rem;
        padding: 0.4rem;
        box-shadow: 4px 3px 12px -5px rgb(0 0 0 / 33%);
        border-radius: 1.5rem;
        border: 0.5px solid rgb(128 128 128 / 12%);
    }
    .search:focus-visible {
        outline: none;
    }

    section {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 40%; 
        color: gray;
        font-size: 0.6rem;
    }
    section p {
        width: 3rem;
    }
    .picked {
        color: white;
        background: linear-gradient(37deg, rgba(227,137,60,1) 74%, rgba(235,155,86,1) 100%);
        border-radius: 0.7rem;
        padding: 0.1rem;
        border: 1px solid orange;
        box-shadow: 2px 6px 21px -3px rgb(0 0 0 / 33%);
    }

    footer {
        width: 100%;
        height: auto;
        background-color: #F5F6F8;
        border-bottom-left-radius: 1.5rem;
        border-bottom-right-radius: 1.5rem;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: 1fr; 
        color: gray;
        font-size: 0.7rem;
    }
`;
const Span = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #dcdfe2;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 0.6rem;
`;


const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`;


const Main = props => {
    return (
        <Wrapper>
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
                        <button className="btn">
                            <Span><i className="fas fa-plus"></i></Span>
                            Add a Task
                        </button>
                        <div className="task">
                            <input className="task-check" type="radio" id="t1" />
                            <label className="task-label" for="t1">
                                Wireframe for contact page
                            </label>
                        </div>
                        <div className="task">
                            <input className="task-check" type="radio" id="t1" />
                            <label className="task-label" for="t1">
                                Book Return Ticket
                            </label>
                        </div>
                        <div className="task">
                            <input className="task-check" type="radio" id="t1" />
                            <label className="task-label" for="t1">
                                Buy Anniversary Gift
                            </label>
                        </div>
                        <div className="task">
                            <input className="task-check" type="radio" id="t1" />
                            <label className="task-label" for="t1">
                                Pay Electricity Bill
                            </label>
                        </div>
                        <div className="task">
                            <input className="task-check" type="radio" id="t1" />
                            <label className="task-label" for="t1">
                                Meet Chris in the Conference
                            </label>
                        </div>
                    </div>
                    <div className="card">
                        <div className="completed-label">
                            <p>Completed</p>
                            <Span><i className="fas fa-angle-down"></i></Span>
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
                    <input type="search" className="search" placeholder="Search" />
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
            <Section >DAYS</Section>
        </Wrapper>
    );
};

export default Main;

