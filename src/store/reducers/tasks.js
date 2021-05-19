import * as actions from '../actions/tasks';

const initialState = {
    tasks: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_TASK:
            
            break;

        default:
            return state;
    }
};