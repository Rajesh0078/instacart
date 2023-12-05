import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './modal.css'
import { store } from '../../App'
import { MdClose } from "react-icons/md"
import axios from "axios"

const UserModal = () => {
    const { isModalOpen, setisModalOpen, setToken } = useContext(store)
    const [islogin, setIsLogin] = useState(true)

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    const notify = (msg) => toast.error(msg);

    const loginSubmitHandler = (e) => {
        e.preventDefault()
        axios.post("https://instacart-server-xck1.onrender.com/api/login", loginData).then((res) => {
            let token = res.data.token
            if (!token) {
                notify(res.data.msg)
            } else {
                setToken(token)
            }
        })
        setLoginData({ email: "", password: "" })
    }

    const changeHandler = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }

    return (
        <div className='modal w-[22rem] md:w-[30rem] rounded-md bg-white' style={{ top: `${isModalOpen ? "230%" : "-1200%"}` }} >
            {islogin ?
                <div className=' h-[31rem]'>
                    <div className='py-3 px-7 text-3xl font-medium flex items-center justify-between border-b border-gray-200'>
                        <span className='text-orange-500'>Login</span>
                        <MdClose className='inline-block' role='button' onClick={() => setisModalOpen(false)} />
                    </div>
                    <form className='mt-5 px-7' onSubmit={loginSubmitHandler}>
                        <div className='mb-4'>
                            <label htmlFor="email" className='block mb-2'>Email</label>
                            <input type="email" name='email' placeholder='Enter your Email' className='outline-none border w-full border-gray-300 p-2 rounded-md' required onChange={changeHandler} value={loginData.email} />
                        </div>
                        <div className='mb-6'>
                            <label htmlFor="password" className='block mb-2'>Password</label>
                            <input type="password" name='password' placeholder='Enter your Password' className='outline-none border w-full border-gray-300 p-2 rounded-md' required onChange={changeHandler} value={loginData.password} />
                        </div>
                        <p className='text-sm text-center mb-6'>forgotten your password? <span className='text-orange-500 text-md' role='button'>reset here</span></p>
                        <input type="submit" value={"Login"} className='btn cursor-pointer' />
                        <p className='text-sm text-center mt-4'>Don't have an account </p>
                        <button className='w-full rounded-[.3rem] text-white text-[1.2rem] p-1 my-4 bg-orange-600 font-medium' onClick={(e) => { e.preventDefault(); setIsLogin(false) }}>Register</button>
                    </form>

                </div> :
                <div className=' h-[31rem]'>
                    <div className='py-3 px-7 text-3xl font-medium flex items-center justify-between border-b border-gray-200'>
                        <span className='text-orange-500'>Register</span>
                        <MdClose className='inline-block' role='button' onClick={() => setisModalOpen(false)} />
                    </div>
                    <form className='mt-3 px-7' method='POST'>
                        <div className='flex flex-wrap gap-3'>
                            <div className='mb-1 w-[48%]'>
                                <label htmlFor="fullname" className='block mb-2 text-[1rem]'>Full Name</label>
                                <input type="text" name='name' placeholder='Enter your Full Name' className='outline-none border w-full border-gray-300 p-2 rounded-md' />
                            </div>
                            <div className='mb-1 w-[48%]'>
                                <label htmlFor="email" className='block mb-2 text-[1rem]'>Email</label>
                                <input type="email" name='email' placeholder='Enter your Email' className='outline-none border w-full border-gray-300 p-2 rounded-md' />
                            </div>
                            <div className='mb-1 w-[48%]'>
                                <label htmlFor="mobile" className='block mb-2 text-[1rem]'>Mobile</label>
                                <input type="text" name='mobile' placeholder='Enter your Mobile' className='outline-none border w-full border-gray-300 p-2 rounded-md' />
                            </div>
                            <div className='mb-1 w-[48%]'>
                                <label htmlFor="pincode" className='block mb-2 text-[1rem]'>Pincode</label>
                                <input type="number" name='pincode' placeholder='Enter your Pincode' className='outline-none border w-full border-gray-300 p-2 rounded-md' />
                            </div>
                            <div className='mb-4 w-[48%]'>
                                <label htmlFor="password" className='block mb-2 text-[1rem]'>Password</label>
                                <input type="password" name='password' placeholder='Enter your Password' className='outline-none border w-full border-gray-300 p-2 rounded-md' />
                            </div>
                            <div className='mb-5 w-[48%]'>
                                <label htmlFor="cpassword" className='block mb-2 text-[1rem]'>Confirm Password</label>
                                <input type="password" name='cpassword' placeholder='Confirm your Password' className='outline-none border w-full border-gray-300 p-2 rounded-md' />
                            </div>
                        </div>
                        <input type="submit" value={"Register"} className='btn' />
                        <p className='text-sm text-center mt-3'>Already have an account </p>
                        <button className='w-full rounded-[.3rem] text-white text-[1.2rem] p-1 my-3 bg-orange-600 font-medium' onClick={(e) => { e.preventDefault(); setIsLogin(true) }}>Login</button>
                    </form>
                </div>
            }
        </div>
    )
}

export default UserModal