import React from 'react'

const ProjectCard = ({ title, description, image, tech, demo, code }) => {
    return (
        <div className='bg-dark-300 rounded-lg shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer'>
            <img src={image} alt={title} className='w-full h-60 object-cover' />
            <div className='p-6'>
                <h3 className='text-xl font-bold mb-2'>{title}</h3>
                <p className='text-gray-400'>{description}</p>
                <div className='flex flex-wrap gap-2 mt-4'>
                    {tech.map((item, index) => (
                        <span key={index} className='bg-dark-400 text-white text-sm px-3 py-1 rounded-full'>
                            {item}
                        </span>
                    ))}
                </div>
                <div className='flex gap-3 mt-6'>
                    <a
                        href={demo}
                        target='_blank'
                        rel='noreferrer'
                        className='flex-1 text-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition duration-300'
                    >
                        View Demo
                    </a>
                    <a
                        href={code}
                        target='_blank'
                        rel='noreferrer'
                        className='flex-1 text-center px-4 py-2 border border-red-600 text-white hover:bg-red-600/20 rounded-lg font-medium transition duration-300'
                    >
                        Code
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
