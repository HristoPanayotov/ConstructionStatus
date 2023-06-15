import React from 'react'
import { useLocation } from 'react-router-dom'

const SignUpForm = () => {
  let currLocation = useLocation();

  return (
    <div className='flex justify-center items-center h-screen'>
      <form className="w-full max-w-lg flex flex-col items-center">
        <div className='w-full flex flex-col items-center sm:flex sm:flex-row sm:justify-between sm:items-center'>
          <div className="w-4/5 sm:w-full sm:w-2/4 mb-6 flex flex-col sm:items-start sm:flex-none sm:pr-2">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
              First Name
            </label>
            <input className="appearance-none block w-full hover:bg-gray-100 text-gray-700 border-b-2 border-amber-500 hover:border-cyan-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500" id="grid-first-name" type="text" placeholder="Jane"/>
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
          </div>
          <div className="w-4/5 sm:w-full mb-6 flex flex-col sm:items-start sm:flex-nonesm:pl-2">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
              Last Name
            </label>
            <input className="appearance-none block w-full hover:bg-gray-100 text-gray-700 border-b-2 border-amber-500 hover:border-cyan-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500" type="text" placeholder="Doe"/>
          </div>
        </div>
        <div className="w-4/5 sm:w-full mb-6 flex flex-col sm:items-start sm:flex-none">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
            Email
          </label>
          <input className="appearance-none block w-full hover:bg-gray-100 text-gray-700 border-b-2 border-amber-500 hover:border-cyan-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500" id="grid-email" type="email" placeholder="jane.doe@gmail.com"/>
        </div>
      {currLocation.pathname === '/sign-up-tradesperson' ?
        
          <div className="w-4/5 sm:w-full mb-6 flex flex-col sm:items-start sm:flex-none">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-specialisation">
              Specialisation
            </label>
            <input className="appearance-none block w-full hover:bg-gray-100 text-gray-700 border-b-2 border-amber-500 hover:border-cyan-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500" id="grid-specialisation" type="text" placeholder="Plumber"/>
          </div>:''
      }
        <div className="w-4/5 sm:w-full mb-6 flex flex-col sm:items-start sm:flex-none">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
            Password
          </label>
          <input className="appearance-none block w-full hover:bg-gray-100 text-gray-700 border-b-2 border-amber-500 hover:border-cyan-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500" id="grid-password" type="password" placeholder="******************"/>
          {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
        </div>
      <div className='flex justify-center'>
        <button className="w-full shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
          Sign Up
        </button>
      </div>
    </form>
    </div>
  )
}

export default SignUpForm