import React from 'react'

import Circles from '../../blocks/Circles'
import Header from '../../blocks/Header'
import Banner from '../../blocks/Banner'
import Nav from '../../blocks/Nav'
import About from '../../blocks/About'
import Services from '../../blocks/Services'
import Work from '../../blocks/Work'
import Contact from '../../blocks/Contact'

import './portfolio.scss'

const Portfolio = () => {
  return (
    <div className='bg bg-no-repeat bg-cover overflow-hidden'>
      <Circles />
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
    </div>
  )
}

export default Portfolio
