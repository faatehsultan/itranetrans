import React, { useState, useEffect } from 'react'
import Seatpick from 'components/seat/seatpick'
import Navi from 'components/navbar/navi'
import Footies from 'components/footer/footies'
import Steps from 'components/ticket/steps'
import { useRouter } from 'next/router'
import TopTripBanner from 'components/toptripbanner'

const Seats = () => {
  const router = useRouter();
  const [seatsData, setSeatsData] = useState([])
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (router.query.schedule_id) {
      setLoading(true)
      fetch(`/api/getSeatsForSchedule?schedule_id=${router.query.schedule_id}`)
        .then(res => res.json())
        .then(data => {
          setSeatsData(data)
          setLoading(false)
        })
    }
  }, [router.query.schedule_id]);

  return (
    <div>
     
      <TopTripBanner />
      <Steps />
      {loading ?
        "Loading..." :
        <div className='flex flex-col justify-center items-center gap-10 py-20'>
          <Seatpick seatsData={seatsData} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />
          <button
            onClick={() => {
              router.push(`/bookinginfo?schedule_id=${router.query.schedule_id}&selectedSeats=${selectedSeats.join(",")}`)
            }}
          >Continue</button>
        </div>}
      
    </div>
  )
}

export default Seats