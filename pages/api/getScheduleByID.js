import { queryDB } from './db'

export default async function handler(req, res) {
  const { schedule_id } = req.query
  let qRes = await queryDB(`SELECT * FROM schedule where id = ${schedule_id}`);
  res.status(200).json(qRes)
}
