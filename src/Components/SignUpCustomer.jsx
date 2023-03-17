import React from 'react'

const SignUpCustomer = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <form className="w-full max-w-lg">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
            First Name
          </label>
          <input className="appearance-none block w-full hover:bg-gray-100 text-gray-700 border-b-2 border-amber-500 hover:border-cyan-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500" id="grid-first-name" type="text" placeholder="Jane"/>
          {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
            Last Name
          </label>
          <input className="appearance-none block w-full hover:bg-gray-100 text-gray-700 border-b-2 border-amber-500 hover:border-cyan-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500" id="grid-last-name" type="text" placeholder="Doe"/>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
            Email
          </label>
          <input className="appearance-none block w-full hover:bg-gray-100 text-gray-700 border-b-2 border-amber-500 hover:border-cyan-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500" id="grid-email" type="password" placeholder="jane.doe@gmail.com"/>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
            Password
          </label>
          <input className="appearance-none block w-full hover:bg-gray-100 text-gray-700 border-b-2 border-amber-500 hover:border-cyan-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500" id="grid-password" type="password" placeholder="******************"/>
          {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
        </div>
      </div>
      <div className='flex justify-center'>
        <button className="w-1/4 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
          Sign Up
        </button>
      </div>
    </form>
    </div>
  )
}

export default SignUpCustomer