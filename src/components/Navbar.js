import React from 'react';
import { MenuIcon } from "@heroicons/react/solid"
import { XIcon } from "@heroicons/react/solid"
import Scrollspy from 'react-scrollspy';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';

const Navbar = ({toggle, isOpen}) => {
    return (
        <nav className="bg-white sticky shadow-md top-0 z-50">
            <div className={isOpen ?"grid md:grid-cols-3 grid-cols-2 pt-5 md:py-5 px-5 md:px-10" : "grid md:grid-cols-3 grid-cols-2  py-5 px-5 md:px-10"}>
                {/* left */}
                <div className="flex items-center">
                    <span className="text-2xl transform hover:scale-110"><a href="#">VBank</a></span>
                </div>
                {/* middle */}
                <div className="md:flex items-center justify-center hidden ">
                    <Scrollspy items={ ['about', "discover", "services", "signUp"] } 
                    currentClassName="active" 
                    className="centerFlex gap-4 sm:flex-wrap text-lg items-center ">
                            <li className="transform hover:scale-110"><a href="#about">About</a></li>
                            <li className="transform hover:scale-110"><a href="#discover">Discover</a></li>
                            <li className="transform hover:scale-110"><a href="#services">Services</a></li>
                            <li className="transform hover:scale-110"><a href="#signUp">Sign up</a></li>
                    </Scrollspy>
                </div>
                {/* right */}
                <div className="md:flex items-center md:justify-end justify-center hidden">
                    <Link className="btn shadow-sm hover:shadow-lg transform active:scale-90" to="/signIn">Sign In</Link>
                </div>
                <span className="md:hidden px-4 flex items-center justify-end" onClick={toggle}>
                    <MenuIcon className={isOpen ? "hidden" : "h-16"}/>
                    <XIcon className={isOpen ? "h-16" : "hidden"} />
                </span>
            </div>
            <Dropdown toggle={toggle} isOpen={isOpen}/>
        </nav>
    )
}

export default Navbar
