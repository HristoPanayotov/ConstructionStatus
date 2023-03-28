import React from 'react'
import { Link } from 'react-router-dom'
const SignUp = () => {

  return (
    
      <div className='w-full flex justify-center items-center my-10'>
        <div className='w-4/5'>
          <img src="/Main-content-shape.svg" alt="" className='relative'/>
        </div>
        <div className='absolute flex flex-col justify-center items-center'>
        <p className='text-l sm:text-xl md:text-2xl text-white'>Are you a construction worker?</p>
          <div className='flex flex-row justify-around w-full pt-8'>
            <Link to = "/sign-up-construction-worker" >
            <button className="bg-button-orange hover:bg-button-orange-hover p-1.5 rounded-md w-full text-center text-white">Yes</button>
            </Link>

            <Link to = "/sign-up-customer" >
            <button className="bg-button-blue hover:bg-button-blue-hover p-1.5 rounded-md w-full text-center text-white">No</button>
            </Link>
          </div>
          </div>
        </div>
  )
}

export default SignUp