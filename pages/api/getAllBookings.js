import { queryDB } from './db'

export default async function handler(req, res) {
  let qResAll = await queryDB(`select DISTINCT bookings.id as booking_id, schedule_id , name , email , concat(concat(address_1, ' '), address_2) as address, city , state , zip , country, phone , deliver_info , payment_mode , src, dest, start_time, end_time, start_station, end_station, price, dept_date, paid_if_cash from bookings join booking_seats on bookings.id=booking_seats.booking_id join schedule on schedule.id=bookings.schedule_id WHERE bookings.payment_mode in ("cash", "card");`);
  let qResSeats = await queryDB(`select * from booking_seats`);
  let allSeats = {};
  qResSeats.map(i => i.booking_id).forEach(i => {
    allSeats[i] = qResSeats.filter(j => j.booking_id === i).map(j => j.seat_no).join(",")
  });
  res.status(200).json(
    qResAll.map(i => {
      i.seats = allSeats[i.booking_id];
      return i;
    }
    ))
}
