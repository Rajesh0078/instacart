import React from 'react'
import { FaEnvelope, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='shadowx md:flex px-[2rem] py-6  hidden justify-between'>
                <div className=''>
                    <Link to={'/'} >
                        <img src="/assets/logo.png" alt="logo" className='w-[8rem]' />
                    </Link>
                    <div className='flex justify-between my-4 text-slate-600 text-2xl px-1'>
                        <FaInstagram className='hover:text-green-800' />
                        <FaTwitter className='hover:text-green-800' />
                        <FaEnvelope className='hover:text-green-800' />
                        <FaLinkedin className='hover:text-green-800' />
                    </div>
                    <span className='text-slate-600'>ⓒ Designed By PEKETI RAJESH</span>
                </div>
                <div className='flex flex-col gap-2'>
                    <p>Home</p>
                    <p>Delivery Areas</p>
                    <p>Press</p>
                    <p>Customer Support</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p>Privacy Policy</p>
                    <p> Terms of Use</p>
                    <p> Responsible Disclosure Policy</p>
                    <p> Mojo - a Instacart Blog</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p>Careers</p>
                    <p> Enquiry</p>
                    <p> Business</p>
                    <p>Collaboration</p>
                </div>
            </div>
            <div className='shadowx md:hidden px-4 pb-2 pt-3 text-sm '>
                <div className='flex justify-between '>
                    <div className='flex flex-col gap-[.1rem]'>
                        <Link to={'/'}>Home</Link>
                        <p>Delivery Areas</p>
                        <p>Press</p>
                        <p>Customer Support</p>
                    </div>
                    <div className='hidden flex-col gap-1 '>
                        <p>Privacy Policy</p>
                        <p> Terms of Use</p>
                        <p> Responsible Disclosure Policy</p>
                        <p> Mojo - a Instacart Blog</p>
                    </div>
                    <div className='flex flex-col gap-[.1rem]'>
                        <p>Careers</p>
                        <p> Enquiry</p>
                        <p> Business</p>
                        <p>Collaboration</p>
                    </div>
                </div>
                <div className='flex flex-col gap-1 justify-center'>
                    <div className='flex items-center justify-between mt-1'>
                        <Link to={'/'} >
                            <img src="/assets/logo.png" alt="logo" className='w-[7rem] ms-auto me-auto' />
                        </Link>
                        <div className='flex gap-3 mt-4 mb- text-green-900 text-xl px-1 '>
                            <FaInstagram className='hover:text-green-800 ' />
                            <FaTwitter className='hover:text-green-800 ' />
                            <FaEnvelope className='hover:text-green-800 ' />
                            <FaLinkedin className='hover:text-green-800 ' />
                        </div>
                    </div>
                    <span className='text-slate-700 text-[.8rem]'>ⓒ Designed By PEKETI RAJESH</span>
                </div>
            </div>
        </>
    )
}

export default Footer