import React from 'react'
import { motion } from 'framer-motion'

const experiences = [
    {
        role: 'Google Student Ambassador',
        company: 'Google',
        period: '2026 - Present',
        description: 'Driving campus tech initiatives, hosting sessions and helping students learn Google technologies.',
    },
    {
        role: 'Web Developer',
        company: 'Personal & College Projects',
        period: '2025 - Present',
        description: 'Built websites and apps using HTML, CSS, JavaScript and React.',
    },
    {
        role: 'B.Tech Computer Science',
        company: 'Gandhi Institute for Education And Technology(Autonomous),Bhubaneswar',
        period: '2024 - Present',
        description: 'Studying Computer Science and building projects alongside & Participating in various hackathons and tech events.',
    },
]

const Work = () => {
    return (
        <div className='py-20 bg-dark-100' id='work'>
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-bold text-center mb-4'>My
                    <span className='text-red-600'> Experience</span>
                </h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>A showcase of my recent work and projects that demonstrate my skills and expertise.</p>

                <div className='max-w-3xl mx-auto'>
                    {experiences.map((exp, index) => (
                        <div key={index} className='flex gap-6'>
                            <div className='flex flex-col items-center'>
                                <div className='w-5 h-5 bg-red-600 rounded-full shrink-0 mt-7'></div>
                                {index !== experiences.length - 1 && (
                                    <div className='w-0.5 flex-1 bg-red-600'></div>
                                )}
                            </div>

                            <div className='flex-1 bg-dark-300 rounded-2xl p-6 mb-10'>
                                <div className='flex flex-wrap items-start justify-between gap-2 mb-2'>
                                    <h3 className='text-xl font-bold text-white'>{exp.role}</h3>
                                    <span className='px-4 py-1 bg-red-600/20 text-red-400 text-sm rounded-full'>
                                        {exp.period}
                                    </span>
                                </div>
                                <p className='text-gray-400 mb-3'>{exp.company}</p>
                                <p className='text-gray-300'>{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Work
