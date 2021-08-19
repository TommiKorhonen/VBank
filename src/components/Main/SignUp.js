import React from 'react'
import ImageOne from "../../images/signup.svg"

const SignUp = () => {
    return (
        <section id="signUp" className="centerFlex flex-col lg:flex-row
        p-5 h-screen bg-gray-100 sm:gap-8">
            <div className="flex justify-center items-center 
            mt-10 sm:m-0 text-center md:items-start md:text-left 
            flex-col row-start-1 lg:row-start-auto gap-2 p-8">
                <span className=" underlinetxt">Join our team</span>
                <h2 className="text-black ">Creating an account is extremely easy</h2>
                <p>Get everything set up and ready in under 10 minutes. 
                All you need to do is add your information and you're ready to go.
                </p>
                <div className="flex sm:flex-row mt-4">
                    <button className="btn1">Start Now</button>
                </div>
            </div>
            <div className="flex items-center justify-center  lg:justify-start">
             <img src={ImageOne} alt="" className="h-96 w-96 lg:h-4/5 lg:w-4/5"/>
            </div>
        </section>
    )
}

export default SignUp
