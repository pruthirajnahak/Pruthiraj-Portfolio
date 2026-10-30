import { nav } from 'framer-motion/client'
import { div } from 'framer-motion/m';
import React, { useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className='fixed w-full z-50 bg-gray-900/90 backdrop-blur-sm py-4 px-8 shadow-lg'>
            <div className='container mx-auto flex justify-between items-center'>
                <div>
                    <a herf="#" className='text-3xl font-bold text-white'>
                        Pruthiraj
                        <span className='text-red-500'>    Nahak</span>
                    </a>
                </div>
                <div className='hidden md:flex space-x-10'>
                    <a herf="#home" className='relative text-white/80 transition duration-300 hover:text-red-500 group'>
                        <span>Home</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full'></span>
                    </a>
                    <a herf="#about" className='relative text-white/80 transition duration-300 hover:text-red-500 group'>
                        <span>About</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full'></span>
                    </a>
                    <a herf="#skills" className='relative text-white/80 transition duration-300 hover:text-red-500 group'>
                        <span>Skills</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full'></span>
                    </a>
                    <a herf="#projects" className='relative text-white/80 transition duration-300 hover:text-red-500 group'>
                        <span>Projects</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full'></span>
                    </a>
                    <a herf="#experince" className='relative text-white/80 transition duration-300 hover:text-red-500 group'>
                        <span>Experience</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full'></span>
                    </a>
                    <a herf="#contact" className='relative text-white/80 transition duration-300 hover:text-red-500 group'>
                        <span>Contact</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full'></span>
                    </a>

                </div>

                <div className='md:hidden'>
                    {
                        showMenu ?
                            <FaXmark onClick={() => setShowMenu(!showMenu)} className='text-2xl cursor-pointer' /> :
                            <FaBars onClick={() => setShowMenu(!showMenu)} className='text-2xl cursor-pointer' />
                    }

                </div>
            </div>

            {
                showMenu && (
                    <div className='md:hidden mt-4 bg-gray-900 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center'>
                        <a herf="#home" className='relative text-white/80 transition duration-300 hover:text-red-500 group'>
                            <span>Home</span>
                            
                        </a>
                        <a herf="#about" className='relative text-white/80 transition duration-300 hover:text-red-500 group'>
                            <span>About</span>
                           
                        </a>
                        <a herf="#skills" className='relative text-white/80 transition duration-300 hover:text-red-500 group'>
                            <span>Skills</span>
                           
                        </a>
                        <a herf="#projects" className='relative text-white/80 transition duration-300 hover:text-red-500 group'>
                            <span>Projects</span>
                           
                        </a>
                        <a herf="#experince" className='relative text-white/80 transition duration-300 hover:text-red-500 group'>
                            <span>Experience</span>
                          
                        </a>
                        <a herf="#contact" className='relative text-white/80 transition duration-300 hover:text-red-500 group'>
                            <span>Contact</span>
                            
                        </a>
                    </div>
                )
            }

        </nav>

    )
}

export default Navbar
