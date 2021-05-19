import styled from 'styled-components';

export default styled.section`
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
        align-items: flex-end;
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
`;