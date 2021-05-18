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
    justify-content: center;
    align-items: center;
    grid-row-start: 1;
    grid-row-end: 3;
    border-right: 1px solid #ccc;
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
        width: 8.5rem;
        padding: 0.5rem;
        border-radius: 1.5rem;
        border: 0.5px solid rgb(128 128 128 / 12%);
        box-shadow: 4px 3px 12px -5px rgb(0 0 0 / 33%);
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
    
    span {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        background-color: #dcdfe2;
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 0.6rem;
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

const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`;



const Main = props => {
    return (
        <Wrapper>
            <SideBar>SIDEBAR</SideBar>
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
                    <span><i class="fas fa-angle-left"></i></span>
                    <p>Day</p>
                    <p>Week</p>
                    <p className="picked">Month</p>
                    <span><i class="fas fa-angle-right"></i></span>
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

