import React from "react";
import { useState } from "react";
import {nanoid} from "nanoid";
import TodoList from "./TodoList";
import styles from "./todo.module.css";

const Todo=()=>{
    const [task,SetTask]=useState("");
    const [todo,SetTodo]=useState([]);
    const handleChange=(e)=>{
        SetTask(e.target.value);
    }
    const handleClick=()=>{
        let taskObj={
            id:nanoid(),
            title:task,
            status:false        
        }
        SetTodo([taskObj,...todo])
        
    }
    return (
        <div>
            {todo.map(item=>{
                return (
                    <div>
                    <TodoList key={item.id} item={item}/>
                    </div>
                    
                )
            })}
             <input className={styles.input} placeholder="Write Something" type={"text"} value={task} onChange={handleChange}/>
            <button className={styles.input} onClick={handleClick}>+</button>
        </div>
    )
}
export default Todo