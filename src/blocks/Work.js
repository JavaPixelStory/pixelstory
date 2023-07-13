import React from 'react'

import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

import img1 from '../assets/portfolio-img1.png'
import img2 from '../assets/portfolio-img2.png'
import img3 from '../assets/portfolio-img3.png'

const Work = () => {
  return (
    <section className='section mt-[50px]' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10 gap-y-12'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10'
          >
            {/* text */}
            <div>
              <h2 className='text-accent h2 leading-tight'>Projects</h2>
              <p className='max-w-sm mb-16'>
                I posted some of my latest works, including a website, admin
                panel, mobile application design. All works are real and used in
                production.
              </p>
              {/* <button className="btn btn-sm">View project</button> */}
            </div>
            {/* img */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img
                className='group-hover:scale-125 transition-all duration-500'
                src={img1}
                alt='work'
              />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Mobile App</span>
              </div>
            </div>
          </motion.div>
          {/* img */}
          <motion.div
            variants={fadeIn('left', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-12'
          >
            <a
              href='https://business.sendy.land/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                {/* overlay */}
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                {/* img */}
                <img
                  className='group-hover:scale-125 transition-all duration-500'
                  src={img2}
                  alt='work'
                />
                {/* pretitle */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>Development</span>
                </div>
                {/* title */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>Dashboard</span>
                </div>
              </div>
            </a>
            <a href='https://sendy.land/' target='_blank' rel='noreferrer'>
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                {/* overlay */}
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                {/* img */}
                <img
                  className='group-hover:scale-125 transition-all duration-500'
                  src={img3}
                  alt='work'
                />
                {/* pretitle */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>Development</span>
                </div>
                {/* title */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>WebSite</span>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Work
