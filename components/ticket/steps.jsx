import React, { useState, useEffect } from "react"
import ChevronDots from "components/ticket/stepsmethod"
import { useRouter } from 'next/router'

const stepNoAndPath = {
  "/": 1,
  "/buyticket": 2,
  "/seats": 3,
  "/bookinginfo": 4,
  "/confirmation": 5
}

function Steps() {
  const [currentStep, setCurrentStep] = useState(3)
  const router = useRouter();

  useEffect(() => {
    setCurrentStep(stepNoAndPath[router.pathname])
  }, [router])

  return (
    <div className="pt-12">
      <div className="w-1/2 mx-auto">
        <ChevronDots
          steps={["Search", "Trip", "Seat", "Booking Info", "Confirmation"]}
          currentStep={currentStep}
        />
      </div>
    </div>
  )
}

export default Steps