import React, { useState } from 'react'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
import "../components/Login/login.css"
import { ToastContainer } from 'react-toastify'

const UserPage = () => {

    const [isLogin, setIsLogin] = useState(false)

    return (
        <div className='md:h-[36rem] h-[53rem] relative overflow-hidden w-full md:pt-0 pt-[2rem]'>
            <div className='container after:bg-green-900 after:h-[40rem] after:bottom-[-20rem] h-full w-full'>
                <div className=' flex justify-center items-center h-full w-full'>
                    <div className=' md:h-[88%] h-[85%]  w-[85%]'>
                        <div className='h-full w-full relative rounded-xl' >
                            {
                                !isLogin ? <Login setIsLogin={setIsLogin} isLogin={isLogin} /> :
                                    <Register setIsLogin={setIsLogin} isLogin={isLogin} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPage
