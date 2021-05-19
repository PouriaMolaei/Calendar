import React from 'react';

const dummyData = (
    <>
        <div className="task">
            <input
                className="task-check"
                type="checkbox"
                value={isDone}
                onChange={e => {
                    setIsDone(e.target.checked);
                }}
                id="t1" />
            <label className="task-label" htmlFor="t1">
            Wireframe htmlFor contact page
                Book Return Ticket
                            </label>
        </div>
        <div className="task">
            <input
                className="task-check"
                type="checkbox"
                value={isDone}
                onChange={e => {
                    setIsDone(e.target.checked);
                }}
                id="t1" />
            <label className="task-label" htmlFor="t1">
                Buy Anniversary Gift
                            </label>
        </div>
        <div className="task">
            <input
                className="task-check"
                type="checkbox"
                value={isDone}
                onChange={e => {
                    setIsDone(e.target.checked);
                }}
                id="t1" />
            <label className="task-label" htmlFor="t1">
                Pay Electricity Bill
                            </label>
        </div>
        <div className="task">
            <input
                className="task-check"
                type="checkbox"
                value={isDone}
                onChange={e => {
                    setIsDone(e.target.checked);
                }}
                id="t1" />
            <label className="task-label" htmlFor="t1">
                Meet Chris in the Conference
                            </label>
        </div>
    </>
);
