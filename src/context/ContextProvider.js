import { createContext, useReducer } from "react";
import * as actionTypes from './ActionTypes';
import taskReducer from "./TaskReducer";


export const ToDoContext = createContext();

export default function ContextProvider({children}){

    const initalState = {
        tasks: localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []
    }

    const [state, dispatch] = useReducer(taskReducer, initalState);

    const addTask = (task) => dispatch({
        type: actionTypes.ADD_TASK,
        payload: task
    });

    const markTask = (index) => dispatch({
        type: actionTypes.MARK_TASK,
        payload: index
    });

    const removeTask = (index) => dispatch({
        type: actionTypes.REMOVE_TASK,
        payload: index
    });

    return (
        <ToDoContext.Provider value={{
            tasks: state.tasks,
            addTask,
            markTask,
            removeTask
        }}>
          {children}
        </ToDoContext.Provider>);

    
    
}