
import Image from "next/image";
import React, { useState } from 'react';
import Link from "next/link"

export default function Navi () {

  const [state, setState] = useState(false)

  // Replace javascript:void(0) path with your path
  const navigation = [
      { title: "Accueil", path: "/." },
      { title: "Qui sommes nous ?", path: "/about" },
      { title: "FAQ", path: "/faq" },
      { title: "Contact", path: "/contact" }
  ]

  return (
    <div className="0">
<nav className="bg-white rounded-md shadow-md 0 w-full border-b md:border-0 ">
          <div className=" items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
              <div className="flex items-center justify-between  md:block">
                    <a href="javascript:void(0)">
                        <Image
                            src="/logo2.png"
                            width={120} 
                            height={80}
                            alt="Itrane logo"
                        />
                    </a>
                  <div className="md:hidden">
                      <button className="text-white outline-none p-2 rounded-md focus:border-gray-100 focus:border"
                          onClick={() => setState(!state)}
                      >
                          {
                              state ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                              ) : (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                  </svg>
                              )
                          }
                      </button>
                  </div>
              </div>
              <div className={`flex-1 justify-self-center  pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ state ? 'block' : 'hidden'}`}>
                  <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                      {
                          navigation.map((item, idx) => {
                              return (
                                <li key={idx} className="text-gray-700 hover:rounded-md hover:shadow-md hover:text-orange-600">
                                    <Link href={item.path} passHref>
                                        { item.title }
                                    </Link>
                                </li>
                              )
                          })
                      }
                  </ul>
              </div>
              <div className="hidden md:inline-block">
                  <Link href='/buyticket' passHref>
                <button className="py-3 px-4  text-white">
                Réserver votre billet
                </button>
                </Link>
              </div>
          </div>
      </nav>
    </div>
      
  )
}