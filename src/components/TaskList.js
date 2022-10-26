import { useContext, useEffect, useState } from 'react';
import Task from './Task';
import { ToDoContext } from '../context/ContextProvider';

export default function TaskList(){

    const [isAddTaskOpen, setAddTaskOpen] = useState(false);

    const [taskTitle, setTask] = useState('');

    const {tasks, addTask} = useContext(ToDoContext);

    const handleClick = () => {
        if(taskTitle){
           addTask({taskTitle, isComplete: false});
        }
        setAddTaskOpen(false);
    }

    const [filteredTasks, setFilteredTasks] = useState([]);


    const handleOptionChange = (e) => {
       if(e.target.value === "CompletedTasks"){
            setFilteredTasks(tasks.filter((task) => task.isComplete === true));
        }else if(e.target.value === "PendingTasks"){
            setFilteredTasks(tasks.filter((task) => task.isComplete===false));
        }else{
            setFilteredTasks(tasks);
        }
    }


    useEffect(() => {
        setFilteredTasks(tasks);
    }, [tasks])



    return (<div className='taskList'>
        <div className='listWrapper'>
         <select onChange={(e) => handleOptionChange(e)} className='category' name='listCategory'>
             <option value="All">All</option>
             <option value="CompletedTasks">Completed tasks</option>
             <option value="PendingTasks">Pending tasks</option>
         </select>
         <div className='toDo'>
         {
            tasks.length!=0
            ?
            
            filteredTasks.map((task, i) => {
                return(<Task key={i} task={task} index={i}></Task>);
            })
            :
            <h1>Add your tasks here.</h1>
         }
        <button onClick={() => setAddTaskOpen(true)} className='addTaskBtn'>+</button>
        {
           isAddTaskOpen
           &&
           <div className='taskInput'>
             <input name='taskTitle' onChange={(e) => setTask(e.target.value)} className='taskTitleInput' placeholder='Title'></input>
            <div className='modalBtns'>
                 <button onClick={() => handleClick()} className='modalBtn'>Add</button>
                 <button className='modalBtn' onClick={() => setAddTaskOpen(false)}>Cancel</button>
            </div>
             
           </div>
        }
    </div>
    </div>
  </div>);
}