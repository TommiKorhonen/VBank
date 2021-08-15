import React from 'react'
import ImageOne from "../../images/Transaction.svg"

const About = () => {
    return (
        <section className="grid lg:grid-cols-2 grid-cols-1
        p-5 h-screen bg-black">
            {/* left */}
            {/* <div className="aspect-w-3 aspect-h-2 sm:aspect-w-4 sm:aspect-h-2
            lg:aspect-w-4 lg:aspect-h-3">
                <img src={ImageOne} alt="" className=" object-contain"/>
            </div> */}
            {/* right */}
            <div className="flex justify-center flex-col">
                <span className=" text-blue-400 
                after:self-center after:inline-block 
                after:mt-4 after:h-[1px] after:w-60 
                after:bg-red-400 after:content-none clear-both ">Digital bank</span>
                <h2 className="text-white text-3xl">Unlimited Transactions with zero fees</h2>
                <p>Get acces to our exclusive app that allows you to send unlimited transactions without any fees</p>
            </div>
        </section>
    )
}

export default About
