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
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgba(13, 13, 13, 0.06);
    border-top-right-radius: 2.5rem;
    border-bottom-left-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
    box-shadow: 0px 13px 27px -6.5px rgba(0, 0, 0, 0.33);
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
            <Header>HEADER</Header>
            <Section >DAYS</Section>
        </Wrapper>
    );
};

export default Main;

