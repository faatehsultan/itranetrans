import React, { useEffect, useState } from 'react'
import Ticket from '/components/ticket/ticket'
import Navbar from 'components/navbar/navi'
import Footer from 'components/footer/footies'
import Steps from 'components/ticket/steps'
import { useRouter } from 'next/router'
import TopTripBanner from 'components/toptripbanner'

const Buyticket = () => {
  const router = useRouter()
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    if (router.query.src) {
      fetch(`/api/getSchedule?src=${router.query.src}&dest=${router.query.dest}&dept_date=${router.query.dept_date}`)
        .then(res => res.json())
        .then(data => {
          if (data.length > 0) {
            setTickets(data)
          } else {
            router.push("/noresult")
          }
        })
        .catch(err => {
          console.log(err)
        })
    }

    // print query params
    console.log(router.query)
  }, [router, router.query])

  return (
    <div>
      
      <TopTripBanner srcProp={router.query.src} destProp={router.query.dest} />
      <Steps />
      {tickets && tickets.length > 0 && <Ticket ticketList={tickets} />}

      
    </div>
  )
}

export default Buyticket