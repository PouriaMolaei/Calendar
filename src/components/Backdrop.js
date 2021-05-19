import styled from 'styled-components';

export default styled.div`
    background: rgba(0, 0, 0, 0.5);
    opacity: ${props => props.show ? "1" : "0"};
    visibility: ${props => props.show ? "visible" : "hidden"};
    min-width: 100vw;
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    transition: all 0.5s;
`