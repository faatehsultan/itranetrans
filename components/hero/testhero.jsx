import React from 'react'
import Ticketbuy from "./ticketbuy"
import Dates from "./date"
import Link from "next/link"
//import Datos from "./dates"

const Testhero = () => {
  return (
    <div >

    <section className="w-full max-w-2xl px-6 py-4 mx-auto bg-gray-100 rounded-md shadow-md  hover:shadow-xl hover:shadow-orange-100">
        <h2 className="text-3xl font-semibold text-center ">Choose Your Ticket</h2>
        
    
        
        <div className="mt-10 ">
            <div className="items-center -mx-3 md:flex">
                <div className="z-50 w-full mx-2">
                    <label className=" block mb-2 text-sm font-medium text-gray-600 0:text-gray-200">Pick Up Point</label>

                    <Ticketbuy/>
                </div>

                <div className="z-40 w-full mx-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm font-medium text-gray-600 0:text-gray-200">Destination</label>

                    <Ticketbuy/>
                </div>
            </div>

            <div className="z-20 w-full mt-8">
                <label className="block mb-2 text-sm font-medium text-gray-600 0:text-gray-200">Departure Date</label>
            <div className="">
            <input className="relative w-full h-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 sm:text-sm overflow-hidden" type="date" id="start" name="trip-start"
       
       min="2022-01-01" max="2022-12-31"/>
            </div>
                
            </div>

            <div className="flex justify-center mt-6 z-10">
            <Link href='/buyticket' passHref>
                <button className="py-3 px-4 mb-3 mt-3 text-white">
                    Buy Ticket
                </button>
                </Link>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Testhero