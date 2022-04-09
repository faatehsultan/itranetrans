import React, { useEffect, useState } from 'react'
import AdminLayout from 'adminLayout'
import Link from 'next/link';

const detailData = [
  ["ID", "id"],
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

export default function TrackBookings() {
  const [schedules, setSchedules] = useState([])
  const [loading, setLoading] = useState(true);

  const handleDeleteSch = (id) => {
    fetch(`/api/deleteSchedule`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: id
    }).then(res => {
      if (res.status === 200) {
        reloadData();
      }
    })
  }

  const reloadData = () => {
    setLoading(true);
    fetch("/api/getAllSchedules")
      .then(res => res.json())
      .then(data => {
        setSchedules(data)
        setLoading(false);
      }).catch(err => {
        console.log(err)
        setLoading(false);
      });
  }

  useEffect(() => {
    reloadData();
  }, [])

  return (
    <AdminLayout isForAdmin>
      <div className="container-fluid mt-4">
        <div className="row align-items-center">
          <div className="col-3"></div>
          <div className="col-6">
            <div className="fs-2 text-center text-danger fw-bold">Manage Schedules</div>
          </div>
          <div className="col-3 d-flex justify-content-end">
            <Link href={"/admin/manage-schedules/add-schedule"}>
              <a className="btn btn-danger">Add New Schedule <i className="bi bi-plus-circle ms-2"></i></a>
            </Link>
          </div>
        </div>
        <br />
        <div className="fs-5 fw-bold text-danger">Currently Listed Schedules</div>
        <br />
        {!loading && <>
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                {detailData.map((detail, index) => (
                  <th scope="col" key={index}>{detail[0]}</th>
                ))}
                <th></th>
                {/* <th></th> */}
              </tr>
            </thead>
            <tbody>
              {schedules.map((schedule, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  {detailData.map((detail, index) => (
                    <td key={index}>{schedule[detail[1]]}</td>
                  ))}
                  <td>
                    <div className='btn rounded-circle p-0' style={{ cursor: "pointer" }}
                      onClick={() => {
                        handleDeleteSch(schedule.id)
                      }}
                    >
                      <i title='delete' className="bi bi-trash text-danger fs-5"></i>
                    </div>
                  </td>
                  {/* <td>
                    <div className='btn rounded-circle p-0' style={{ cursor: "pointer" }}
                      onClick={() => {
                        // handle here
                      }}
                    >
                      <i title='update' className="bi bi-pencil text-danger fs-5"></i>
                    </div>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </>}
      </div>
    </AdminLayout>
  )
}
