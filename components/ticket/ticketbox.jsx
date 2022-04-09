import React from 'react'
import { useRouter } from 'next/router'

const Ticketbox = ({ ticketDetails }) => {
  const router = useRouter();

  return (

    <div className="">
      <div className=" shadow-xl hover:shadow-orange-100 rounded-xl title-font bg-white grid grid-cols-6 grid-rows-8 gap-  ">
        <div className="box text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-red-600 rounded-xl place-self-center text-3xl antialiased font-bold row-span-6 col-span-2">{ticketDetails.src} - {ticketDetails.dest}</div>
        <div className="box rounded-xl place-self-center mt-4 text-slate-700 text-xl antialiased font-bold row-span-3 col-span-2">{ticketDetails.start_station} - {ticketDetails.end_station}</div>
        <div className="box rounded-xl place-self-center mt-4 text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-red-600 text-3xl antialiased font-bold row-span-3 col-start-3 col-span-2">{ticketDetails.start_time} - {ticketDetails.end_time}</div>
        <div className="box text-transparent bg-clip-text mt-4 bg-gradient-to-br from-red-400 to-red-600 text-3xl antialiased font-bold row-start-1 row-span-4 place-self-center col-start-5 col-span-2">{ticketDetails.price} MAD</div>
        <div className="box rounded-xl grid row-span-2 col-span-2 mt-4 mb-8">
          <button className="place-self-center  mt-6"
            onClick={() => {
              router.push('/seats?schedule_id=' + ticketDetails.id)
            }}
          >Select Seat</button>
        </div>
      </div>
    </div>
  )
}

export default Ticketbox