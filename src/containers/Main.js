import React, { useState } from 'react';
import Wrapper from '../components/Wrapper';
import SideBar from '../components/SideBar';
import Header from '../components/Header';
import DaysSection from '../components/DaysSection';
import Span from '../components/Span';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from '../components/Modal';

const Main = props => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <Wrapper>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
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
                        <button className="btn" onClick={() => setModalShow(true)}>
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

