import styled from 'styled-components';

export default styled.section`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(5, 1fr); 

    .day {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        font-size: 0.5rem;
    }
    .task-title {
        width: 90%;
        /* height: 88%; */
        padding: 0.1rem;
        border-radius: 1.2rem;
        background-color: #F2F3F7;
        box-shadow: 3px 3px 8px 1px rgb(0 0 0 / 33%);
    }
    .num {
        height: 12%;
    }
    .num .selected {
        
    }
    .edge-t-l,
    .edge-t,
    .edge-l,
    .mid {
        border-right: 1px solid #b9b8b8;
        border-bottom: 1px solid #b9b8b8;
    }
    .edge-t-r,
    .edge-r {
        border-bottom: 1px solid #b9b8b8;
    }
    .edge-d-l, 
    .edge-d {
        border-right: 1px solid #b9b8b8;
    }

`;