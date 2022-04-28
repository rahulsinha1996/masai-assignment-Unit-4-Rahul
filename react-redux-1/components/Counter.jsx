import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import styled from 'styled-components';
import { add, decremetnCounter, divide, incremetnCounter, multiply, subtract } from '../store/action';


const DivStyle=styled.div`
.counter{
    
  height: 60px;
  width: 300px;
  border: 3px solid black;
  text-align: center;   
  font-size: 40px;
  font-weight: bold; 
}
.increment{
  display: block;
  background-color: transparent;
  border: 2px solid black;
  height: 50px;
  width: 200px;
  border-radius: 15px;
  cursor: pointer;
  font-size: 30px;
  font-weight: bold; 
  
}
.decrement{
  display: block;
  background-color: transparent;
  border: 2px solid black;
  height: 50px;
  width: 200px;
  border-radius: 15px;
  cursor: pointer;
  font-size: 30px;
  font-weight: bold; 
  text-align: center;
}

.inputtake{
  height: 100px;
  width: 100px;
  border: 3px solid black;
  text-align: center;   
  font-size: 40px;
  font-weight: bold;
  grid-area:1/1/3/1; 
  justify-content: center;
  margin: auto;
  font-size: 30px;
  font-weight: bold; 
  align-items: center;
}
.buttonInput{
  display: grid;
  grid-template-columns:repeat(3,150px);
  grid-template-rows:repeat(2,150px);
  grid-gap: 30px;
  cursor: pointer;
  font-size: 30px;
  font-weight: bold; 

}

.buttonInput1{
  border: 2px solid black;
  text-align: center;
  border-radius: 25px;
  margin-left: 10%;
  border-style: ridge;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor:pointer;
  background-color:transparent;
  font-size: 30px;
  font-weight: bold; 
}


`

const Counter = () => {
    const count=useSelector((state)=>state.count)
    const dispatch=useDispatch();
    const [value, setValue]=useState(0);
  return (
      <div>
        <DivStyle>
        <div className='counter'>{count}</div>
          <div>
          <button className="increment" onClick={()=>dispatch(incremetnCounter(1))}>Increment</button>
            <button className="decrement" onClick={()=>dispatch(decremetnCounter(1))}>Decrement</button>
          </div>
          <div className='buttonInput'>
            <input className="inputtake" type="text" placeholder='X' onChange={(e)=>setValue(e.target.value)}/>
            <button className="buttonInput1" onClick={()=>dispatch(add(Number(value)))}>add</button>
            <button className="buttonInput1" onClick={()=>dispatch(multiply(Number(value)))}>multiply</button>
            <button className="buttonInput1" onClick={()=>dispatch(subtract(Number(value)))}>subtract</button>
            <button className="buttonInput1" onClick={()=>dispatch(divide(Number(value)))}>divide</button>
          </div>
        </DivStyle> 
      </div>
    
  )
}

export default Counter