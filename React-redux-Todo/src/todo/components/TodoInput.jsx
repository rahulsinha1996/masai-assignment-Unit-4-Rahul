import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/action';


export const TodoInput = () => {
  const [title,setTitle]=useState("")
  const [desc,setDesc]=useState("")
  const dispatch=useDispatch();

  const handleAdd=(e)=>{
    e.preventDefault()
    const formData={
      title,
      desc
    }
    const addTodoAction=addTodo(formData);
    dispatch(addTodoAction);
    setTitle("")
    setDesc("")
  }

  return (
    <div>
      <form action="" onSubmit={handleAdd}>

      <input type="text" placeholder='Add Todos Title' value={title} onChange={(e)=>setTitle(e.target.value)}/> <br/>
      <textarea placeholder='Add Todos Details' value={desc} onChange={(e)=>setDesc(e.target.value)}/><br/>
      <input type="submit" placeholder='Add Todo'/>

      </form>
      
    </div>
  )
}
