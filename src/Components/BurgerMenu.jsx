import { slide as Menu } from 'react-burger-menu'
import React from 'react';
import { Link } from 'react-router-dom';
class BurgerMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();

  }

  render () {
    
    return (
      <Menu right  width={ '100%' }>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <div className='burgerSignUpSignInBtns w-full h-300'>
          <div className='flex justify-center gap-20 pt-10'>
            <Link to = "/sign-up">
              <button className='center shadow bg-white hover:bg-gray-200 focus:shadow-outline focus:outline-none text-button-orange py-2 px-4 rounded'>Sign up</button>
            </Link>
            <Link to = "/sign-in">
              <button className='center shadow bg-button-orange  hover:bg-button-orange-hover focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded'>Sign in</button>
            </Link>
          </div>
        </div>
      </Menu>
    );
  }
}

export default BurgerMenu;