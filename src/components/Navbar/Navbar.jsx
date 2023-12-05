import React, { useContext, useEffect } from 'react'
import './navbar.css'
import { NavLink } from "react-router-dom"
import { store } from '../../App'
import axios from 'axios'

const Navbar = () => {
    const { setCategory, category, setCatData, pageNo, setPageNo, setIsSideBarOpen } = useContext(store)

    useEffect(() => {
        setCatData([])
        if (category) {
            axios.post(`https://instacart-server-xck1.onrender.com/api/products/${category}`, { page: pageNo }).then((res) => setCatData(res.data))
        }
    }, [category, setCatData, pageNo])

    const categoryCtrl = (e) => {
        setPageNo(1)
        setIsSideBarOpen(false)
        setCategory(e.target.innerHTML)
    }
    const sideBarClose = () => {
        setIsSideBarOpen(false)
    }

    return (
        <>
            <div className='bg-green-800 pt-[4.6rem] pb-2 mb-2 text-slate-100  gap-3 navlink w-full md:flex hidden '>
                <NavLink to={'/'} className="slide-right text-gray-200" >Home</NavLink>
                <NavLink to={'/category/paan Corner'} className="slide-right text-gray-200" onClick={categoryCtrl}>Paan Corner</NavLink>
                <NavLink to={'/category/vegetables'} className="slide-right text-gray-200" onClick={categoryCtrl}>Vegetables</NavLink>
                <NavLink to={'/category/fruits'} className="slide-right text-gray-200" onClick={categoryCtrl}>Fruits</NavLink>
                <NavLink to={'/category/spices'} className="slide-right text-gray-200" onClick={categoryCtrl}>Spices</NavLink>
                <NavLink to={'/category/grains'} className="slide-left text-gray-200" onClick={categoryCtrl}>Grains</NavLink>
                <NavLink to={'/category/beverages'} className="slide-left text-gray-200" onClick={categoryCtrl}>Beverages</NavLink>
                <NavLink to={'/category/snacks'} className="slide-left text-gray-200" onClick={categoryCtrl}>Snacks</NavLink>
                <NavLink to={'/category/pulses'} className="slide-left text-gray-200" onClick={categoryCtrl}>Pulses</NavLink>
                <NavLink to={'/category/dairy'} className="slide-left text-gray-200" onClick={categoryCtrl}>Dairy</NavLink>
                <NavLink to={'/category/canned'} className="slide-left text-gray-200" onClick={categoryCtrl}>Canned Goods</NavLink>
            </div>
            <div className='bg-gray-800 pt-3 pb-1 text-slate-100  px-3 gap-1 navlink flex-col flex md:hidden '>
                <NavLink to={'/'} className="slide-right text-gray-200 inline" onClick={sideBarClose}>Home</NavLink>
                <NavLink to={'/category/pan'} className="slide-right text-gray-200 inline" onClick={categoryCtrl}>Paan Corner</NavLink>
                <NavLink to={'/category/vegetables'} className="slide-right text-gray-200 inline" onClick={categoryCtrl}>Vegetables</NavLink>
                <NavLink to={'/category/fruits'} className="slide-right text-gray-200 inline" onClick={categoryCtrl}>Fruits</NavLink>
                <NavLink to={'/category/spices'} className="slide-right text-gray-200 inline" onClick={categoryCtrl}>Spices</NavLink>
                <NavLink to={'/category/grains'} className="slide-left text-gray-200 inline" onClick={categoryCtrl}>Grains</NavLink>
                <NavLink to={'/category/beverages'} className="slide-left text-gray-200 inline" onClick={categoryCtrl}>Beverages</NavLink>
                <NavLink to={'/category/snacks'} className="slide-left text-gray-200 inline" onClick={categoryCtrl}>Snacks</NavLink>
                <NavLink to={'/category/pulses'} className="slide-left text-gray-200 inline" onClick={categoryCtrl}>Pulses</NavLink>
                <NavLink to={'/category/dairy'} className="slide-left text-gray-200 inline" onClick={categoryCtrl}>Dairy</NavLink>
                <NavLink to={'/category/canned'} className="slide-left text-gray-200 inline" onClick={categoryCtrl}>Canned Goods</NavLink>
            </div>
        </>
    )
}

export default Navbar