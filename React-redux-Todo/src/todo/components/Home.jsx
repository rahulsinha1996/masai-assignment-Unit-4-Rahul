import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { getTodo } from '../store/action'
import { TodoInput } from './TodoInput'


export const Home = () => {
  const todos=useSelector((state)=>state.todos);
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getTodo())
  },[dispatch])   

  
  return (
    <div>Todo
        <TodoInput/>
        <br/>
        <h1>Todo Items</h1>
        <hr />
        {todos.map((todos)=>(
            <div key={todos.id} style={{textDecoration:"none!important", fontSize:"20px", fontColor:"black"}}>

              <Link to={`/home/${todos.id}`}>{todos.title}</Link>
            </div>
            
            
        ))}
    </div>
  )
}
