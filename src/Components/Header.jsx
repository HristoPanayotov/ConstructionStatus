import React from 'react'
import BurgerMenu from './BurgerMenu'
const Header = () => {
  return (
    <div className='headerDiv w-full mb-56'>
      <div className='w-full'>
        <img src="/Header-Pattern.svg" alt="" className='w-full absolute' />
        
        <div className='w-full relative'>
          <div className='flex justify-between items-center'>
            <div className='p-2 w-full sm:p-4 md:p-6'>
              <a href="/">
                <img src="/logo-no-background-header.svg" alt="" className='w-24 md:w-44 sm:w-32'/>
              </a>
            </div>
            <div className='flex gap-4 justify-end w-full items-center'>
              <a href="/sign-up" className='hidden md:block center shadow bg-white hover:bg-purple-400 focus:shadow-outline focus:outline-none text-button-orange py-1 px-2 sm:py-2 sm:px-4 rounded'>Sign up</a>
              <a href="/sign-in" className='hidden md:block center shadow bg-button-orange  hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white py-1 px-2 sm:py-2 sm:px-4 sm:mr-1 rounded'>Sign in</a>
              <BurgerMenu/>
            </div>
          </div>
        
        </div>
      </div>
    </div>
    
  )
}

export default Header