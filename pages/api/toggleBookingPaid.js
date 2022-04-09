import { queryDB } from './db'
import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    {
      let qRes1 = await queryDB(`SELECT paid_if_cash FROM bookings WHERE bookings.id = ${req.body};`)
      if (qRes1[0].paid_if_cash === 1) {
        let qRes2 = await queryDB(`UPDATE bookings SET paid_if_cash = 0 WHERE bookings.id = ${req.body};`);
      } else {
        let qRes2 = await queryDB(`UPDATE bookings SET paid_if_cash = 1 WHERE bookings.id = ${req.body};`);
      }
      return res.status(200);
    }
  }
}
