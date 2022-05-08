import React from 'react'
import { deleteTodo } from '../store/action'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { useParams } from "react-router-dom";

const BtnStyled=styled.div`
  justify-content:center;
  margin:auto;
  button{
    background-color:red;
    color:white;
    margin-left:10px;
    cursor:pointer;
  }
  p{
    font-size:20px;
    font-weight:bold;

  }
`


export const TodoItem = ({title,desc}) => {
  const {id}=useParams()
  const dispatch=useDispatch()
  const handleDelete=()=>{
    
    dispatch(deleteTodo(id))
    
   }
  
  
    return (
    <div>
      <BtnStyled>
        <div>
        <p>Title: {title} </p>
        <p>Description: {desc} </p>
        </div>
      
      <button onClick={handleDelete}>Delete</button> 
     
      </BtnStyled>
           
    </div>

  )
}
