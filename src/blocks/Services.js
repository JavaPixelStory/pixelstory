import React from 'react'

import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

import Btn from '../components/btn/Btn'

const services = [
  {
    key: 1,
    name: 'UI/UX Design',
    description:
      'Development ui/ux design for admin panels, mobile applications, landing pages, e-shops. Building from the ground up, maintaining and extending existing functionality.',
    link: 'Learn more',
  },
  {
    key: 3,
    name: 'Product Branding',
    description:
      'Creation of corporate identity, brand book, presentations. Development from a new and support for an existing project.',
    link: 'Learn more',
  },
  {
    key: 4,
    name: 'Development',
    description:
      'Development of web services using React, NextJS. As well as classic layout using HTML, CSS/SCSS, JavaScript. Development from a new and support for an existing project.',
    link: 'Learn more',
  },
]

const Services = () => {
  return (
    <section className='section mt-[50px]' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & img*/}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className='flex-1 lg:bg-services bg-no-repeat lg:bg-bottom mix-blend-lighten mb-12 lg:mb-0'
          >
            <h2 className='text-accent h2 mb-6'>What I Do.</h2>
            <h3 className='h3 max-w-[465px] mb-16 leading-[1.3]'>
              UI/UX Design: Mobile App, Dashboards, Admin pannel.
              <br />
              Brending: corporate identity development, product design and
              marketing.
              <br />
              Development: Web Site, Front End on React and NextJs.
            </h3>
            <Btn link='work' text='See my work' />
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* service list */}
            <div>
              {services.map((service) => {
                const { name, description, key } = service
                return (
                  <div
                    key={key}
                    className='border-b border-white/20 h-[190px] mb-[38px]'
                  >
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight'>
                        {description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services
