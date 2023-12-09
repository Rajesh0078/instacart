import React from 'react'

const Register = ({ setIsLogin, isLogin }) => {


    return (
        <div className='flip-box-back bg-red-400'>
            <span onClick={() => setIsLogin(false)}>login</span>
        </div>
    )
}

export default Register