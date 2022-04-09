import React from 'react'

const Card = () => {
  return (
    <div className="">
        <section className="text-gray-600 body-font">
  <div className="mb-15 mx-auto md:items-center flex flex-wrap">
    <div className="px-20 rounded-lg overflow-hidden">
    </div>
    <div className="flex flex-col flex-wrap  mb-10 lg:w-4/5  lg:text-left text-center">
      <div className="flex flex-col mb-10 lg:items-start justify-center items-center">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
          </svg>
        </div>
        <div className="flex-grow ">
          <h2 className="text-gray-900 text-2xl title-font font-medium mb-3">Choisissez votre point de départ et votre destination</h2>
          <p className="leading-relaxed text-base">Vous pouvez voyager à partir de l&lsquo;une de nos dix agences dans plusieurs villes, ou vous pouvez voyager à partir de n&lsquo;importe quelle gare routière au Maroc.</p>
          
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="1 -12 64 64">
            <path d="M1.341,38.469A1.338,1.338,0,0,1,0,37.127V27.379a1.34,1.34,0,0,1,1.341-1.342,6.811,6.811,0,0,0,6.8-6.8c0-6.017-6.8-6.8-6.8-6.8A1.339,1.339,0,0,1,0,11.09V1.341A1.34,1.34,0,0,1,1.341,0H61.273a1.344,1.344,0,0,1,1.346,1.341V11.09a1.343,1.343,0,0,1-1.346,1.341,6.8,6.8,0,0,0,0,13.606,1.344,1.344,0,0,1,1.346,1.342v9.748a1.341,1.341,0,0,1-1.346,1.342Zm45.9-2.679H59.932V28.625a9.486,9.486,0,0,1,0-18.781V2.678H47.24a1.343,1.343,0,1,1-2.687,0H2.687V9.843a9.486,9.486,0,0,1,0,18.781v7.165H44.554a1.343,1.343,0,1,1,2.687,0Zm-2.687-6.017V26.757a1.341,1.341,0,1,1,2.682,0v3.015a1.341,1.341,0,0,1-2.682,0ZM17.092,27.845a1.341,1.341,0,1,1,0-2.682H38.239a1.341,1.341,0,0,1,0,2.682ZM44.554,20.74V8.7a1.341,1.341,0,1,1,2.682,0V20.74a1.341,1.341,0,1,1-2.682,0ZM17.1,20.578a1.343,1.343,0,0,1,0-2.687H38.239a1.343,1.343,0,0,1,0,2.687Zm0-7.268a1.343,1.343,0,0,1,0-2.686H38.239a1.343,1.343,0,0,1,0,2.686Z"></path>
          </svg>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-2xl title-font font-medium mb-3">Choisissez une date pour votre voyagep</h2>
          <p className="leading-relaxed text-base">Après avoir sélectionné le lieu de départ et la destination, vous aurez le choix entre plusieurs horaires à la date choisie. Vous pouvez également choisir les sièges et le nombre de passagers.  </p>
      
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-2xl title-font font-medium mb-3">Payer en ligne ou dans nos agences</h2>
          <p className="leading-relaxed text-base">Vous pouvez payer votre billet en ligne en toute sécurité avec des cartes de crédit marocaines et internationales, ou vous pouvez payer un jour avant votre voyage dans nos agences.</p>
         
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Card