import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"

// Import link

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">Sobre</Link>
        </nav>
    )
}

export default Navbar