import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.main`
    width: 80vw;
    height: 80vh;
    background-color: brown;
    padding: 4em;
`;

const Main = props => {
    return (
        <Wrapper>
            <p>Hello!</p>
        </Wrapper>
    );
};

export default Main;

