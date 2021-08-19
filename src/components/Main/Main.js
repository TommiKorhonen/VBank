import React from 'react'
import About from './About'
import Discover from './Discover'
import Service from './serviceData/Service'
import SignUp from './SignUp'

const Main = () => {
    return (
        <main>
            <About/>
            <Discover></Discover>
            <Service/>
            <SignUp />
        </main>
    )
}

export default Main
