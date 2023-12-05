import React from 'react'
import { FaSearch } from "react-icons/fa"

const SearchBar = () => {
    return (
        <div className='md:border border-green-900 md:pe-1 md:ps-3 md:py-1 flex items-center rounded-3xl lg:w-[30rem] md:w-[20rem] slide-left '>
            <input type="search" placeholder='What do you want..?' className='outline-none  md:w-[94%] hidden md:block' id='search' />
            <label htmlFor="search" className='bg-green-900 hover:bg-orange-600 text-white p-2 rounded-full'><FaSearch className='' /></label>
        </div>
    )
}

export default SearchBar