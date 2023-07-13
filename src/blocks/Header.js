import React from 'react'

import Logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header>
      <div className='container mx-auto mt-4 z-50'>
        <img src={Logo} alt='logo' />
      </div>
    </header>
  )
}

export default Header
