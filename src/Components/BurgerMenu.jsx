import { slide as Menu } from 'react-burger-menu'
import React from 'react';
import { Link } from 'react-router-dom';

class BurgerMenu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  
  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: false})
  }
  
  render () {
    return (
      <div>
        <Menu 
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
          right  width={ '100%' }
        >
       <Link to = "/">
          <button className='menu-item hover:underline' id='home' onClick={() => this.closeMenu()}>Home</button>
        </Link>
        <Link to = "/about">
          <button className='menu-item hover:underline' id='about' onClick={() => this.closeMenu()}>About</button>
        </Link>
        <Link to = "/contact">
          <button className='menu-item hover:underline' id='contact' onClick={() => this.closeMenu()}>Contact</button>
        </Link>
        <div className='burgerSignUpSignInBtns w-full h-300'>
          <div className='flex justify-center gap-20 pt-10'>
            <Link to = "/sign-up">
              <button className='center shadow bg-white hover:bg-gray-200 focus:shadow-outline focus:outline-none text-button-orange py-2 px-4 rounded' onClick={() => this.closeMenu()}>Sign up</button>
            </Link>
            <Link to = "/sign-in">
              <button className='center shadow bg-button-orange  hover:bg-button-orange-hover focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded' onClick={() => this.closeMenu()}>Sign in</button>
            </Link>
          </div>
        </div>
        </Menu>
      </div>
    )
  }
}

export default BurgerMenu;