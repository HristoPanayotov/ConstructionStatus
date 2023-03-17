import React from 'react'

const SignUp = () => {

  return (
    
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className=''>Are you a construction worker?</h1>
      <div className='flex flex-row justify-around w-1/4'>
        <a className="text-cyan-500 hover:text-cyan-700 border bg-red-100 hover:bg-red-300 p-1.5 rounded-md" 
        href="/sign-up-construction-worker">Yes</a>

        <a className="text-amber-500 hover:text-amber-700 border bg-red-100 hover:bg-red-300 p-1.5 rounded-md" 
        href="/sign-up-customer">No</a>
      </div>
    </div>
  )
}

export default SignUp