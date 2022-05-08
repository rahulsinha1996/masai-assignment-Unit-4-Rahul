import React, { useState } from 'react'

const Login = () => {

    const [email,setEmail]=useState("");
    const [password,setPass]=useState("")



  return (
    <div>
        <h1>Login Page</h1>
        <form>

            <input type="text" placeholder='email' />
            <input type="password" placeholder='password'/>
            <input type="submit" />

        </form>
    </div>
  )
}

export default Login