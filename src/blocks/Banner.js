import React from 'react'

import Avatar from '../assets/avatar.svg'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

import Btn from '../components/btn/Btn'
import TextBtn from '../components/btn/TextBtn'

const Banner = () => {
  return (
    <section
      className='min-h-[85vh] lg:min-h-[78vh] flex items-center mt-4'
      id='home'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8  gap-x-10 lg:flex-row lg:items-center lg:gap-y-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            {/* title */}
            <div>
              <motion.h1
                variants={fadeIn('up', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                className='text-[50px] font-bold leading-[1.1] lg:text-[80px]'
              >
                Andrew <span>LEBEDEV</span>
              </motion.h1>
            </div>
            {/* text-animation */}
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold leading-[1]'
            >
              <span className='text-white mr-4'>I'm a</span>
              <TypeAnimation
                className='text-accent'
                sequence={['Designer', 2000, 'Developer', 2000]}
                speed={50}
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            {/* subtitle */}
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='max-w-lg mb-8 mx-auto lg:mx-0'
            >
              I'm a ui/ux designer and web developer with a lot of experience
              and a wide variety of backgrounds. At the moment I'm an employee
              of a large international fintech company. I'm very glad that you
              visited my site.
              <br /> You can check my stack and see the latest projects, as well
              as contact me.
            </motion.p>
            {/* links */}
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex items-center max-w-max gap-x-6 mb-12 mx-auto lg:mx-0 z-50'
            >
              <Btn link='contact' text='Contact me' />
              <TextBtn link='work' text='My Portfolio' />
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn('up', 0.8)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'
            ></motion.div>
          </div>
          {/* avatar */}
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            whileInView={'show'}
            className='hidden lg:flex flex-1 max-w-[360px] lg:max-w-[410px] mix-blend-lighten'
          >
            <img src={Avatar} alt='avatar' className='avatar' />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Banner
