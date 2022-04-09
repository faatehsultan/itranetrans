import React, { useState, useEffect } from 'react'
import Navi from 'components/navbar/navi'
import Footies from 'components/footer/footies'
import Steps from 'components/ticket/steps'
import Userinfo from 'components/seat/userinfo'
import Userinfotest from 'components/seat/userinfotest'
import TopTripBanner from 'components/toptripbanner'

const BookingInfo = () => {
  return (
    <div>
     
      <TopTripBanner />
      <Steps />
      <div className='flex justify-center items-center py-20 m-12'>
        <Userinfotest  />
      </div>
      
    </div>
  )
}

export default BookingInfo