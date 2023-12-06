import React, { useContext, useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa"
import { FaXmark } from "react-icons/fa6"
import { store } from "../../App"

import './search.css'
import axios from 'axios'

const SearchBar = () => {

    const { allData, setAllData } = useContext(store)

    const [isSearchActive, setIsSearchActive] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    const fetchAllproducts = async () => {
        try {
            const response = await axios.get("https://instacart-server-xck1.onrender.com/api/allproducts")
            setAllData(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    const changeHandler = (e) => {
        if ((e.target.value).length >= 2) {
            setSearchValue(allData.filter((i) => i.toUpperCase().includes((e.target.value).toUpperCase())))
        } else {
            setSearchValue([])
        }
    }

    useEffect(() => {
        fetchAllproducts()
    }, [])


    return (
        <div>
            <div className='md:border border-green-900 md:pe-1 md:ps-3 md:py-1 md:flex hidden items-center rounded-3xl lg:w-[30rem] md:w-[20rem] slide-left '>
                <input type="search" placeholder='What do you want..?' className='outline-none  md:w-[94%] hidden md:block' id='search' name='search' />
                <label htmlFor="search" className='bg-green-900 hover:bg-orange-600 text-white p-2 rounded-full'><FaSearch className='' /></label>
            </div>
            {
                !isSearchActive ? <FaSearch className='md:hidden text-2xl text-green-800' onClick={() => setIsSearchActive(true)} role='button' /> : <FaXmark className='text-3xl text-green-800' onClick={() => setIsSearchActive(false)} role='button' />
            }

            <div className={`absolute top-[100%] right-0 bg-slate-50 w-full p-4 md:hidden ${isSearchActive ? "scale-y-100" : "scale-y-0"}`} style={{ transformOrigin: "top", transition: "all 500ms ease" }} >
                <div className=' border-green-900 pe-1 ps-3 py-1  flex items-center  border  bg-white'>
                    <input type="text" placeholder='What do you want..?' className='outline-none w-[94%]' name='search' onChange={changeHandler} autoComplete='off' />
                    <span htmlFor="searchFpr" className='bg-green-900 hover:bg-orange-600 text-white p-2 rounded-full'><FaSearch className='' role='button' /></span>
                </div>
                <div className='flex flex-wrap mt-2'>
                    {
                        isSearchActive && searchValue &&
                        searchValue.map((i, index) => {
                            return <span key={index} className='m-1 bg-white px-2 py-1 rounded-xl border'>{i}</span>
                        })
                    }
                </div>
            </div>


        </div>
    )
}

export default SearchBar