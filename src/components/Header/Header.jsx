import React, { useContext, useEffect } from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import { FaBars, FaShoppingCart, FaUser } from 'react-icons/fa'
import { HiOutlineLogout } from "react-icons/hi";
import SearchBar from '../SearchBar/SearchBar'
import UserModal from '../userModal/UserModal'
import { store } from '../../App'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import CartValue from '../CatData/CartValue';
import { useSelector } from "react-redux"

const Header = () => {

    const { setisModalOpen, token, setToken, setIsSideBarOpen, user, setUser, cartValue } = useContext(store)

    const tokenx = localStorage.getItem('token')

    useEffect(() => {
        if (token) {
            axios.get("https://instacart-server-xck1.onrender.com/api/getuser", {
                headers: {
                    "x-token": token
                }
            }).then((res) => { setUser(res.data) })
            if (user.fullname) {
                toast.success("login success")
                setisModalOpen(false)
            }
        }
        if (tokenx) {
            axios.get("https://instacart-server-xck1.onrender.com/api/getuser", {
                headers: {
                    "x-token": tokenx
                }
            }).then((res) => { setUser(res.data) })
        }

    }, [token, user.fullname, setUser, tokenx])

    const sidebarHandler = () => {
        setIsSideBarOpen(true)
    }

    const userx = useSelector((state) => state.userReducer.user)
    console.log(userx)
    localStorage.setItem('user', 'Rajesh')
    return (
        <>
            <header className='fixed md:px-[3rem] lg:px-[5rem] shadow-md justify-between w-full py-3  md:flex hidden z bg-white'>
                <div className='flex items-center gap-5'>
                    <Link to={'/'}><img src="/assets/logo.png" alt="logo" className='logo slide-right' /></Link>
                </div>
                <div className='flex gap-6 items-center '>
                    <SearchBar />
                    <div className='flex gap-5 items-center'>
                        <CartValue />
                        <div>
                            {user.fullname ? <div className='border px-3 py-1 bg-slate-200 rounded-full logout '>
                                <span> {user.fullname}</span>
                                <HiOutlineLogout className='inline text-green-900 hover:text-orange-600 ms-2 text-2xl ' role='button' onClick={() => { toast.success("logout success"); setToken(''); setUser(""); localStorage.removeItem('token'); }} />
                            </div> : <Link to={'/login'}><FaUser size={22} className='text-green-900 hover:text-orange-600 slide-left cursor-pointer' /></Link>}
                        </div>
                        {/* <UserModal /> */}
                    </div>
                </div >
            </header >
            <ToastContainer autoClose={2000} />
            <header className='md:hidden fixed shadow-md w-full py-4 px-3 flex justify-between z items-center bg-white'>
                <div className='flex gap-3 items-center'>
                    <FaBars size={20} className='text-green-900 slide-right' onClick={sidebarHandler} role='button' />
                    <Link to={'/'}><img src="/assets/logo.png" alt="logo" className='w-[7rem]  slide-right' /></Link>
                </div>
                <div className='flex gap-3 md:gap-9 items-center '>
                    <SearchBar />
                    <div className='flex gap-3 items-center'>
                        <Link to={"/cart"} className='relative'>
                            <FaShoppingCart size={25} className='text-green-900 hover:text-orange-600 slide-left' />
                            {
                                cartValue && user && <span className='absolute top-[-.8rem] text-sm text-white rounded-full left-[70%] bg-orange-600 px-[.4rem]'>{cartValue.length}</span>
                            }
                        </Link>
                        <div>
                            {user.fullname ? <div className='border px-2 py-1 bg-slate-200 rounded-full'>
                                <FaUser className='inline mb-1 me-2' />{user.fullname.split(' ').length <= 1 ? user.fullname : user.fullname.split(' ')[1]} {user.fullname.split(' ').length > 1 && user.fullname.split(" ")[0][0]}
                                <HiOutlineLogout className='hidden text-green-900 hover:text-orange-600 ms-1 ' role='button' size={28} onClick={() => { setToken(''); localStorage.removeItem('token'); setUser('') }} />
                            </div> : <Link to={'/login'}> <FaUser size={22} className='text-green-900 hover:text-orange-600 slide-left cursor-pointer' /></Link>}
                        </div>
                        {/* <UserModal /> */}
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
