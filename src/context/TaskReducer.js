import * as actionTypes from './ActionTypes';

export default function taskReducer(state, action){
    var tasks = [...state.tasks];
    var newState;
    switch(action.type){
        case actionTypes.ADD_TASK: 
            tasks.push(action.payload);
            newState = {...state, tasks: tasks};
            break;
        case actionTypes.MARK_TASK:
            tasks[action.payload.index].isComplete = true;
            newState = {...state, tasks: tasks};
            break;
        case actionTypes.REMOVE_TASK:
            tasks.splice(action.payload.index, 1)
            newState = {...state, tasks: tasks};
            break;
        default: 
            newState = state;

    }
    localStorage.setItem('tasks', JSON.stringify(newState.tasks));
    return newState;
}