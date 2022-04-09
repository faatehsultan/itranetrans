import React, { useEffect, useState } from 'react'
import AdminLayout from 'adminLayout'
import { Accordion } from 'react-bootstrap';

const detailData = [
  ["Name", "name"],
  ["Email", "email"],
  ["City", "city"],
  ["Telephone", "phone"],
  ["Pickup", "src"],
  ["Destination", "dest"],
  ["Date", "dept_date"],
  ["Start Time", "start_time"],
  ["End Time", "end_time"],
  ["Start Station", "start_station"],
  ["End Station", "end_station"],
  ["Price", "price"],
  ["Seats", "seats"],
  ["Address", "address"],
  ["State", "state"],
  ["Zip", "zip"],
]

export default function TrackBookings() {
  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/api/getAllBookings")
      .then(res => res.json())
      .then(data => {
        setBookings(data)
        setLoading(false);
      }).catch(err => {
        console.log(err)
        setLoading(false);
      });
  }, [])

  return (
    <AdminLayout isForAdmin>
      <div className="container-fluid mt-4">
        <div className="fs-2 text-center text-danger fw-bold">Track Bookings</div>
        <br />
        {!loading && <>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header><div className="fs-5 fw-bold text-danger">Bookings Via Credit Card</div></Accordion.Header>
              <Accordion.Body>
                <table className="table table-striped table-bordered table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      {detailData.map((detail, index) => (
                        <th scope="col" key={index}>{detail[0]}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.filter(i => i.payment_mode === "card").map((booking, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        {detailData.map((detail, index) => (
                          <td key={index}>{booking[detail[1]]}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header><div className="fs-5 fw-bold text-danger">Bookings Via Cash Payment</div></Accordion.Header>
              <Accordion.Body>
                <table className="table table-striped table-bordered table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      {detailData.map((detail, index) => (
                        <th scope="col" key={index}>{detail[0]}</th>
                      ))}
                      <th scope="col">Paid</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.filter(i => i.payment_mode === "cash").map((booking, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        {detailData.map((detail, index) => (
                          <td key={index}>{booking[detail[1]]}</td>
                        ))}
                        <td><PaidCheckBox booking_id={booking["booking_id"]} isPaid={booking["paid_if_cash"]} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </>}
      </div>
    </AdminLayout>
  )
}


const PaidCheckBox = ({ booking_id, isPaid }) => {
  const [isChecked, setIsChecked] = useState(isPaid);

  const handleToggle = async (e) => {
    setIsChecked(e.target.checked);
    let res = await fetch("/api/toggleBookingPaid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: booking_id
    });
  }

  return (
    <input type="checkbox" className="form-check-input" checked={isChecked} id={booking_id} onChange={handleToggle} />
  )
}