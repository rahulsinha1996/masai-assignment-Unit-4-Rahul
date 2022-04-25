
import React from "react";
import TodoItem from "./TodoItem";


const TodoList=({item})=>{
    console.log(item)
    return (
        <div>
            <TodoItem {...item}/>
            
        </div>
        
    )
}
export default TodoList