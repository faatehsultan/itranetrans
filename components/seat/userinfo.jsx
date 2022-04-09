// import React, { useState } from 'react'
// import { useRouter } from 'next/router';

// const Userinfo = () => {
//   const router = useRouter();

//   const [user, setUser] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     address1: '',
//     address2: '',
//     city: '',
//     state: '',
//     zip: '',
//     country: '',
//     deliveryInfo: ''
//   });

//   return (
//     <div>
//       <div className="w-full md:w-96 md:max-w-full mx-auto">
//         <div className="p-6 border border-gray-300 sm:rounded-md">
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();

//               router.push(`/confirmation?schedule_id=${router.query.schedule_id}&selectedSeats=${router.query.selectedSeats}&userInfoObj=${JSON.stringify(user)}`);
//             }}
//           >
//             <label className="block mb-6">
//               <span className="text-gray-700">Your name</span>
//               <input
//                 name="name"
//                 type="text"
//                 className="
//             block
//             w-full
//             mt-1
//             border-gray-300
//             rounded-md
//             shadow-md
//             focus:border-red-300
//             focus:ring
//             focus:ring-red-200
//             focus:ring-opacity-50
//           "
//                 placeholder="Joe Bloggs"
//                 value={user.name}
//                 onChange={e => setUser({ ...user, name: e.target.value })}
//               />
//             </label>
//             <label className="block mb-6">
//               <span className="text-gray-700">Your email</span>
//               <input
//                 name="name"
//                 type="email"
//                 className="
//             block
//             w-full
//             mt-1
//             border-gray-300
//             rounded-md
//             shadow-md
//             focus:border-red-300
//             focus:ring
//             focus:ring-red-200
//             focus:ring-opacity-50
//           "
//                 placeholder="john@example.com"
//                 value={user.email}
//                 onChange={e => setUser({ ...user, email: e.target.value })}
//               />
//             </label>
//             <label className="block mb-6">
//               <span className="text-gray-700">Address line 1</span>
//               <input
//                 name="address1"
//                 type="text"
//                 className="
//             block
//             w-full
//             mt-1
//             border-gray-300
//             rounded-md
//             shadow-md
//             focus:border-red-300
//             focus:ring
//             focus:ring-red-200
//             focus:ring-opacity-50
//           "
//                 placeholder=""
//                 value={user.address1}
//                 onChange={e => setUser({ ...user, address1: e.target.value })}
//               />
//             </label>
//             <label className="block mb-6">
//               <span className="text-gray-700">Address line 2</span>
//               <input
//                 name="address2"
//                 type="text"
//                 className="
//             block
//             w-full
//             mt-1
//             border-gray-300
//             rounded-md
//             shadow-md
//             focus:border-red-300
//             focus:ring
//             focus:ring-red-200
//             focus:ring-opacity-100
//           "
//                 placeholder=""
//                 value={user.address2}
//                 onChange={e => setUser({ ...user, address2: e.target.value })}
//               />
//             </label>
//             <label className="block mb-6">
//               <span className="text-gray-700">City</span>
//               <input
//                 name="city"
//                 type="text"
//                 className="
//             block
//             w-full
//             mt-2
//             h-
//             border-gray-300
//             rounded-md
//             shadow-md
//             ring-red-800
//             focus:border-red-300
//             focus:ring
//             focus:ring-red-200
//             focus:ring-opacity-50
//           "
//                 placeholder=""
//                 value={user.city}
//                 onChange={e => setUser({ ...user, city: e.target.value })}
//               />
//             </label>
//             <label className="block mb-6">
//               <span className="text-gray-700">State/Province</span>
//               <input
//                 name="state"
//                 type="text"
//                 className="
//             block
//             w-full
//             mt-1
//             border-gray-300
//             rounded-md
//             shadow-md
//             focus:border-red-300
//             focus:ring
//             focus:ring-red-200
//             focus:ring-opacity-50
//           "
//                 placeholder=""
//                 value={user.state}
//                 onChange={e => setUser({ ...user, state: e.target.value })}
//               />
//             </label>
//             <label className="block mb-6">
//               <span className="text-gray-700">Zip/Postal code</span>
//               <input
//                 name="zip"
//                 type="text"
//                 className="
//             block
//             w-full
//             mt-1
//             border-gray-300
//             rounded-md
//             shadow-md
//             focus:border-red-300
//             focus:ring
//             focus:ring-red-200
//             focus:ring-opacity-50
//           "
//                 placeholder=""
//                 value={user.zip}
//                 onChange={e => setUser({ ...user, zip: e.target.value })}
//               />
//             </label>
//             <label className="block mb-6">
//               <span className="text-gray-700">Country</span>
//               <input
//                 name="country"
//                 type="text"
//                 className="
//             block
//             w-full
//             mt-1
//             border-gray-300
//             rounded-md
//             shadow-md
//             focus:border-red-300
//             focus:ring
//             focus:ring-red-200
//             focus:ring-opacity-50
//           "
//                 placeholder=""
//                 value={user.country}
//                 onChange={e => setUser({ ...user, country: e.target.value })}
//               />
//             </label>
//             <label className="block mb-6">
//               <span className="text-gray-700">Telephone</span>
//               <input
//                 name="telephone"
//                 type="text"
//                 className="
//             block
//             w-full
//             mt-1
//             border-gray-300
//             rounded-md
//             shadow-md
//             focus:border-red-300
//             focus:ring
//             focus:ring-red-200
//             focus:ring-opacity-50
//           "
//                 placeholder=""
//                 value={user.phone}
//                 onChange={e => setUser({ ...user, phone: e.target.value })}
//               />
//             </label>
//             <label className="block mb-6">
//               <span className="text-gray-700">Delivery information</span>
//               <textarea
//                 name="message"
//                 className="
//             block
//             w-full
//             mt-1
//             border-gray-300
//             rounded-md
//             shadow-md
//             focus:border-red-300
//             focus:ring
//             focus:ring-red-200
//             focus:ring-opacity-50
//           "
//                 rows="3"
//                 placeholder="floor/door lock code/etc."
//                 value={user.deliveryInfo}
//                 onChange={e => setUser({ ...user, deliveryInfo: e.target.value })}
//               ></textarea>
//             </label>
//             <div className="mb-6  flex items-center justify-center">
//               <input
//                 type="submit"
//                 className="w-1/3 bg-red-500 text-white rounded-md p-2 focus:bg-red-600 hover:bg-red-600"
//                 value={"Continue"}
//               />
//             </div>

//           </form>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Userinfo