import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to="/">Login</Link>
        <Link to="home">Home</Link>
    </div>
  )
}

export default Navbar