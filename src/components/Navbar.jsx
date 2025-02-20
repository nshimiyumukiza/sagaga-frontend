import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div className='bg-gray-100'>
        <div  className='flex justify-center  space-x-4 pt-6'>
            <Link className='hover:text-blue-600 hover:underline' to="/login">Login</Link>
            <Link className='hover:text-blue-600 hover:underline' to="/register">register</Link>
        </div>
      <h1 className='text-2xl font-bold text-center pt-14 pb-6'>Welcom To My Webpag</h1>
    </div>
  )
}

export default Navbar
