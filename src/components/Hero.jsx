import React from 'react'
import { motion } from 'framer-motion'
import profileImg from '../assets/profileimg.jpg'

const Hero = () => {
  return (
    <motion.div 
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration: 0.6, ease:'easeOut' }}
    viewport={{once: true}}
    id='home'
    className='min-h-screen flex items-center pt-20 pb-16 bg-linear-to-r from-dark-100 via-dark-300 to-dark-100'
    >
      <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>
        <div className='md:w-1/2 mb-10 md:mb-0'>
            <h1 className='text-4xl md:text-6xl font-bold mb-4'>
                Hii, I'm <span className='text-red-500'>Pruthiraj Nahak</span>
            </h1>
            <h2 className='text-2xl md:text-4xl font-semibold mb-6 typewriter'>
                Full Stack Developer
            </h2>
            <p className='text-lg text-gray-300 mb-8'> I create stunning web experience with morden technology and improve creative design. </p>

            <div className='flex space-x-4'>
                <a href="#projects" className='px-6 py-3 bg-red-600 rounded-lg font-medium hover:bg-red-400 transition duration-300'>View Work</a>
                <a href="#contact" className='px-6 py-3 border border-red-600 rounded-lg font-medium hover:bg-red-600 transition decoration-red-300'>Contact Me</a>
            </div>
        </div >

            <div className='md:w-1/2 flex justify-center'>
                <div className='relative w-64 h-64 md:w-80 md:h-80'>
                    <div className='absolute inset-0 rounded-full bg-gradient-to-r from-red-600 to-white animate-pulses-slow opacity'>
                        <motion.img src={profileImg} alt="Pruthiraj Nahak" className='relative w-full h-full ring-8 ring-red-600 ring-offset-4 rounded-full object-cover object-top' />
                    </div>
                </div>
            </div>
      </div>
    </motion.div>
  )
}

export default Hero
