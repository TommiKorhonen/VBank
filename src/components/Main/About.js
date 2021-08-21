import React from 'react'
import { Link } from 'react-router-dom'
import ImageOne from "../../images/test.svg"

const About = () => {
     
    return (
        <section className="centerFlex flex-col-reverse lg:flex-row
        p-5 min-h-screen  bg-black sm:gap-8 " id="about" >
            {/* left */}
            <div className="flex items-center justify-center lg:justify-end">
             <img src={ImageOne} alt="" className="h-96 w-96 lg:h-4/5 lg:w-4/5"/>
            </div>
            {/* right */}
            <div className="flex justify-center items-center text-center md:items-start 
            md:text-left 
            flex-col row-start-1 lg:row-start-auto gap-2 p-8 mt-10 sm:m-0">
                <span className=" underlinetxt">Digital bank</span>
                <h2 >Unlimited Transactions with zero fees</h2>
                <p>Get acces to our exclusive app that allows you to send unlimited transactions without any fees</p>
                <div className="flex sm:flex-row mt-4">
                    <Link to="signIn"><button className="btn1">Get Started</button></Link>
                </div>
            </div>
        </section>
    )
}

export default About
