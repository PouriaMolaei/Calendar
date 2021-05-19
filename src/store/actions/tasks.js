export const ADD_TASK = 'ADD_TASK';

export const addTask = (title, date, isDone) => {
    return {
        type: ADD_TASK,
        title,
        date,
        isDone
    };
};