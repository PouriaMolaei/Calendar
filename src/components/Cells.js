import React from 'react';
import styled from 'styled-components';

import cells from '../data/cells';

const CellsSection = styled.section`
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
        width: 85%;
        padding: 0.1rem;
        border-radius: 1.2rem;
        background-color: #F2F3F7;
        box-shadow: 3px 3px 8px 1px rgb(0 0 0 / 33%);
    }
    .num {
        height: 12%;
    }
    .selected {
        margin-bottom: 0.1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #dcdfe2;
        width: 1rem;
        height: 1rem;
        border-radius: 0.5rem;
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

const Cells = props => {
    const { tasks } = props;
    return (
        <CellsSection>
            {cells.map((cell, i) => (
                <div key={i} className={`day ${cell.className}`}>
                    <p className={`num ${cell.day === 18 && 'selected'}`}>{cell.day}</p>
                    {tasks && tasks.filter(
                        t => t.date.day === cell.day
                            && t.date.month === 11
                    ).map(t => (
                        <p className="task-title">
                            {
                                t.title.length > 17 &&
                                t.title.substring(0, 16) + "..."
                            }
                        </p>
                    ))}
                </div>
            ))}
        </CellsSection>
    );
};

export default Cells;