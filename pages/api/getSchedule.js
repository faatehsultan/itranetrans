import { queryDB } from './db'

export default async function handler(req, res) {
  const { src, dest, dept_date } = req.query
  let qRes = await queryDB(`SELECT * FROM schedule where src = '${src}' and dest = '${dest}' and dept_date = '${dept_date}'`);
  res.status(200).json(qRes)
}
