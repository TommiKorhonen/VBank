import React, {useState, useEffect, useRef} from 'react';
import { MenuIcon } from "@heroicons/react/solid"
import Scrollspy from 'react-scrollspy';

const Navbar = ({toggle}) => {
    return (
        <nav className="sticky top-0 z-50 grid 
        md:grid-cols-3 grid-cols-2 bg-white shadow-md py-5 px-5 md:px-10
        ">
            {/* left */}
            <div className="flex items-center">
                <button className="text-2xl"><a href="#">VBank</a></button>
            </div>
            {/* middle */}
            <div className="md:flex items-center justify-center hidden ">
                <Scrollspy items={ ['about', "discover", "services"] } 
                currentClassName="active" 
                className="centerFlex gap-4 sm:flex-wrap text-lg items-center">
                        <li><a href="#about">About</a></li>
                        <li><a href="#discover">Discover</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#signUp">Sign up</a></li>
                </Scrollspy>
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
