import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

const TicketTrip = ({ ticketDetails }) => {
  const router = useRouter();

  return (
    <div>
      <div className="w-screen flex items-center justify-center ">
        <div className="max-w-2/3 w-2/3 border border-slate-400 bg-white  rounded-lg overflow-hidden shadow-lg">
          <div className="flex flex-row items-baseline flex-nowrap bg-slate-100 p-2">
            <h1 className="ml-2 uppercase font-bold text-gray-500">departure</h1>
            <p className="ml-2 font-normal text-gray-500">Wednesday 19 April</p>
          </div>
          <div className="mt-2 flex justify-start bg-white p-2">
            <div className="flex mx-2 ml-6 h8 px-2 flex-row items-baseline rounded-full bg-gray-100 p-1">
              <p className="font-normal text-sm ml-1 text-gray-500">Comfort</p>
            </div>
          </div>
          <div className="mt-2 flex sm:flex-row mx-6 sm:justify-between flex-wrap ">
            <div className="flex flex-row place-items-center p-2">
              <Image src="/logo2.png"
                width={120}
                height={80}
                alt="Itrane logo" className="w-10 h-10" />
              <div className="flex flex-col ml-2">
                <p className="text-xs text-gray-500 font-bold">Itrane Voyage</p>
                <p className="text-xs text-gray-500">QR1456</p>
                <div className="text-xs text-gray-500">2*23kg</div>
              </div>
            </div>

            <div className="flex flex-col p-2">
              <p className="font-bold">{ticketDetails.start_time}</p>
              <p className="text-gray-500"> {ticketDetails.start_station}</p>
              <p className="text-gray-600 text-lg font-bold">{ticketDetails.src}</p>
            </div>
            <div className="flex flex-col flex-wrap p-2">
              <p className="font-bold">{ticketDetails.end_time}</p>
              <p className="text-gray-500"> {ticketDetails.end_station}</p>
              <p className="text-gray-600 text-lg font-bold">{ticketDetails.dest}</p>
            </div>
          </div>
          <div className="mt-4 bg-gray-100 flex flex-row flex-wrap md:flex-nowrap justify-between items-baseline">
            <div className="flex mx-6 py-4 flex-row flex-wrap">
              <div className="text-sm mx-2 flex flex-col">
                <p className=""></p>
                <p className="font-bold"></p>
                <p className="text-xs text-gray-500"></p>
              </div>
            </div>
            <div className="md:border-l-2 mx-6 md:border-dotted flex flex-row py-6 mr-6 flex-wrap">
              <div className="text-sm mx-12 flex flex-col">
                <p>Discounted Ticket</p>
                <p className="font-bold text-2xl">{ticketDetails.price} MAD</p>
                <p className="text-xs text-gray-500">Price per adult</p>
              </div>
              <button className="w-32 h-11 mt-4 rounded flex border-solid border text-white bg-green-800 mx-2 justify-center place-items-center"><div className=""
                onClick={() => {
                  router.push('/seats?schedule_id=' + ticketDetails.id)
                }}
              >Book</div></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicketTrip