import React from 'react'
import { data } from './serviceData'
const Service = () => {
    return (
        <section className="min-h-screen bg-black" id="services">
            <div className="relative flex min-h-screen container m-auto gap-4 flex-wrap sm:p-16 pt-16 p-5">
                <div className="hidden sm:absolute bg-white w-32 left-1/2 transform -translate-x-16 -top-6 text-center rounded-md">
                    <h2 className="text-2xl text-black">Our Services</h2>
                </div>
                {data.map((card) => {
                    const {id, text, paragraph, src} = card;
                    return(
                        <div className="h-96 w-96 m-auto 
                        centerFlex flex-col text-center p-10 md:p-4 gap-3 bg-white rounded-md" key={id}>
                            <div className="centerFlex p-5 md:p-0">
                                <img src={src} alt="" className="md:h-3/4 md:w-3/4 lg:h-4/5 lg:w-4/5 rounded-md" />
                            </div>
                            <h3 className="text-xl font-semibold">{text}</h3>
                            <p>{paragraph}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Service
