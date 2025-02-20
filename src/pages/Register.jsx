import React from 'react'
import { Link } from 'react-router'

const Register = () => {
  return (
    <div className='bg-gray-100 flex justify-center'>
        <div>
           <form className='space-y-4 bg-gray-200 mb-4 px-3' action="submit">
            <label className="flex flex-col">
                <span>Name</span>
                <input className='border rounded-md outline-none px-3 py-1.5 bg-gray-50' type="text"placeholder='Enter Name' />
            </label>
            <label className="flex flex-col">
                <span>Email</span>
                <input className='border rounded-md outline-none px-3 py-1.5 bg-gray-50' type="text"placeholder='Enter Email' />
            </label>
            <label className="flex flex-col">
                <span>Password</span>
                <input className='border rounded-md outline-none px-3 py-1.5 bg-gray-50' type="text"placeholder='Ent Password' />
            </label>
            <div className='flex justify-center'>
            <Link className='w-full text-center text-blue-600 px-2 py-1 bg-green-400 hover:text-white'>Submit</Link>
            </div>
            
           </form>
        </div>
     <h1></h1> 
    </div>
  )
}

export default Register
