import React from 'react'
import Image from 'next/image'

const Ticketskeleton = () => {
  return (
    <div>
        <div>
      <div className="w-screen animate-pulse flex items-center justify-center ">
        <div className="max-w-2/3 w-2/3 border border-slate-400 bg-white  rounded-lg overflow-hidden shadow-lg">
          <div className="flex flex-row items-baseline flex-nowrap bg-slate-100 p-2">
            <h1 className="ml-2 py-2 uppercase font-bold text-slate-100">departure</h1>
            <p className=" text-gray-500"></p>
          </div>
          <div className="mt-2  flex justify-start bg-white p-2">
            <div className="flex mx-2 ml-6 h8 px-2 flex-row items-baseline rounded-full bg-slate-200 p-1">
              <p className="font-normal h-6 w-20 text-sm ml-1 text-slate-300"></p>
            </div>
          </div>
          <div className="mt-2 flex sm:flex-row mx-6 sm:justify-between flex-wrap ">
            <div className="flex flex-row place-items-center p-2">
              <Image src="/log-slate.png"
                width={120}
                height={80}
                alt="Itrane logo" className="w-10 rounded-xl h-10" />
              <div className="flex  flex-col ml-2">
                <p className="text-xs  h-5 w-18 bg-slate-200 text-slate-200 font-bold">Itrane Voyage</p>
                <div className=" h-5 w-18 my-1 rounded bg-slate-200 "></div>
                <div className="text-xs h-5 w-18 rounded bg-slate-200 text-gray-500"></div>
              </div>
            </div>

            <div className="flex flex-col  pb-4 flex-wrap p-2">
              <p className="font-bold  h-5 w-32 rounded bg-slate-200"></p>
              <p className="text-gray-500 my-2 h-5 w-32 rounded bg-slate-200"> </p>
              <p className="text-gray-600 mr-12 h-5 w-32 rounded bg-slate-200 text-lg font-bold"></p>
            </div>
            <div className="flex flex-col  pb-4 flex-wrap p-2">
              <p className="font-bold  h-5 w-32 rounded bg-slate-200"></p>
              <p className="text-gray-500 my-2 h-5 w-32 rounded bg-slate-200"> </p>
              <p className="text-gray-600 mr-12 h-5 w-32 rounded bg-slate-200 text-lg font-bold"></p>
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
                <p className="text-slate-100">Discounted Ticket</p>
                <p className="  font-bold h-10 my-2 w-26 rounded bg-slate-200 text-2xl"></p>
                <p className="text-xs text-slate-100">Price per adult</p>
              </div >
              <div className="w-32 h-11 mt-6 rounded flex border-solid border text-white bg-slate-300 mx-2 justify-center place-items-center"><div className=""
                onClick={() => {
                  router.push('/seats?schedule_id=' + ticketDetails.id)
                }}
              >Book</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Ticketskeleton