import React, { useRef, useState } from 'react'
import { register } from '../apis/userApi';
import { CircularProgress } from '@mui/material';
const Login = () => {
const firstName = useRef();
const lastName = useRef();
const email = useRef();
const password = useRef();
const phone = useRef();
const [loading, setLoading] = useState(null)
const [success, setSuccess] = useState(null)
const [error, setError] = useState(false)
const handleSubmit= (e)=>{
  e.preventDefault();
  register(
    firstName.current.value,
    lastName.current.value,
    email.current.value,
    phone.current.value,
    password.current.value,
    setSuccess,
    setError,
    setLoading
    )
}

  return (
<div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
  
  <div className="flex shadow-md">
    <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white w-[30rem] h-[42rem]" >
      <div className="w-72">
        <h1 className="text-xl font-semibold">Welcome</h1>
        <small className="text-gray-400">Please enter your details</small>

        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-3">
            <label className="mb-2 block text-xs font-semibold">First Name</label>
            <input required ref={firstName} type="text" placeholder="Enter your first name" className="block w-full rounded-md border border-gray-300 focus:border-[#c09578] focus:outline-none focus:ring-1 focus:ring-[#c09578] py-1 px-1.5 text-gray-500" />
          </div> 
          <div className="mb-3">
            <label className="mb-2 block text-xs font-semibold">Last Name</label>
            <input required ref={lastName} type="text" placeholder="Enter your last name" className="block w-full rounded-md border border-gray-300 focus:border-[#c09578] focus:outline-none focus:ring-1 focus:ring-[#c09578] py-1 px-1.5 text-gray-500" />
          </div>
          <div className="mb-3">
            <label className="mb-2 block text-xs font-semibold">Email</label>
            <input required ref={email} type="email" placeholder="Enter your email" className="block w-full rounded-md border border-gray-300 focus:border-[#c09578] focus:outline-none focus:ring-1 focus:ring-[#c09578] py-1 px-1.5 text-gray-500" />
          </div>
          <div className="mb-3">
            <label className="mb-2 block text-xs font-semibold">Phone</label>
            <input required ref={phone} type="phone"  placeholder="Enter your phone" className="block w-full rounded-md border border-gray-300 focus:border-[#c09578] focus:outline-none focus:ring-1 focus:ring-[#c09578] py-1 px-1.5 text-gray-500" />
          </div>
          <div className="mb-3">
            <label className="mb-2 block text-xs font-semibold">Password</label>
            <input required ref={password} type="password" placeholder="*****" className="block w-full rounded-md border border-gray-300 focus:border-[#c09578] focus:outline-none focus:ring-1 focus:ring-[#c09578] py-1 px-1.5 text-gray-500" />
          </div>

          <div className="mb-3 flex flex-wrap content-center">
            <input required id="remember" type="checkbox" className="mr-1 checked:bg-[#c09578]" /> <label htmlFor="remember" className="mr-auto text-xs font-semibold">Remember me</label>
          </div>

          <div   className="mb-3">
            {
              
            <button disabled={loading} type='submit' className="mb-1.5 block w-full text-center text-white bg-[#c09578] hover:bg-purple-900 px-2 py-1.5 rounded-md">{loading ? <CircularProgress /> : "Sign up"}</button>
            }
          </div>
          {
            
            success ? 
            <span className='text-[green]'>Registered</span>
             : error &&

            <span className='text-[red]'>{error[0]?.message}</span>
          }
        </form>

        <div className="text-center">
          <span className="text-xs text-gray-400 font-semibold">Already have an account? </span>
          <a href="/" className="text-xs font-semibold text-[#c09578]">Sign in</a>
        </div>
      </div>
    </div>

    <div className="flex flex-wrap content-center justify-center rounded-r-md w-[24rem] h-[40rem]" >
      <img alt='cat' className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md" src="https://i.imgur.com/9l1A4OS.jpeg" />
    </div>

  </div>

</div>
  ) 
}

export default Login