import Task from "../../models/Task";

export const SET_TASKS = 'SET_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';

export const setTasks = () => {
    return async dispatch => {
        const res = await fetch(
            'https://calendar-ad5d7-default-rtdb.firebaseio.com/tasks.json'
        );
        if (!res.ok) throw new Error("Something went wrong!");
        const resData = await res.json();

        const tasks = [];
        for (const key in resData) {
            tasks.push(new Task(
                key,
                resData[key].title,
                resData[key].date,
                resData[key].isDone,
            ));
        };

        dispatch({ type: SET_TASKS, tasks });
    };
};

export const addTask = (title, date) => {
    return async dispatch => {
        const res = await fetch(
            'https://calendar-ad5d7-default-rtdb.firebaseio.com/tasks.json',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, date, isDone:false })
            }
        );
        if (!res.ok) throw new Error("Something went wrong!");
        const resData = await res.json();

        dispatch({
            type: ADD_TASK,
            id: resData.name,
            title,
            date,
        });
    };
};

export const updateTask = (isDone, id) => {
    return async dispatch => {
        dispatch({ type: UPDATE_TASK, id, isDone });

        const res = await fetch(
            `https://calendar-ad5d7-default-rtdb.firebaseio.com/tasks/${id}.json`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    isDone
                })
            }
        );
        if (!res.ok) throw new Error("Something went wrong!");

    };
};