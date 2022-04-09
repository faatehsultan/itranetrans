import { queryDB } from './db'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    {
      let schedule = req.body;

      let qRes1 = await queryDB(`INSERT INTO schedule(src, dest, start_time, end_time, start_station, end_station, price, dept_date) VALUES ('${schedule.src}','${schedule.dest}','${schedule.start_time}','${schedule.end_time}','${schedule.start_station}','${schedule.end_station}','${schedule.price}','${schedule.dept_date}')`);

      if (qRes1 && qRes1.insertId) {
        for (let i = 0; i < schedule.no_of_seats; i++) {
          let qRes2 = await queryDB(`INSERT INTO seats_schedule(seat_no, schedule_id) VALUES (${i + 1}, ${qRes1.insertId});`);
        }

        res.status(200).json("success");
        return;
      } else {
        res.status(500).json("error occurred")
        return;
      }
    }
  }
}
