import React from 'react'
import { MenuIcon } from "@heroicons/react/solid"

const Navbar = ({toggle}) => {
    return (
        <nav className="sticky top-0 z-50 grid
        md:grid-cols-3 grid-cols-2 bg-white shadow-md py-5 px-5 md:px-10">
            {/* left */}
            <div className="flex items-center">
                <span className="text-2xl">VBank</span>
            </div>
            {/* middle */}
            <div className="md:flex items-center justify-center hidden ">
                <ul className="centerFlex gap-4 sm:flex-wrap text-lg items-center">
                    <li>About</li>
                    <li>Discover</li>
                    <li>Services</li>
                    <li>Sign up</li>
                </ul>
            </div>
            {/* right */}
            <div className="md:flex items-center md:justify-end justify-center hidden">
                <button className="btn shadow-sm">Sign In</button>
            </div>
            <div className="md:hidden px-4 flex items-center justify-end">
                <MenuIcon className="h-16"/>
            </div>
        </nav>
    )
}

export default Navbar
