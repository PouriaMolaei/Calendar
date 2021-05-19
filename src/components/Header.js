import styled from 'styled-components';

export default styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(13, 13, 13, 0.06);
    border-top-right-radius: 2.5rem; 
    border-bottom-left-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
    box-shadow: 0px 13px 27px -6.5px rgba(0, 0, 0, 0.33);

    header {
        /* margin: 0.5rem; */
        width: 90%;
        height: 50%;
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
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #F2F3F7;
        width: 7.3rem;
        padding: 0.3rem;
        box-shadow: inset 0 0 10px rgb(0 0 0 / 10%), 
        4px 3px 12px -5px rgb(0 0 0 / 33%);
        border-radius: 1.5rem;
        border: 0.5px solid rgb(128 128 128 / 12%);
        font-size: 0.8rem;
    }
    .search-input {
        border: none;
        background: transparent;
        width: 80%;
        height: 100%;
    }
    .search-input:focus-visible {
        outline: none;
    }

    section {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 40%; 
        height: 25%;
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
        height: 35%;
        background-color: #F5F6F8;
        box-shadow: inset 0px 30px 30px 0px rgb(0 0 0 / 10%);
        border-bottom-left-radius: 1.5rem;
        border-bottom-right-radius: 1.5rem;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: 1fr; 
        color: gray;
        font-size: 0.7rem;
    }
    footer p {
        margin: auto;
    }
`;