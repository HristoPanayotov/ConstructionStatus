import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footerMainDiv w-full relative sm:h-[450px] md:h-[600px] flex flex-col justify-between mt-auto'>
      <div className='logoAndLinks flex justify-between flex-col lg:flex-row'>
        
        <div className='p-2 sm:p-4 md:p-6'>
          <Link to = '/'>
            <button className='logo-no-background-header'>
              <img src="/logo-no-background-header.svg" alt="" className='w-24 md:w-44 sm:w-32'/>
            </button>
          </Link>
        </div>
        <div className='w-full flex justify-around gap-4 md:gap-0 px-4 pb-16 md:pb-0 pt-8 md:pt-16'>
          <div className='tradesPeople'>
          <p className='text-base sm:text-lg font-bold text-white mb-4'>Tradespeople</p>
            <ul className='flex flex-col gap-4 text-white'>
              <li>
                <Link to = "/my-account-trades-person">
                  <button className='hover:underline text-sm sm:text-base'>My Account</button>
                </Link>
              </li>
              <li>
                <Link to = "/getting-started">
                  <button className='hover:underline text-sm sm:text-base'>Getting Started</button>
                </Link>
              </li>
              <li>
                <Link to = "/how-it-works">
                  <button className='hover:underline text-sm sm:text-base'>How it Works</button>
                </Link>
              </li>
            </ul>
          </div>

          <div className='homeOwners'>
          <p className='text-base sm:text-lg  font-bold text-white mb-4'>Homeowners</p>
            <ul className='flex flex-col gap-4 text-white'>
              <li>
                <Link to = "/post-job">
                  <button className='hover:underline text-sm sm:text-base'>Post a Job</button>
                </Link>
              </li>
              <li>
                <Link to = "/how-it-works">
                  <button className='hover:underline text-sm sm:text-base'>How it Works</button>
                </Link>
              </li>
              <li>
                <Link to = "/my-account-home-owner">
                  <button className='hover:underline text-sm sm:text-base'>My Account</button>
                </Link>
              </li>
            </ul>
          </div>

          <div className='company'>
            <p className='text-base sm:text-lg  font-bold text-white mb-4'>Company</p>
            <ul className='flex flex-col gap-4 text-white'>
              <li>
                <Link to = "/about-us">
                  <button className='hover:underline text-sm sm:text-base'>About us</button>
                </Link>
              </li>
              <li>
                <Link to = "/contact-us">
                  <button className='hover:underline text-sm sm:text-base'>Contact us</button>
                </Link>
              </li>
              <li>
                <Link to = "/faqs">
                  <button className='hover:underline text-sm sm:text-base'>FAQ's</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='w-full legal p-2 sm:p-4 md:p-6 border-t'>
        <div className='w-full lg:w-2/4'>
          <p className='text-white font-thin pb-4 sm:pb-8 text-center sm:text-left'>© 2023 All Rights Reserved</p>
          <div className='flex justify-between flex-wrap text-white gap-4 sm:gap-0 '>
            <Link to = "/privacy-policy"><button className='hover:underline text-sm sm:text-base'>Privacy Policy</button></Link>
            <Link to = "/terms-of-use"><button className='hover:underline text-sm sm:text-base'>Terms of Use</button></Link>
            <Link to = "/sales-and-refunds"><button className='hover:underline text-sm sm:text-base'>Sales and Refunds</button></Link>
            <Link to = "/legal"><button className='hover:underline text-sm sm:text-base'>Legal</button></Link>
            <Link to = "/site-map"><button className='hover:underline text-sm sm:text-base'>Site Map</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer