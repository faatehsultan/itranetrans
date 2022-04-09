import React, { useState } from 'react'
import { useAppContext } from '../../context'
import { useRouter } from 'next/router'
import AdminLayout from 'adminLayout'

export default function LoginFormAdmin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { adminLoggedIn, setAdminLoggedIn } = useAppContext()
  const router = useRouter()

  const handleLogin = () => {
    if (email === "test@admin.com" && password === "123123") {
      window.localStorage.setItem('itran-voyage-admin-logged-in', true)
      setAdminLoggedIn(true)
      router.push('/admin')
    }
  }

  return (
    <AdminLayout>
      <div className='flex justify-center pt-40'>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-full" style={{ maxWidth: "500px" }}>
          <div className='text-3xl mb-5 text-center'>Admin Login</div>
          <div className="mb-4">
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" onClick={handleLogin}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}