import React from "react";
import { useState } from "react";

const Counter=()=>{
const [count,SetCount]=useState(0)
if(count%2===0)
{
    var style={
        color:"green"
    }
}
else
{
    var style={
        color:"red"
    }
}

return (
    <div>
        <h1 style={style}>Counter: {count}</h1>
        <button onClick={()=>{SetCount(count+1)}}>Increment</button>
        <button onClick={()=>{SetCount(count-1)}}>Deccrement</button>
        <button onClick={()=>{SetCount(count*2)}}>Double</button>
    </div>
)

}
export default Counter