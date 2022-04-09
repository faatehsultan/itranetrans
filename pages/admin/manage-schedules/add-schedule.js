import React, { useEffect, useState } from 'react'
import AdminLayout from 'adminLayout'
import { destinations } from '../../../constants'
import { useRouter } from 'next/router'

const detailData = [
  ["Pickup", "src"],
  ["Destination", "dest"],
  ["Start Time", "start_time"],
  ["End Time", "end_time"],
  ["Start Station", "start_station"],
  ["End Station", "end_station"],
  ["Price", "price"],
  ["Date", "dept_date"],
  ["No. of Seats", "no_of_seats"],
]

const generateDestinationsOptions = (isPickup) => (
  <>
    <option value="">--- Select {isPickup ? "Pickup" : "Destination"} ---</option>
    {destinations.map((destination, index) => (
      <option key={index} value={destination.name}>{destination.name}</option>
    ))}
  </>
)

const defaultValues = {
  src: "",
  dest: "",
  start_time: "",
  end_time: "",
  start_station: "",
  end_station: "",
  price: 0,
  dept_date: "",
  no_of_seats: 0,
}

export default function TrackBookings() {
  const [schedule, setSchedule] = useState(defaultValues)
  const [isError, setIsError] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter();

  const validateSchedule = () => {
    let isValid = true
    for (let i = 0; i < detailData.length; i++) {
      if (schedule[detailData[i][1]] === "") {
        isValid = false
      }
    }
    if (schedule.src === schedule.dest) {
      isValid = false
    }
    return isValid
  }

  const handleSubmit = () => {
    if (validateSchedule()) {
      setLoading(true);
      fetch("/api/addNewSchedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(schedule)
      }).then(res => {
        if (res.status === 200) {
          setIsSuccess(true)
          setIsError(false)
          setSchedule(defaultValues);
          setLoading(false);
        } else {
          setIsError(true)
          setIsSuccess(false)
          setSchedule(defaultValues);
          setLoading(false);
        }
      })
    } else {
      setIsError(true)
    }
  }

  return (
    <AdminLayout isForAdmin>
      <div className="container mt-4">
        {isSuccess && <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">Success!</h4>
          <p>Your schedule has been added successfully.</p>
          <hr />
          <p className="mb-0">
            <button className="btn btn-primary" onClick={() => { router.push("/admin/manage-schedules") }}>Go Back To Schedules</button>
          </p>
        </div>}
        {isError && <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Error!</h4>
          <p>Your schedule cannot be added.</p>
          <hr />
          <p className="mb-0">
            <button className="btn btn-primary" onClick={() => { router.push("/admin/manage-schedules") }}>Go Back To Schedules</button>
          </p>
        </div>}

        <div className="fs-2 text-center text-danger fw-bold">Manage Schedules/Add New</div>
        <br />
        {/* form to add */}
        <form className='row' onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}>
          <div className="form-group col-12 col-sm-6 col-md-4">
            <label>Pickup</label>
            <select className="form-select"
              value={schedule.src}
              onChange={(e) => setSchedule({ ...schedule, src: e.target.value })}
              required
            >
              {generateDestinationsOptions(true)}
            </select>
          </div>
          <div className="form-group col-12 col-sm-6 col-md-4">
            <label>Destination</label>
            <select className="form-select"
              value={schedule.dest}
              onChange={(e) => setSchedule({ ...schedule, dest: e.target.value })}
              required
            >
              {generateDestinationsOptions(false)}
            </select>
          </div>
          <div className="form-group col-12 col-sm-6 col-md-4">
            <label>Start Time</label>
            <input type="time" className="form-control"
              value={schedule.start_time}
              onChange={(e) => setSchedule({ ...schedule, start_time: e.target.value })}
              required
            />
          </div>
          <div className="form-group col-12 col-sm-6 col-md-4">
            <label>End Time</label>
            <input type="time" className="form-control"
              value={schedule.end_time}
              onChange={(e) => setSchedule({ ...schedule, end_time: e.target.value })}
              required
            />
          </div>
          <div className="form-group col-12 col-sm-6 col-md-4">
            <label>Start Station</label>
            <input type="text" className="form-control"
              value={schedule.start_station}
              onChange={(e) => setSchedule({ ...schedule, start_station: e.target.value })}
              required
            />
          </div>
          <div className="form-group col-12 col-sm-6 col-md-4">
            <label>End Station</label>
            <input type="text" className="form-control"
              value={schedule.end_station}
              onChange={(e) => setSchedule({ ...schedule, end_station: e.target.value })}
              required
            />
          </div>
          <div className="form-group col-12 col-sm-6 col-md-4">
            <label>Price</label>
            <input type="number" className="form-control"
              value={schedule.price}
              onChange={(e) => setSchedule({ ...schedule, price: e.target.value })}
              required
            />
          </div>
          <div className="form-group col-12 col-sm-6 col-md-4">
            <label>Date</label>
            <input type="date" className="form-control"
              value={schedule.dept_date}
              onChange={(e) => setSchedule({ ...schedule, dept_date: e.target.value })}
              required
            />
          </div>
          <div className="form-group col-12 col-sm-6 col-md-4">
            <label>No. of Seats</label>
            <input type="number" className="form-control"
              value={schedule.no_of_seats}
              onChange={(e) => setSchedule({ ...schedule, no_of_seats: e.target.value })}
              required
            />
          </div>
          <div className="form-group col-12 mt-5 d-flex justify-content-center align-items-center">
            <button className="btn btn-danger"
              disabled={loading}
              type='submit'
            >{
                loading ?
                  // spinner here
                  <div className="spinner-border text-light" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                  :
                  "Add Schedule"
              }</button>
          </div>
        </form>
      </div>
    </AdminLayout>
  )
}
