import React from 'react'
import Navbar from '../components/SignUpComponents/Navbar'

const SignUp = () => {
    return (
        <>
        <Navbar ></Navbar>
        <aside className="bg-blue-400 min-h-screen grid grid-cols-1">
                <div className="p-8 rounded-md bg-gray-700 flex-col w-full max-w-3xl m-auto">
                    <form className="p-8 flex flex-col gap-4 w-full">
                        <h3 className="text-center text-white text-xl">Sign in to your account</h3>
                        <input type="text" placeholder="Your name" className="rounded-md outline-none p-2 w-full max-w-2xl"/>
                        <input type="text" placeholder="Password" className="rounded-md outline-none p-2 w-full max-w-2xl"/>
                        <button className="btn" type="button">Continue</button>
                        <span className="text-center text-white cursor-pointer">Forgot password</span>
                    </form>
                </div>
        </aside>
        </>
    )
}

export default SignUp
