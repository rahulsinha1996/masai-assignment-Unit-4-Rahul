import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { deleteTodo } from '../store/action'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'

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

export const TodoView = () => {
    const [todoView, settodoVeiw]=useState({})
    const {id} = useParams();
    const navigate=useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:8080/todos/${id}`).then((res)=>{
            settodoVeiw(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    // console.log(todoView)
    const dispatch=useDispatch()
    const handleDelete=()=>{
    
    dispatch(deleteTodo(id))
    navigate("/home")
   }
    
  return (
    <div>
        TodoView : {id} 
        <h1>Title:{todoView.title}</h1>
        <h1>Desc:{todoView.desc}</h1>

        <BtnStyled>      
      <button onClick={handleDelete}>Delete</button> 
          </BtnStyled>
    </div>
  )
}
