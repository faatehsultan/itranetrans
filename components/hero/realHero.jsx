import React, { useState } from 'react'
import Ticketbuy from './ticketbuy';
import Link from "next/link"
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

var curr = new Date();
curr.setDate(curr.getDate() + 3);
var date = curr.toISOString().substr(0, 10);

export const Testi = () => {
  const [src, setSrc] = useState('');
  const [dest, setDest] = useState('');
  const [deptData, setDeptDate] = useState('');
  const router = useRouter();

  return (
    <div className="relative">
      <img
        src="https://i.ibb.co/mcVVxGs/imageedit-9-8509202921.png"
        className="absolute inset-0 object-fit w-full h-full blur-sm"
        alt=""
      />
      <div className="relative bg-opacity-75 bg-deep-orange-accent-700">
        <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <motion.div initial="hidden" animate="visible" variants={{
  hidden: {
    scale: .8,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: .4
    }
  },
}}>
          <div className="flex flex-col items-center justify-between xl:flex-row">
            
          
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              Réservez votre billet avec Itrane facilement et en toute sécurité <br className="hidden md:block" />

              </h2>
              <p className="max-w-xl mb-4 text-base text-white md:text-lg">
              Réservez vos billets de bus au meilleur prix
              </p>


            </div>
            <div className="w-full max-w-2xl h- xl:px-8 xl:w-2/2">
              <section className="w-full  max-w-2xl h px-6 py-4 mx-auto bg-white rounded-xl shadow-md  hover:shadow-xl hover:shadow-orange-100">
                <h2 className="text-3xl text-center title-font font-semibold text-transparent bg-clip-text m-6 bg-gradient-to-br from-yellow-500 to-red-600 ">Choisissez votre billet</h2>



                <div className="mt-10 ">
                  <div className="items-center -mx-3 md:flex">
                    <div className="z-50 w-full mx-2">
                      <label className="  block mb-2 text-sm font-medium text-gray-600 0:text-gray-200">Point de départ</label>

                      <Ticketbuy setParData={setSrc} defaultIndex={0} />
                    </div>

                    <div className="z-40 w-full mx-2 mt-4 md:mt-0">
                      <label className="block mb-2 text-sm font-medium text-gray-600 0:text-gray-200">Destination</label>

                      <Ticketbuy setParData={setDest} defaultIndex={4} />
                    </div>
                  </div>

                  <div className="z-20 w-full mt-8">
                    <label className="block mb-2 text-sm font-medium text-gray-600 0:text-gray-200">Date de départ</label>
                    <div className="">

                      <input className="relative w-full h-10 px-2 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 sm:text-sm overflow-hidden" type="date" id="start" defaultValue={date} name="trip-start" min="2022-01-01" max="2022-12-31"
                        value={deptData} onChange={(e) => setDeptDate(e.target.value)} />
                    </div>

                  </div>

                  <div className="flex justify-center mt-6 z-10">
                    <button className="py-3 px-4 mb-3 mt-3 text-white"
                      onClick={() => {
                        if (src && dest && deptData) {
                          router.push(`/buyticket?src=${src}&dest=${dest}&dept_date=${deptData}`)
                        }
                      }}
                    >
                     Réserver votre billet
                    </button>
                  </div>
                </div>
              </section>
            </div>
           
          </div>
          </motion.div>
        </div>
        
      </div>
    </div>
  );
};

export default Testi
