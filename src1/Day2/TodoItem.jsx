
import React from "react";
import styles from "./todo.module.css";

const TodoItem=(item)=>{
    

    return (
        
            <div className={styles.task}>
            <p className="para">{item.title}</p>
            <div className={styles.circle}></div>
            </div>
     
        
        
    )
    
}
export default TodoItem;