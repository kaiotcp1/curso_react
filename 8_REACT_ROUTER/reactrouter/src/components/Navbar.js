import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./NavBar.css"

// Import link

const Navbar = () => {
    return (
        <nav>
            {/* <Link to="/">Home</Link>
            <Link to="/about">Sobre</Link> */}

            <NavLink to="/"
             //</nav>className={({isActive}) => (isActive ? "esta-ativo" : "não-ativo")}
             >Home</NavLink>
            <NavLink to="/about">Sobre</NavLink>
        </nav>
    )
}

export default Navbar