import React from 'react'
import './loading.css'

const Skeleton = () => {
    return (
        <div className='flex justify-center items-center w-full h-full bg-transparent absolute top-0 z' >
            <span className='loader-x absolute '></span>
        </div>
    )
}

export default Skeleton