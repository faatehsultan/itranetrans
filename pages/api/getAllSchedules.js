import { queryDB } from './db'

export default async function handler(req, res) {
  let qResAll = await queryDB(`SELECT * from schedule`);
  let qResSeats = await queryDB(`SELECT count(*) as no_of_seats, schedule_id FROM seats_schedule GROUP by seats_schedule.schedule_id;`);
  qResAll = qResAll.map(i => {
    i.no_of_seats = qResSeats.filter(j => j.schedule_id === i.id)[0].no_of_seats;
    return i;
  })
  res.status(200).json(qResAll)
}
