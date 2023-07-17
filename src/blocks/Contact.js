import React from 'react'

import { FaGithub, FaTelegram, FaBehanceSquare } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Contact = () => {
  return (
    <section className='py-16 section h-screen' id='contact'>
      <div className='container mx-auto'>
        <div className='text-[50px] flex justify-center items-center gap-16'>
          <motion.a
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
            target='_blank'
            rel='noreferrer'
            className='hover:text-purple-500'
            href='https://github.com/JavaPixelStory'
          >
            <FaGithub />
          </motion.a>
          <motion.a
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
            target='_blank'
            rel='noreferrer'
            className='hover:text-purple-500'
            href='https://t.me/Fun_Pixel_Story'
          >
            <FaTelegram />
          </motion.a>
          <motion.a
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
            target='_blank'
            rel='noreferrer'
            className='hover:text-purple-500'
            href='https://www.behance.net/4cb98654'
          >
            <FaBehanceSquare />
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default Contact
