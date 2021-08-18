import React from 'react'
import ImageOne from "../../images/login.svg"

const Discover = () => {
    return (
        <section className="centerFlex flex-col lg:flex-row
        p-5 h-screen  bg-gray-100 sm:gap-8 " id="discover">
            <div className="flex justify-center items-center 
            mt-8 sm:m-0 text-center md:items-start md:text-left 
            flex-col row-start-1 lg:row-start-auto gap-2 p-8">
                <span className=" underlinetxt">Unlimited access</span>
                <h2 className="text-black ">Login to your account at any time</h2>
                <p>We have you covered no matter where you are located.
                All you need is an internet connection and a phone or computer.
                </p>
                <div className="flex sm:flex-row mt-4">
                    <button className="btn1">Learn More</button>
                </div>
            </div>
            <div className="flex items-center justify-center  lg:justify-start">
             <img src={ImageOne} alt="" className="h-96 w-96 lg:h-4/5 lg:w-4/5"/>
            </div>
            {/* right */}
        </section>
    )
}

export default Discover
