import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import project1 from '../assets/project1.avif'
import project2 from '../assets/project2.avif'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.avif'
import project5 from '../assets/project5.avif'
import project6 from '../assets/project6.avif'
import { FaArrowRight } from 'react-icons/fa'

const projects = [
    {
        title: 'E-Commerce Website',
        description: 'A responsive e-commerce website with a modern design and seamless user experience.',
        image: project1,
        tech: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
        demo: '#',
        code: '#',
    },
    {
        title: 'Task Management App',
        description: 'A simple task management app built with React and Tailwind CSS.',
        image: project2,
        tech: ['React', 'Tailwind CSS'],
        demo: '#',
        code: '#',
    },
    {
        title: 'Task Management App',
        description: 'A simple task management app built with React and Tailwind CSS.',
        image: project3,
        tech: ['JavaScript', 'Firebase'],
        demo: '#',
        code: '#',
    },
    {
        title: 'Food Delivery Website',
        description: 'A responsive food ordering website with a clean navbar and menu layout.',
        image: project4,
        tech: ['HTML', 'CSS'],
        demo: '#',
        code: '#',
    },
    {
        title: 'Interview Proctoring App',
        description: 'An anti-cheating interview app that detects tab and device switching.',
        image: project5,
        tech: ['React', 'Node.js', 'WebRTC'],
        demo: '#',
        code: '#',
    },
    {
        title: 'Portfolio Website',
        description: 'My personal portfolio built with React, Tailwind CSS and Framer Motion.',
        image: project6,
        tech: ['React', 'Tailwind CSS', 'Framer Motion'],
        demo: '#',
        code: '#',
    },
]
const Projects = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id='projects'
            className='py-20 bg-dark-200'
        >
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-bold text-center mb-4'>My
                    <span className='text-red-600'>  Projects</span>
                </h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Some of the projects I have worked on</p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>

                    {
                        projects.map((project, index) => (
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                image={project.image}
                                tech={project.tech}
                                demo={project.demo}
                                code={project.code}

                            />
                        ))
                    }

                </div>
                <div className='text-center mt-16'>
                    <a
                        href='https://github.com/'
                        target='_blank'
                        rel='noreferrer'
                        className='inline-flex items-center gap-2 px-8 py-3 border border-red-600 text-white rounded-lg hover:bg-red-600/20 transition duration-300'
                    >
                        View More Projects <FaArrowRight />
                    </a>
                </div>
            </div>


        </motion.div>
    )
}

export default Projects
