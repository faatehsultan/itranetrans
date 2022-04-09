import React from 'react'
import Link from 'next/link'

const Features = () => {
  return (
    <div>
        <section className="text-gray-600 body-font ">
  <div className="container  px-5 py-24 mb-12 mx-auto">
    <div className="hover:rounded-md hover:shadow-md py-12 text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-transparent bg-clip-text mb-4 bg-gradient-to-br from-yellow-500 to-red-600">Réservez votre billet de chez vous pour le prix le plus bas !</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Cherchez, comparez et achetez votre billet de bus en espèces ou avec votre carte de crédit aux prix les plus bas et avec le meilleur service.</p>
    </div>
    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <div className="p-2 hover:rounded-md hover:shadow-md hover:text-orange-600 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-orange-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Voyages confortables et en toute sécurité</span>
        </div>
      </div>
      <div className="p-2 hover:rounded-md hover:shadow-md hover:text-orange-600 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-orange-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Prix bas !</span>
        </div>
      </div>
      <div className="p-2 hover:rounded-md hover:shadow-md hover:text-orange-600 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-orange-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Agences multiples à travers le Maroc</span>
        </div>
      </div>
      <div className="p-2 hover:rounded-md hover:shadow-md hover:text-orange-600 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-orange-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Options de paiement sécurisées et protégées</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full hover:rounded-md hover:shadow-md hover:text-orange-600">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-orange-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Multiples lignes de voyage</span>
        </div>
      </div>
      <div className="p-2 hover:rounded-md hover:shadow-md hover:text-orange-600 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-orange-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Service clientèle supérieur</span>
        </div>
      </div>
    </div>
    <Link href='/' passHref>
    <button className="flex mx-auto mt-16 text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg">Réserver votre billet</button>
    </Link>
  </div>
</section>
    </div>
  )
}

export default Features