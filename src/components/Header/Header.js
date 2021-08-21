import React from 'react'
import { Link } from 'react-router-dom'
import imageOne from "../../images/Bank.svg"

const Header = () => {
    return (
        <header className="centerFlex flex-col lg:flex-row
        p-5 min-h-screen  bg-gray-100 gap-8">
            {/* left */}
            <div className="flex flex-col justify-center gap-2">
                <span className=" underlinetxt">Exclusive</span>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl">Build your <br /> Digital Banking Solutions</h1>
                <p className="mt-1">Lorem, ipsum dolor sit amet consectetur 
                adipisicing elit. Aliquam sapiente ut maxime 
                iusto excepturi incidunt quo molestias voluptatibus 
                veniam! Totam blanditiis laborum cupiditate vel 
                temporibus illo ea officiis ipsum fugiat!</p>
                <div className="flex flex-wrap flex-col sm:flex-row gap-8 mt-4">
                    <Link to="/signIn" className="btn1 text-center"><button >Get Started</button></Link>
                    <button className="btn1">Request a Demo</button>
                </div>
            </div>
            {/* right */}
            <div className="centerFlex">
                <img src={imageOne} alt=" Vault" className=" md:h-3/4 md:w-3/4 rounded-md"/>
            </div>
        </header>
    )
}

export default Header
