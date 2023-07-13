import React from 'react'

import { FaReact, FaFigma, FaGit, FaSass } from 'react-icons/fa'
import {
  DiPhotoshop,
  DiIllustrator,
  DiJavascript,
  DiHtml5,
  DiCss3,
  DiGulp,
} from 'react-icons/di'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiWebpack, SiTypescript, SiTailwindcss } from 'react-icons/si'

import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

import Btn from '../components/btn/Btn'
import TextBtn from '../components/btn/TextBtn'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
  })
  return (
    <section className='section mt-[50px]' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 lg:h-screen'>
          {/* img */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='hidden lg:flex flex-1 bg-about bg-contain bg-no-repeat h-[650px] mix-blend-lighten bg-top'
          ></motion.div>
          {/* right */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            {/* text */}
            <h2 className='h2 text-accent'>About me</h2>
            <h3 className='h3 mb-4 leading-[1.3]'>
              For many years I have been engaged in ui / ux design and web
              services development.
            </h3>
            <p className='mb-6'>
              I also worked in outdoor advertising, website building, corporate
              identity development, product design and marketing. Extensive
              experience in various fields and with different companies, a huge
              number of satisfied customers. I create products that bring profit
              to the company. My tech stack is constantly expanding and
              deepening because I love my job!
            </p>
            <div className='text-[22px] flex items-center gap-2 mb-5'>
              <DiPhotoshop />
              <DiIllustrator />
              <FaFigma />
              <DiHtml5 />
              <DiCss3 />
              <DiJavascript />
              <SiTypescript />
              <DiGulp />
              <SiWebpack />
              <FaSass />
              <SiTailwindcss />
              <FaReact />
              <TbBrandNextjs />
              <FaGit />
            </div>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] text-gradient font-tertiary leading-[40px]'>
                  +{inView ? <CountUp start={0} end={6} duration={2} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px] mb-2'>
                  Years of <br />
                  Expiriens
                </div>
              </div>
              <div>
                <div className='text-[40px] text-gradient font-tertiary leading-[40px]'>
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}
                  k+
                </div>
                <div className='font-primary text-sm tracking-[2px] mb-2'>
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className='text-[40px] text-gradient font-tertiary leading-[40px]'>
                  +
                  {inView ? <CountUp start={0} end={100} duration={4} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px] mb-2'>
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>
            {/* btn */}
            <div className='flex gap-x-8 items-center'>
              <Btn link='contact' text='Contact me' />
              <TextBtn link='work' text='My Portfolio' />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
