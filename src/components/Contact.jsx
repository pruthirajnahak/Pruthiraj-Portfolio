import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhoneAlt,
    FaGithub,
    FaLinkedinIn,
    FaTwitter,
    FaInstagram,
} from 'react-icons/fa'

const info = [
    { icon: FaMapMarkerAlt, title: 'Location', value: 'Bhubaneswar, Odisha, India' },
    { icon: FaEnvelope, title: 'Email', value: 'nahakpruthiraj@gmail.com' },
    { icon: FaPhoneAlt, title: 'Phone', value: '+91 93483 86354' },
]

const socials = [
    { icon: FaGithub, link: 'https://github.com/' },
    { icon: FaLinkedinIn, link: 'https://linkedin.com/' },
    { icon: FaTwitter, link: 'https://twitter.com/' },
    { icon: FaInstagram, link: 'https://instagram.com/' },
]

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const subject = encodeURIComponent('Message from ${ form.name }')
        const body = encodeURIComponent('${ form.message }\n\nFrom: ${ form.name }(${ form.email })')
        window.location.href = `mailto:yourname@gmail.com?subject=${subject}&body=${body}`
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id='contact'
            className='py-20 bg-dark-100'
        >
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-bold text-center mb-4 text-white'>
                    Get In <span className='text-red-600'>Touch</span>
                </h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
                    Have a project in mind or want to collaborate? Let's talk!
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto'>
                    {/* Left: form */}
                    <form onSubmit={handleSubmit}>
                        <label className='block text-gray-300 mb-2'>Your Name</label>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            required
                            className='w-full bg-dark-300 text-white rounded-xl px-4 py-4 mb-6 outline-none focus:ring-2 focus:ring-red-600'
                        />

                        <label className='block text-gray-300 mb-2'>Email Address</label>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            required
                            className='w-full bg-dark-300 text-white rounded-xl px-4 py-4 mb-6 outline-none focus:ring-2 focus:ring-red-600'
                        />

                        <label className='block text-gray-300 mb-2'>Your Message</label>
                        <textarea
                            name='message'
                            rows='5'
                            value={form.message}
                            onChange={handleChange}
                            required
                            className='w-full bg-dark-300 text-white rounded-xl px-4 py-4 mb-6 outline-none focus:ring-2 focus:ring-red-600'
                        ></textarea>

                        <button
                            type='submit'
                            className='w-full py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition duration-300'
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Right: info */}
                    <div>
                        {info.map((item, index) => (
                            <div key={index} className='flex gap-4 mb-8'>
                                <item.icon className='w-6 h-6 text-white mt-1 shrink-0' />
                                <div>
                                    <h3 className='text-lg font-semibold text-white'>{item.title}</h3>
                                    <p className='text-gray-400'>{item.value}</p>
                                </div>
                            </div>
                        ))}

                        <h3 className='text-lg font-semibold text-white mt-12 mb-4'>Follow Me</h3>
                        <div className='flex gap-4'>
                            {socials.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.link}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='w-12 h-12 flex items-center justify-center bg-dark-300 text-white rounded-full hover:bg-red-600 transition duration-300'
                                >
                                    <social.icon />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Contact