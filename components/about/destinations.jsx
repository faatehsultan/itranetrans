import React from 'react'
import Link from 'next/link'

const Desti = () => {
  return (
    <div>
        <section className="text-gray-600 body-font flex justify-center text-center items-center">
  <div className="container px-5  pb-24 lg:ml-12 mx-auto">
    <div className="text-center ml-12 mb-20">
      <h1 className="font-semibold mt-16 h-16 sm:text-5xl text-center title-font text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-orange-600 mb-4">Nous voyageons vers toutes les destinations !</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Nos bus circulent dans toutes les gares routières du Maroc, de Tanger à Boujdour !</p>
    </div>
    <div className="flex w-screen items-center justify-center flex-wrap  lg:ml-12 lg:pl-12 lg:pb-12 -m-4">
      <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
        <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">Nord</h2>
        <nav className="flex flex-col sm:items-start sm:text-left w-full text-center justify-center items-center -mb-1 space-y-2.5">
          <a>
            <span className="bg-orange-100 text-orange-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Tangier
          </a>
          <a>
            <span className="bg-orange-100 text-orange-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Tetouan
          </a>
          <a>
            <span className="bg-orange-100 text-orange-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Ouejda
          </a>
          <a>
            <span className="bg-orange-100 text-orange-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Hoceima
          </a>
          <a>
            <span className="bg-orange-100 text-orange-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Larach
          </a>
        </nav>
      </div>
      <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
        <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">Centre</h2>
        <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
          <a>
            <span className="bg-orange-100 text-orange-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Casablanca
          </a>
          <a>
            <span className="bg-orange-100 text-orange-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Rabat
          </a>
          <a>
            <span className="bg-orange-100 text-orange-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Fes
          </a>
          <a>
            <span className="bg-orange-100 text-orange-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Meknes
          </a>
          <a>
            <span className="bg-orange-100 text-orange-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Kenitra
          </a>
        </nav>
      </div>
      <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
        <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">Sud</h2>
        <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
          <a>
            <span className="bg-orange-100 text-orange-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Marrakech
          </a>
          <a>
            <span className="bg-orange-100 text-orange-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Agadir
          </a>
          <a>
            <span className="bg-orange-100 text-orange-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Laayoune
          </a>
          <a>
            <span className="bg-orange-100 text-orange-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Dakhla
          </a>
          <a>
            <span className="bg-orange-100 text-orange-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Boujdour
          </a>
        </nav>
      </div>
      <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
        <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">Est</h2>
        <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
          <a>
            <span className="bg-orange-100 text-orange-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>BeniMellal
          </a>
          <a>
            <span className="bg-orange-100 text-orange-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Ouarzazat
          </a>
          <a>
            <span className="bg-orange-100 text-orange-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Zagoura
          </a>
          <a>
            <span className="bg-orange-100 text-orange-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Taza
          </a>
          <a>
            <span className="bg-orange-100 text-orange-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Taza
          </a>
        </nav>
      </div>
    </div>
    <div className="py-12 flex justify-center ">
    <Link href='/' passHref>
                <button className="py-3 px-4  text-white">
                Réserver votre billet
                </button>
                </Link>
    </div>
    
  </div>
</section>
    </div>
  )
}

export default Desti