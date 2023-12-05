import React from 'react'
import { FaFilter } from "react-icons/fa";


const Filter = () => {
    return (
        <div className='basis-1/5 rounded-md py-2 px-3 shadowx  h-[35rem]'>
            <div>
                <div className='flex items-center border-b border-gray-400 pb-1 pt-2'>
                    <p className='tracking-in-contract text-xl font-medium text-green-900'>Filters</p>
                    <FaFilter className='ms-auto text-green-900' />
                </div>
                <form>

                </form>
            </div>


        </div>
    )
}

export default Filter