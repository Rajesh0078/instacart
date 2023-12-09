import React, { useEffect, useState } from 'react'
import { FaEnvelope, FaLocationArrow, FaPhoneAlt, FaUser } from "react-icons/fa"
import { RiLockPasswordFill } from "react-icons/ri"
import axios from "axios"
import { toast } from "react-toastify"

const Register = ({ setIsLogin }) => {

    const [signupData, setSignUpData] = useState({
        fullname: '',
        email: "",
        mobile: '',
        pincode: '',
        password: '',
        cpassword: ''
    })

    const notify = (msg) => toast.warn(msg)

    const changeHandler = (e) => {
        setSignUpData({ ...signupData, [e.target.name]: e.target.value })
    }

    const sigupHnadler = () => {
        axios.post('https://instacart-server-xck1.onrender.com/api/signup', signupData).then((res) => {
            if (res.data.msg === "signup successfull") {
                toast.success(res.data.msg)
            }
            else {
                notify(res.data.msg)
            }
        })
    }

    useEffect(() => {
        sigupHnadler()
    }, [])

    return (
        <div className='absolute h-full bg-white w-full shadowx flex flex-wrap rounded-xl overflow-hidden'>
            <div className='md:basis-1/2 bg_img rounded-xl'></div>
            <div className='md:basis-1/2 relative h-full w-full'>
                <div className='absolute top-[-3.2rem] right-[-5.5rem] md:hidden max-w-[20rem]'>
                    <img src="/assets/img.png" alt="logo" className=' rotate-[230deg] ' />
                </div>
                <div className='pt-[1.5rem] md:py-2 px-4  h-full mb-12'>
                    <div className='w-[10rem] md:hidden block'>
                        <img src="/assets/logo.png" alt="logo" />
                    </div>
                    <div className='mt-12 md:mt-0'>
                        <p className='mt-1 md:mt-12 text-xl text-orange-600 text-center font-medium'>SIGN UP FORM</p>
                    </div>
                    <form className='flex transition-all flex-wrap '>
                        <div className=' md:basis-1/2 w-full md:p-3 py-1'>
                            <label htmlFor='fullname' className='text-sm'>Full Name</label>
                            <div className='flex items-center border border-green-700 p-2'>
                                <FaUser className='text-green-800' />
                                <input type="text"
                                    className='ms-2 outline-none'
                                    id='fullname'
                                    autoComplete='off'
                                    name='fullname'
                                    onChange={changeHandler} />
                            </div>
                        </div>
                        <div className='md:basis-1/2 w-full md:p-3 py-1'>
                            <label htmlFor='email' className='text-sm'>Email</label>
                            <div className='flex items-center border border-green-700 p-2'>
                                <FaEnvelope className='text-green-800' />
                                <input type="text"
                                    className='ms-2 outline-none'
                                    id='email'
                                    name='email'
                                    onChange={changeHandler} />
                            </div>
                        </div>
                        <div className=' md:basis-1/2 w-full md:p-3 py-1'>
                            <label htmlFor='mobile' className='text-sm'>Mobile</label>
                            <div className='flex items-center border border-green-700 p-2'>
                                <FaPhoneAlt className='text-green-800' />
                                <input type="text"
                                    className='ms-2 outline-none'
                                    id='mobile'
                                    autoComplete='off'
                                    name='mobile'
                                    onChange={changeHandler} />
                            </div>
                        </div>
                        <div className=' md:basis-1/2 w-full md:p-3 py-1'>
                            <label htmlFor='pincode' className='text-sm' >Pincode</label>
                            <div className='flex items-center border border-green-700 p-2'>
                                <FaLocationArrow className='text-green-800' />
                                <input type="Number"
                                    className='ms-2 outline-none'
                                    id='pincode'
                                    autoComplete='off'
                                    name='pincode'
                                    onChange={changeHandler} />
                            </div>
                        </div>
                        <div className=' md:basis-1/2 w-full md:p-3 py-1'>
                            <label htmlFor='password' className='text-sm'>Password</label>
                            <div className='flex items-center border border-green-700 p-2'>
                                <RiLockPasswordFill className='text-green-800' />
                                <input type="password"
                                    className='ms-2 outline-none'
                                    id='password'
                                    autoComplete='off'
                                    name='password'
                                    onChange={changeHandler} />
                            </div>
                        </div>
                        <div className=' md:basis-1/2 w-full md:p-3 py-1'>
                            <label htmlFor='cpassword' className='text-sm' >Confirm Password</label>
                            <div className='flex items-center border border-green-700 p-2'>
                                <RiLockPasswordFill className='text-green-800' />
                                <input type="password"
                                    className='ms-2 outline-none '
                                    id='cpassword'
                                    autoComplete='off'
                                    name='cpassword'
                                    onChange={changeHandler} />
                            </div>
                        </div>
                        <div className='w-full mt-3 md:px-3'>
                            <span className='button w-full' onClick={sigupHnadler} role='button'>SIGN UP</span>
                        </div>
                    </form>
                    <p className='mt-5 text-sm text-center' >Already have an account? <span className='font-bold text-green-800' onClick={() => setIsLogin(false)}>login</span></p>
                </div>
            </div>
        </div>
    )
}

export default Register