import React, { useState, useRef } from 'react'
import { useRouter } from 'next/router';
import PaymentComponent from 'components/paymentcomponent';

const Userinfotest = () => {
  const router = useRouter();
  const formRef = useRef(null);

  const handleConfirmTicket = async (paymentMode) => {
    let res = await fetch("/api/postBooking", {
      method: "POST",
      body: JSON.stringify({
        userInfoObj: { ...user, name: user.first_name + " " + user.last_name },
        selectedSeats: router.query.selectedSeats.split(",").map(i => parseInt(i)),
        schedule_id: router.query.schedule_id,
        paymentMode
      })
    })
    if (res.status === 200) {
      router.push(`/confirmation?schedule_id=${router.query.schedule_id}&selectedSeats=${router.query.selectedSeats}&userInfoObj=${JSON.stringify({ ...user, name: user.first_name + " " + user.last_name })}&payment_mode=${paymentMode}`)
    } else {
      // failure
    }
  }

  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    street_address: '',
    city: '',
    state: '',
    zip: '',
  });

  return (
    <div>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-2xl  font-medium leading-6 text-gray-900">Personal Formation</h3>
              <p className="mt-1 pt-3 pr-12 text-sm text-gray-600">
                You will recieve your ticket using your email or phone number.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div
            >
              <htmlForm action="#" method="POST">
                <div className="border border-orange-300 shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-slate-100  sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">First name</label>
                        <input type="text" name="name" id="name" value={user.first_name} onChange={e => setUser({ ...user, first_name: e.target.value })} autoComplete="given-name" className="mt-1 p-2 focus:ring-indigo-500 border focus:border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-red-100 rounded-md" />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last name</label>
                        <input type="text" name="last_name" id="last_name" autoComplete="family-name" className="mt-1 p-2 focus:ring-red-500 border focus:border-red-500 block w-full shadow-sm sm:text-sm border-red-100 rounded-md" value={user.last_name} onChange={e => setUser({ ...user, last_name: e.target.value })} />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">Email address</label>
                        <input type="email" name="email_address" id="email_address" value={user.email}
                          onChange={e => setUser({ ...user, email: e.target.value })} autoComplete="email" className="mt-1 p-2 focus:ring-indigo-500 border focus:border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-red-100 rounded-md" />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input type="tel" name="phone" id="phone" autoComplete="tel" placeholder=""
                          value={user.phone}
                          onChange={e => setUser({ ...user, phone: e.target.value })} className="mt-1 p-2 focus:ring-red-500 border focus:border-red-500 block w-full shadow-sm sm:text-sm border-red-100 rounded-md" />
                      </div>


                      <div className="col-span-6">
                        <label htmlFor="street_address" className="block text-sm font-medium text-gray-700">Street address</label>
                        <input type="text" name="street_address" id="street_address" value={user.address1}
                          onChange={e => setUser({ ...user, address1: e.target.value })} autoComplete="street-address" className="mt-1 p-2 focus:ring-red-500 border focus:border-red-500 block w-full shadow-sm sm:text-sm border-red-100 rounded-md" />
                      </div>

                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                        <input type="text" name="city" value={user.city}
                          onChange={e => setUser({ ...user, city: e.target.value })} id="city" className="mt-1 p-2 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm border sm:text-sm border-red-100 rounded-md" />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="state" className="block text-sm font-medium text-gray-700">State / Province</label>
                        <select type="text" name="state" id="state" value={user.state}
                          onChange={e => setUser({ ...user, state: e.target.value })} className="mt-1 p-2 focus:ring-red-500 focus:border-red-500 block w-full border shadow-sm sm:text-sm border-red-100 rounded-md">
                          <option value="none" selected disabled hidden>Select a State</option>
                          <option>Tanger-Tétouan-Al Hoceïma</option>
                          <option>L&lsquo;Oriental</option>
                          <option>Fès-Meknès</option>
                          <option>Rabat-Salé-Kénitra</option>
                          <option>Béni Mellal-Khénifra</option>
                          <option>Casablanca-Settat</option>
                          <option>Marrakech-Safi</option>
                          <option>Drâa-Tafilalet</option>
                          <option>Guelmim-Oued Noun</option>
                          <option>Laâyoune-Sakia El Hamra</option>
                          <option>Dakhla-Oued Ed-Dahab</option>
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="zip" className="block text-sm font-medium text-gray-700">ZIP / Postal</label>
                        <input type="number" name="zip" id="zip" autoComplete="postal-code"
                          value={user.zip}
                          onChange={e => setUser({ ...user, zip: e.target.value })} className="mt-1 p-2 focus:ring-red-500 border focus:border-red-500 block w-full shadow-sm sm:text-sm border-red-100 rounded-md" />
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 mt-4 bg-gray-50 text-right sm:px-6">
                    <PaymentComponent handleConfirmTicket={handleConfirmTicket} />
                  </div>
                </div>
              </htmlForm>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Userinfotest