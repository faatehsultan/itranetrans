import React from 'react'
import Navi from 'components/navbar/navi'
import Footies from 'components/footer/footies'
import Image from "next/image";

const Noresults = () => {
    return (
        <div >
            
            <div>
                <div className="min-w-screen min-h-screen bg-red-100 flex items-center p-5 lg:p-20 overflow-hidden relative">
                    <div className="flex-1 min-h-full min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
                        <div className="w-full md:w-1/2">
                            <div className="mb-10 lg:mb-20">
                                <Image src="/logo2.png" width={180} height={120} alt="Itrane logo" />
                            </div>
                            <div className="mb-10 md:mb-20 text-gray-600 font-light">
                                <h1 className="font-black  text-3xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-red-600">oops! Nous n&lsquo;avons trouvé aucun bus</h1>
                                <p className="pt-12 text-2xl">Il n&lsquo;y a pas encore de trajet disponible le jeudi 7 avril entre ces villes.</p>

                            </div>
                            <div className="">
                                <button className="text-lg font-light outline-none focus:outline-none transform transition-all hover:scale-110 text-white ">Accueil</button>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 text-center">
                            <Image src="/errorpic.png" width={630} height={480} alt="Itrane logo" className="w-" />

                        </div>
                    </div>
                    <div className="w-64 md:w-96 h-96 md:h-full bg-red-200 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"></div>
                    <div className="w-96 h-full bg-red-200 bg-opacity-10 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform"></div>
                </div>
            </div>
            <div classNameNameNameName="mt-12 pt-12">
                
            </div>

        </div>
    )
}

export default Noresults