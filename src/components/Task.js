import { useContext } from "react";
import { ToDoContext } from "../context/ContextProvider";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash, faCircleCheck} from '@fortawesome/free-solid-svg-icons';

export default function Task({task, index}){

    const {markTask, removeTask} = useContext(ToDoContext);

    return(
        <div className='task'>
        {
            task.isComplete
            ?
            <span className="taskTitle"><s>{task.taskTitle}</s></span>
            :
            <span className="taskTitle">{task.taskTitle}</span>
            
        }
        <div className="actionBtns">
            <button onClick={() => markTask({index: index})} className="actionBtn">
                <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
            </button>
            <button onClick={() => removeTask({index: index})} className="actionBtn">
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </button>
        </div>
    </div>
    );
}