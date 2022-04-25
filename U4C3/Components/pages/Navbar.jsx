import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";

const NavbarStyle=styled.div`

  margin:0;
  padding:0;
  height:50px;
  background-color:rgb(253,155,149);
  color:blue;
  
  font-size:20px;
  align-item:center;
  

  .active{
    color:red;
    text-decoration:none;
   
  }
  nav{
    display:flex;
    flex-direction:row;
    gap:30px;
    justify-content:center;
    text-align:center;
    text-decoration:none;
    font-weight:bold;
  }
`

export const Navbar = () => {
  const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
  console.log(token)
 
  return (

    <>
    <NavbarStyle>
    <nav>
      
        <NavLink activeclassname="active" to="/">Home</NavLink>
        <NavLink activeclassname="active" to="/about">About</NavLink>
        <NavLink activeclassname="active" to="/books">Books</NavLink>
        <NavLink activeclassname="active" to="/login">Login</NavLink>     
    </nav>
    </NavbarStyle>
    </>
    
     
      
  );
};
