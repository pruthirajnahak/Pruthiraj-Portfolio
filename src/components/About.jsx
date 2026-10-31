import React from 'react'
import { motion } from 'framer-motion'
import profileImg from '../assets/profileimg.jpg'
import { FaLightbulb, FaPaintBrush, FaCode } from 'react-icons/fa'

const aboutInfo = [
  { icon: FaLightbulb, title: 'Problem Solver', description: 'I love creating unique solutions to complex problem with cutting-edge technologies.' },
  { icon: FaPaintBrush, title: 'Creative Design', description: 'Amezing design and user experience are at the heart of everything i create.' },
  { icon: FaCode, title: 'Clean Code', description: 'I write simple and maintainable code.' },
]
const About = () => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
                id='about'
                className='py-20 bg-dark-200'
            >
                <div className='container mx-0 px-6'>
                    <h2 className='text-3xl font-bold text-center mb-4'>About
                        <span className='text-red-600'>Me</span>
                    </h2>
                    <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Get to know more about my background and passion </p>


                    <div className='flex flex-col md:flex-row items-center gap-12'>
                        <div className='md:w-1/2 rounded-2xl overflow-hidden'>
                            <motion.img
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.9, ease: 'easeOut' }}
                                viewport={{ once: false, amount: 0.2 }}
                                className='w-full h-full object-cover'
                                src={profileImg} />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: 'easeOut' }}
                            viewport={{ once: false, amount: 0.2 }}
                            className='md:w-1/2'>
                            <div className='rounded-2xl p-8'>
                                <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>
                                <p className='text-gray-300 mb-6'>I am a passionate Computer Science student and developer dedicated to building secure, scalable, and impactful digital solutions. My tech journey started with core programming fundamentals and has evolved into building modern full-stack web applications, exploring cybersecurity, and working with IoT systems. I thrive on solving complex engineering problems and turning innovative ideas into practical applications.</p>
                                <p className='text-gray-300 mb-6'>When I'm not coding, you can find me driving campus tech initiatives as a Google Student Ambassador, serving in the NCC, playing the acoustic guitar, or exploring outdoor trails. I strongly believe in continuous learning, hands-on problem solving, and leveraging technology to create real-world impact.</p>

                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                    {
                                        aboutInfo.map((data,index)=>(
                                            <div key={index} className='bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer'>
                                                <div className='text-red-600 text-4xl'>
                                                    <data.icon/>
                                                </div>
                                                <h3 className='text-xl font-semibold mb-3'>{data.title}</h3>
                                                <p className='text-gray-400'>{data.description}</p>
                                            </div>
                                        ))
                                    }
                                </div>

                            </div>
                        </motion.div>

                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default About
