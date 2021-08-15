import React from 'react'
import imageOne from "../../images/Bank.svg"

const Header = () => {
    return (
        <header className="grid lg:grid-cols-2 grid-cols-1
        p-5 max-h-screen bg-gray-100">
            {/* left */}
            <div className="flex flex-col justify-center gap-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl">Build your <br /> Digital Banking Solutions</h1>
                <p>Lorem, ipsum dolor sit amet consectetur 
                adipisicing elit. Aliquam sapiente ut maxime 
                iusto excepturi incidunt quo molestias voluptatibus 
                veniam! Totam blanditiis laborum cupiditate vel 
                temporibus illo ea officiis ipsum fugiat!</p>
                <div className="flex flex-wrap flex-col sm:flex-row gap-8">
                    <button className="btn1">Get Started</button>
                    <button className="btn1">Request a Demo</button>
                </div>
            </div>
            {/* right */}
            <div className="flex aspect-w-3 aspect-h-2 sm:aspect-w-4 sm:aspect-h-2
            lg:aspect-w-4 lg:aspect-h-3">
                <img src={imageOne} alt=" Vault" className=" object-contain rounded-md"/>
            </div>
        </header>
    )
}

export default Header
