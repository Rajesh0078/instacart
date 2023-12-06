import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa"
import { FaXmark } from "react-icons/fa6"

import './search.css'

const SearchBar = () => {

    const [isSearchActive, setIsSearchActive] = useState(false)

    const searchActiveHandler = () => {
        if (!isSearchActive) {
            setIsSearchActive(true)
        }
        else {
            setIsSearchActive(false)
        }
    }

    return (
        <div>
            <div className='md:border border-green-900 md:pe-1 md:ps-3 md:py-1 md:flex hidden items-center rounded-3xl lg:w-[30rem] md:w-[20rem] slide-left '>
                <input type="search" placeholder='What do you want..?' className='outline-none  md:w-[94%] hidden md:block' id='search' />
                <label htmlFor="search" className='bg-green-900 hover:bg-orange-600 text-white p-2 rounded-full'><FaSearch className='' /></label>
            </div>
            {
                !isSearchActive ? <FaSearch className='md:hidden text-2xl text-green-800' onClick={searchActiveHandler} role='button' /> : <FaXmark className='text-3xl text-green-800' onClick={() => setIsSearchActive(false)} role='button' />
            }
            {
                <div className={`absolute top-[100%] right-0 bg-slate-50 w-full p-4 md:hidden ${isSearchActive ? "scale-y-100" : "scale-y-0"}`} style={{ transformOrigin: "top", transition: "all 500ms ease" }} >
                    <div className=' border-green-900 pe-1 ps-3 py-1  flex items-center  border  bg-white'>
                        <input type="search" placeholder='What do you want..?' className='outline-none w-[94%]' id='search' />
                        <label htmlFor="search" className='bg-green-900 hover:bg-orange-600 text-white p-2 rounded-full'><FaSearch className='' /></label>
                    </div>
                </div>
            }
        </div>
    )
}

export default SearchBar