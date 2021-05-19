import Task from '../../models/Task';
import * as actions from '../actions/tasks';

const initialState = {
    tasks: []
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_TASKS:
            return {
                tasks: action.tasks
            };

        case actions.ADD_TASK:
            const newTask = new Task(
                action.id,
                action.title,
                action.date,
                false
            );
            return {
                tasks: state.tasks.concat(newTask)
            };

        case actions.UPDATE_TASK:
            const updatedTask = state.tasks.map(i => {
                if (i.id !== action.id) return i;
                i.isDone = action.isDone;
                return i;
            });
            return {
                tasks: updatedTask
            };

        default:
            return state;
    }
};

export default Reducer;