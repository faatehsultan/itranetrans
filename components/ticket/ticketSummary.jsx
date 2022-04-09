import React from 'react'
import Image from 'next/image'

const TicketSummary = ({ detailData }) => {
  return (
    <div>

      <div className="py-5">
        <div className="max-w-full w-full border border-slate-400  bg-white flex flex-col rounded overflow-hidden shadow-lg">
          <div className="flex flex-row items-baseline  flex-nowrap bg-slate-100 p-2">

            <h1 className="ml-2 uppercase font-bold text-gray-500">departure</h1>
            <p className="ml-2 font-normal text-gray-500">{new Date(detailData["Date"]).toString().slice(0, 15)}</p>
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
              <p className="font-bold">{detailData["Start Time"]}</p>
              <p className="text-gray-500">{detailData["Start Station"]}</p>
              {/* <p className="text-gray-500"><span className="font-bold">AGA</span> Massira Station</p> */}
              <p className="text-gray-600 text-lg font-bold">{detailData["Pickup"]}</p>
            </div>
            <div className="flex flex-col flex-wrap p-2">
              <p className="font-bold">{detailData["End Time"]}</p>
              <p className="text-gray-500">{detailData["End Station"]}</p>
              {/* <p className="text-gray-500"><span className="font-bold">CSB</span> Wlad Zyan Station</p> */}
              <p className="text-gray-600 text-lg font-bold">{detailData["Destination"]}</p>
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

          </div>
        </div>
      </div>
    </div>
  )
}

export default TicketSummary