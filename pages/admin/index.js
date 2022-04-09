import React, { useEffect, useState } from 'react'
import AdminLayout from 'adminLayout'
import Link from 'next/link'

export default function Admin() {
  return (
    <AdminLayout isForAdmin>
      <div className="flex justify-center content-center px-20 gap-10 pt-40">
        <Link href="/admin/track-bookings">
          <a className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Track Bookings
          </a>
        </Link>
        <Link href="/admin/manage-schedules">
          <a className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Manage Schedules
          </a>
        </Link>
        <Link href="/admin/book-inperson">
          <a className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Book In Person
          </a>
        </Link>
      </div>
    </AdminLayout>
  )
}
