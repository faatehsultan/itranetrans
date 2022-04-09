import { queryDB } from './db'

export default async function handler(req, res) {
  const { schedule_id } = req.query
  let qResAll = await queryDB(`SELECT * FROM seats_schedule where schedule_id = ${schedule_id};`);
  let qResBooked = await queryDB(`SELECT booking_seats.seat_no FROM seats_schedule join booking_seats on booking_seats.seat_no=seats_schedule.seat_no join bookings on booking_seats.booking_id=bookings.id where bookings.schedule_id = ${schedule_id};`);
  let finalSet = qResAll.map(seat => {
    let booked = qResBooked.find(bookedSeat => bookedSeat.seat_no === seat.seat_no)
    return {
      seat_no: seat.seat_no,
      booked: booked ? true : false
    }
  })
  res.status(200).json(finalSet)
}
