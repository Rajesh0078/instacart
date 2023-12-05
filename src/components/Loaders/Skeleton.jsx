import React from 'react'
import './loading.css'

const Skeleton = () => {
    return (
        <div className='flex h-[rem] w-full gap-5 '>
            <div className='loader basis-1/5 shadowx rounded-md h-full'>
                <div className='img h-[8.5rem] w-full bg-[#e4e4e4] rounded-md'></div>
                <div className='py-4 px-3'>
                    <p className='py-4 bg-[#e4e4e4] px-2 h4'></p>
                    <div className='py-7 bg-[#e4e4e4] px-2 cont'></div>
                </div>
            </div>
            <div className='loader basis-1/5 shadowx rounded-md h-full'>
                <div className='img h-[8.5rem] w-full bg-[#e4e4e4] rounded-md'></div>
                <div className='py-4 px-3'>
                    <p className='py-4 bg-[#e4e4e4] px-2 h4'></p>
                    <div className='py-7 bg-[#e4e4e4] px-2 cont'></div>
                </div>
            </div>
            <div className='loader basis-1/5 shadowx rounded-md h-full'>
                <div className='img h-[8.5rem] w-full bg-[#e4e4e4] rounded-md'></div>
                <div className='py-4 px-3'>
                    <p className='py-4 bg-[#e4e4e4] px-2 h4'></p>
                    <div className='py-7 bg-[#e4e4e4] px-2 cont'></div>
                </div>
            </div>
            <div className='loader basis-1/5 shadowx rounded-md h-full'>
                <div className='img h-[8.5rem] w-full bg-[#e4e4e4] rounded-md'></div>
                <div className='py-4 px-3'>
                    <p className='py-4 bg-[#e4e4e4] px-2 h4'></p>
                    <div className='py-7 bg-[#e4e4e4] px-2 cont'></div>
                </div>
            </div>
            <div className='loader basis-1/5 shadowx rounded-md h-full'>
                <div className='img h-[8.5rem] w-full bg-[#e4e4e4] rounded-md'></div>
                <div className='py-4 px-3'>
                    <p className='py-4 bg-[#e4e4e4] px-2 h4'></p>
                    <div className='py-7 bg-[#e4e4e4] px-2 cont'></div>
                </div>
            </div>
            <div className='loader basis-1/5 shadowx rounded-md h-full'>
                <div className='img h-[8.5rem] w-full bg-[#e4e4e4] rounded-md'></div>
                <div className='py-4 px-3'>
                    <p className='py-4 bg-[#e4e4e4] px-2 h4'></p>
                    <div className='py-7 bg-[#e4e4e4] px-2 cont'></div>
                </div>
            </div>


        </div>
    )
}

export default Skeleton