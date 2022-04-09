import { queryDB } from './db'

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    {
      let schedule_id = req.body;

      let qRes1 = await queryDB(`DELETE FROM schedule WHERE schedule.id = ${schedule_id};`);
      let qRes2 = await queryDB(`DELETE FROM seats_schedule WHERE seats_schedule.schedule_id = ${schedule_id};`);

      if (qRes1 && qRes2) {
        res.status(200).json("success");
        return;
      } else {
        res.status(500).json("error occurred")
        return;
      }
    }
  }
}
