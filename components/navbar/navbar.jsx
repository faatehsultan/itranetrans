import React, {useState} from 'react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  }
  return (
 <div className='w-screen h-[80px] z-10 bg-white drop-shadlow-lg'>
      <div className=' px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
        <image src="/logo2.png" className="mr-15 h-20 sm:h-25" alt='logo'></image>
        </div>
        <ul className='hidden md:flex'>
          <li className='hover:text-red-700'>Home</li>
          <li className='hover:text-red-700'>About</li>
          <li className='hover:text-red-700'>FAQ</li>
          <li className='hover:text-red-700'>Contact</li>
        </ul>
      <div className='hidden md:flex pr-4'>
        <button className='px-3 py-2'>Buy Ticket</button>
      </div>
      <div className='md:hidden' onClick={handleClick}>
        {!nav? <MenuIcon className='w-5'/> : <XIcon className='w-5'></XIcon>}
        
      </div>
     </div>
     
     <ul className={!nav? 'hidden': 'absolute bg-white w-full px-8'}>
          <li className=' border-b2 border-zinc-100 w-full'>Home</li>
          <li className=' border-b2 border-zinc-100 w-full'>About</li>
          <li className=' border-b2 border-zinc-100 w-full'>FAQ</li>
          <li className=' border-b2 border-zinc-100 w-full'>Contact</li>
          <div className='flex flex-col my-4'>
              <button className=' bg-transparent border-red-600 text-white-600 px-3 py-1 mb-4'>Buy Ticket </button>
          </div>
     </ul> 
   </div>
   
  )
}

export default Navbar

