import React from 'react'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'

const UserPage = () => {
    return (
        <div className='min-h-screen bg-green-800 borderx'>
            <Login />
            <Register />
        </div>
    )
}

export default UserPage