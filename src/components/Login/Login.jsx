import React from 'react'

const Login = ({ setIsLogin, isLogin }) => {


    return (
        <div className='flip-box-front bg-blue-500'>
            <span onClick={() => setIsLogin(true)}>register</span>
        </div>
    )
}

export default Login