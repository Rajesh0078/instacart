import React from 'react'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
import "../components/Login/login.css"

const UserPage = () => {
    return (
        <div className='md:h-[36rem] h-[53rem] relative overflow-hidden w-full md:pt-0 pt-[2rem]'>
            <div className='container after:bg-green-900 after:h-[40rem] after:bottom-[-20rem] h-full w-full'>
                <div className=' flex justify-center items-center h-full w-full'>
                    <div className='shadowx rounded-xl p-2 bg-white h-[85%] w-[90%]'>
                        <Login />
                        <Register />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPage
