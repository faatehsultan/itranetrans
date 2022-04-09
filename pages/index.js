
require('dotenv').config()

import FinalCard from 'components/card/finalCard'
import Features from 'components/card/features'
import Testi from 'components/hero/realHero'
import Testimo from 'components/testimonial/testimonial'




export default function Home() {
  8
  return (
    <div>
      
      <Testi />
      <h2 className="font-semibold mt-16 pt-12 sm:text-5xl text-center title-font text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-red-600 mb-14">Get Your Ticket in 3 Simple Steps</h2>
      <FinalCard />
      <Features />
      <Testimo />
      


    </div>

  )
}
