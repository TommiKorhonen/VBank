import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="p-5 absolute bg-blue-400">
           <Link to="/VBank" className="text-2xl transform hover:scale-110 text-white font-semibold "><a href="#">VBank</a></Link> 
        </nav>
    )
}

export default Navbar
