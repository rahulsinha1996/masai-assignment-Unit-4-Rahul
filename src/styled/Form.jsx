import React from 'react';
import styled from "styled-components";


const InputStyle=styled.div`    
        text-align:left;
        margin-top:10px;
        input{
            border:none;
            border-bottom:2px solid red;
            width:100%;        
            margin-top:20px;
        }
        label{
            display:block;
            font-size:10px;
            margin-top:20px;
            font-weight:bold;
        }
    `;
    const Inner=styled.div`
    display:flex;
    flex-direction:row;
    gap:20px;
    `
    const Pay=styled.button`
    width:200px;
    height:50px;
    font-weight:bold;
    font-size:20px;
    border-radius:10px;
    border:none;
    background-color:red;
    color:white;
    margin-top:20px;
    `;

const Form = () => {
    
  return (
     <div>
        <h2>Payment Details</h2>
       <InputStyle>
       <label>CARHOLDER NAME</label>
       <input type="text"  />
       <label>CARD NUMBER</label>
       <input type="text"  />
       <Inner>
       <InputStyle>
       <label>EXPIRY MONTH</label>
       <input type="text"  />
       </InputStyle>
       <InputStyle>
       <label>EXPIRY YEAR</label>
       <input type="text"  />
       </InputStyle>
       <InputStyle>
       <label>CVC</label>
       <input type="text"  />
       </InputStyle>
       </Inner>
       <h2>Payment amount : 12 300</h2>
       <Pay>Pay</Pay>
       </InputStyle>
    
    </div>
   
  )
}

export default Form