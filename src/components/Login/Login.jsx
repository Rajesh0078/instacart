import React, { useContext, useEffect, useState } from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { RiLockPasswordFill } from 'react-icons/ri'
import { store } from '../../App'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Skeleton from '../Loaders/Skeleton'

const Login = ({ setIsLogin }) => {
    const navigate = useNavigate()
    const { setToken, user } = useContext(store)
    const [isLoad, setIsLoad] = useState(false)
    const [loginData, setLoginData] = useState({
        email: '',
        password: ""
    })

    const notify = (msg) => toast.error(msg);

    const load = (des) => {
        setIsLoad(des)
    }

    const loginHandler = (e) => {
        e.preventDefault()
        load(true)
        axios.post("https://instacart-server-xck1.onrender.com/api/login", loginData).then((res) => {
            let token = res.data.token
            if (!token) {
                notify(res.data.msg)
                load(false)
            } else {
                setToken(token)
                notify(res.data.msg)
                localStorage.setItem('token', token)
            }
        })
        setLoginData({ email: "", password: "" })

    }
    useEffect(() => {
        if (user.fullname) {
            load(false)
            navigate('/')
        }
    }, [user, navigate])

    const changeHandler = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }

    return (
        <>
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
                        <div className='mt-[5rem] md:mt-0'>
                            <p className='mt-1 md:mt-12 text-2xl text-orange-600 text-center font-medium'>LOGIN FORM</p>
                        </div>
                        <form className='flex transition-all flex-wrap ' onSubmit={loginHandler}>
                            <div className=' w-full md:py-2 md:px-3 py-3'>
                                <label htmlFor='email' className='text-sm'>Email</label>
                                <div className='flex items-center border border-green-700 p-2'>
                                    <FaEnvelope className='text-green-800' />
                                    <input type="text"
                                        className='ms-2 outline-none w-full '
                                        id='email'
                                        name='email'
                                        value={loginData.email}
                                        onChange={changeHandler} required />
                                </div>
                            </div>
                            <div className='  w-full md:px-3 md:py-2 py-3'>
                                <label htmlFor='password' className='text-sm'>Password</label>
                                <div className='flex items-center border border-green-700 p-2'>
                                    <RiLockPasswordFill className='text-green-800' />
                                    <input type="password"
                                        className='ms-2 outline-none w-full'
                                        id='password'
                                        name='password'
                                        autoComplete='off'
                                        value={loginData.password}
                                        onChange={changeHandler} required />
                                </div>
                            </div>
                            <div className='md:px-3 md:text-sm md:mb-2'>forgotten password? <p className='text-green-800 mt-3 inline-block'  >click here</p></div>
                            <div className='w-full mt-3 md:px-3'>
                                <input type='submit' className='button w-full cursor-pointer' value={"Login"} />
                            </div>
                            <div className='w-full mt-5 md:px-3'>
                                <span className='inline-block text-center bg-orange-600 text-white  p-1 w-full'>Facebook</span>
                            </div>
                            <div className='w-full mt-5 md:px-3'>
                                <span className='inline-block p-1 text-center border border-blue-600 text-blue-800 w-full'><FaEnvelope className='inline me-2' />Gmail</span>
                            </div>
                        </form>
                        <p className='mt-5 text-sm text-center' >Dont't have an account? <span className='font-bold text-green-800' role='button' onClick={() => setIsLogin(true)}>Register</span></p>
                        {
                            isLoad &&
                            <Skeleton />
                        }
                    </div>

                </div>

            </div>
        </>
    )
}

export default Login