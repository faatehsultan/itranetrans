import React from 'react'
import Testhero from './testhero'
import Date from "./date"

const Finalhero = () => {
  return (
<div>
        <div>
    <section className="text-gray-600 body-font">
  <div className=" container py-20 mx-auto flex flex-wrap items-center ">
    <div className="lg:w-2/6 md:w-1/2 md:px-12 lg:px-2  ">
      <h1 className="sm:text-3xl text-3xl font-medium title-font text-transparent bg-clip-text mb-4 bg-gradient-to-br from-yellow-500 to-red-600">Book Your Ticket with Itrane Online, Easy and Safely</h1>
      <p className="leading-relaxed mt-4 text-xl">Book Your Ticket with Itrane Online, Easy and Safely.</p>
    </div>
    <div className=" lg:w-4/6 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      
        <Testhero/>
          
          </div>
         </div>
    </section>  
    </div>
    </div>


  )
}

export default Finalhero