import React, { useContext, useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa"
import { FaXmark } from "react-icons/fa6"
import { store } from "../../App"

import './search.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {

    const navigate = useNavigate()

    const { allData, setAllData, productName, setProductName } = useContext(store)

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

    const searchNavigate = (e) => {
        setSearchValue('')
        document.getElementsByClassName("input").value = ""
        setIsSearchActive(false)
        navigate(`/product/${e.target.innerText}`)
    }


    useEffect(() => {
        fetchAllproducts()
    }, [])



    return (
        <div>
            <div className='md:border border-green-900 md:pe-1 md:ps-3 md:py-1 md:flex hidden items-center rounded-3xl lg:w-[30rem] md:w-[20rem] slide-left relative'>
                <input type="text" placeholder='What do you want..?' className='outline-none input md:w-[94%] hidden md:block' name='search' onChange={changeHandler} autoComplete='off' />
                <span htmlFor="search" className='bg-green-900 hover:bg-orange-600 text-white p-2 rounded-full'><FaSearch /></span>
                {searchValue.length > 1 &&
                    <div className='absolute top-[115%] bg-white w-full  flex flex-wrap gap-2 left-0 max-h-[15rem] border overflow-y-auto p-2'>
                        {searchValue.map((i, index) => {
                            return <span key={index} onClick={searchNavigate} className=' bg-white px-2 py-1 text-[.8rem] rounded-full border' role='button'>{i}</span>
                        })}
                    </div>
                }
            </div>
            {
                !isSearchActive ? <FaSearch className='md:hidden text-2xl text-green-800 slide-left' onClick={() => setIsSearchActive(true)} role='button' /> : <FaXmark className='text-3xl text-green-800' onClick={() => setIsSearchActive(false)} role='button' />
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
                            return <span key={index} onClick={searchNavigate} className='m-1 bg-white px-2 py-1 rounded-full border' role='button'>{i}</span>
                        })
                    }
                </div>
            </div>


        </div>
    )
}

export default SearchBar