import React from 'react';
import styled from "styled-components";


const Btn=styled.button`
    cursor:pointer;
    background: transparent;
    border-shadow:none;
    height:40px;
    width:200px;
    border:1px ${({bstyle})=>bstyle} ${({bocolor})=>bocolor};
    background-color:${({bcolor})=>bcolor};
    color:${({fcolor})=>fcolor};
    margin-left:10px;
`;

const Button = () => {
  return (
      <div>
        <Btn bcolor="dodgerblue" bstyle="solid" bocolor="dodgerblue" fcolor="white">Primary Button</Btn>
        <Btn bcolor="white"  bstyle="solid" bocolor="black" fcolor="black">Default Button</Btn>
        <Btn bcolor="white"  bstyle="dashed" bocolor="black" fcolor="black">Dashed Button</Btn>
        <Btn bcolor="white"  fcolor="black">Text Button</Btn>
        <Btn bcolor="white"  fcolor="blue">Link Button</Btn>
      </div>
    
  )
}

export default Button