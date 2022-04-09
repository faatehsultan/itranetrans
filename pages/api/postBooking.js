import { queryDB } from './db'
import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    {
      let body = JSON.parse(req.body)
      let user = body.userInfoObj;
      let seats = body.selectedSeats;
      let schedule_id = body.schedule_id;

      let qRes1 = await queryDB(
        `INSERT INTO bookings (schedule_id, name, email, address_1, address_2, city, state, zip, country, phone, deliver_info, payment_mode) VALUES (${schedule_id},'${user.name}','${user.email}','${user.address1}','${user.address2}','${user.city}','${user.state}','${user.zip}','${user.country}','${user.phone}','${user.deliveryInfo}', '${body.paymentMode}');`
      );

      if (qRes1 && qRes1.insertId) {
        for (let i = 0; i < seats.length; i++) {
          let qRes2 = await queryDB(`INSERT INTO booking_seats(seat_no, booking_id) VALUES (${seats[i]}, ${qRes1.insertId});`);
        }
        
        // now mail the ticket
        var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: '', // TODO: ADD YOUR EMAIL HERE
            pass: '' // TODO: ADD YOUR PASSWORD HERE
          }
        });

        let sch = (await queryDB(`SELECT * FROM schedule where id = ${schedule_id}`))[0];

        console.log(sch)

        var mailOptions = {
          from: 'fs.extra000@gmail.com',
          to: 'fs.extra000@gmail.com',
          subject: 'Ticket Confirmation',
          text: `
          Name: ${user.name}
          Email: ${user.email}
          Address: ${user.address1} ${user.address2}
          City: ${user.city}
          State: ${user.state}
          Zip: ${user.zip}
          Country: ${user.country}
          Phone: ${user.phone}
          Delivery Info: ${user.deliveryInfo}
          Payment Mode: ${body.paymentMode}
          Seats: ${seats.join(', ')}          
          Pickup": ${sch.src},
          Destination": ${sch.dest},
          Date": ${sch.dept_date},
          Start Time": ${sch.start_time},
          End Time": ${sch.end_time},
          Start Station": ${sch.start_station},
          End Station": ${sch.end_station},
          Price": ${sch.price},
          `
        };

        console.log(mailOptions)

        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json("success");
          }
        });
        return;
      } else {
        res.status(500).json("error occurred")
        return;
      }
    }
  }
}
