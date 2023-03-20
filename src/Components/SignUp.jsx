import React from 'react'

const SignUp = () => {

  return (
    
      <div className='flex justify-center items-center'>
        <img src="/Main-content-shape.svg" alt="" className='w-4/5 relative w-1208'/>
        <div className='absolute flex flex-col justify-center items-center'>
        <p className='text-l sm:text-xl md:text-2xl text-white'>Are you a construction worker?</p>
          <div className='flex flex-row justify-around w-full pt-8'>
            <a className="bg-button-orange hover:bg-button-orange-hover p-1.5 rounded-md w-2/5 text-center text-white" 
            href="/sign-up-construction-worker">Yes</a>

            <a className="bg-button-blue hover:bg-button-blue-hover p-1.5 rounded-md w-2/5 text-center text-white" 
            href="/sign-up-customer">No</a>
          </div>
          </div>
        </div>
  )
}

export default SignUp