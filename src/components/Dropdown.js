import React from 'react'

const Dropdown = ({toggle, isOpen}) => {
    return (
        <div className={isOpen ? " py-5 px-5 pt-2 pb-4 md:hidden " : "hidden"}>
            <a href="#about" className="block px-2 py-1 font-semibold rounded hover:bg-blue-400 " onClick={toggle}>About</a>
            <a href="#discover" className="mt-1 block px-2 py-1 font-semibold rounded hover:bg-blue-400" onClick={toggle}>Discover</a>
            <a href="#services" className="mt-1 block px-2 py-1 font-semibold rounded hover:bg-blue-400" onClick={toggle}>Services</a>
            <a href="#signUp" className="mt-1 block px-2 py-1 font-semibold rounded hover:bg-blue-400" onClick={toggle}>Sign up</a>
            <button className="mt-4 block px-2 py-1 bg-blue-400 font-semibold rounded-sm   hover:shadow-lg transform active:scale-90" onClick={toggle}>Sign In</button>
        </div>
    )
}

export default Dropdown
