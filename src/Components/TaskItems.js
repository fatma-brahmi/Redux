import React from "react";
import { useDispatch } from "react-redux";
import { delete_task, complete } from "../JS/Actions/action";
import EditTask from "./EditTask";



const TaskItems = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className='todo-row' >
     <div > {todo.name}</div>

      <div className='btn'>
        

        <button  className='todo-button' onClick={() => dispatch(delete_task(todo.id))}>Delete</button>
        <EditTask todo={todo} />
       
        <button className='todo-button' onClick={() => dispatch(complete(todo.id))}>
          {" "}
          {todo.IsDone ? "Undo" : "complete"}{" "}
        </button>
      </div>
    </div>
  );
};

export default TaskItems;
