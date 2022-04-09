import React, { useState } from 'react'
import SeatPicker from 'react-seat-picker'

export default function Seatpick({ seatsData, selectedSeats, setSelectedSeats }) {

  const makeSeatsObjArr = () => {
    const seatsObjArr = seatsData.map(s => ({ id: s.seat_no, number: s.seat_no, isReserved: s.booked, isSelected: selectedSeats.includes(s.seat_no) }))
    const chunkSize = 4;
    const seatsObjArrChunked = [];
    for (let i = 0; i < seatsObjArr.length; i += chunkSize) {
      seatsObjArrChunked.push(seatsObjArr.slice(i, i + chunkSize));
    }
    for (let i = 0; i < seatsObjArrChunked.length; i++) {
      // insert null in center of seatsObjArrChunked[i]
      if (seatsObjArrChunked[i].length >= chunkSize) {
        seatsObjArrChunked[i].splice(2, 0, null);
      }
    }
    return seatsObjArrChunked
  }

  const addSeatCallback = ({ row, number, id }, addCb) => {
    setSelectedSeats([...selectedSeats, number]);
    addCb(row, number, id, "")
  }

  const removeSeatCallback = ({ row, number, id }, removeCb) => {
    setSelectedSeats(selectedSeats.filter(seat => seat !== number));
    removeCb(row, number, "")
  }

  return (
    <div>
      <div className='' >
        {seatsData && <SeatPicker className=''
          addSeatCallback={addSeatCallback}
          removeSeatCallback={removeSeatCallback}
          rows={makeSeatsObjArr()}
          maxReservableSeats={seatsData.length}
          alpha
          visible
          selectedByDefault
        />}
      </div>
    </div>
  )
}