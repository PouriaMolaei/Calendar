import Task from '../../components/models/Task';
import * as actions from '../actions/tasks';

const initialState = {
    tasks: []
};

const Reducer = (state = initialState, action) => {
    console.log('reducerState', state.tasks);
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
                action.isDone
            );
            return {
                tasks: state.tasks.concat(newTask)
            };

        default:
            return state;
    }
};

export default Reducer;