import React, { useContext } from 'react'
import './sidebar.css'
import { store } from '../../App'
import { MdCancel } from "react-icons/md";
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { HiOutlineLogout } from 'react-icons/hi';

const SidebarMob = () => {

    const { isSideBarOpen, setIsSideBarOpen, setToken, setUser, user } = useContext(store)

    return (
        <div className={`md:hidden z bg-white w-full h-full sidebar ${isSideBarOpen ? "activex" : ""}`}>
            <div className='flex items-center border-b p-3'>
                <Link to={'/'}><img src="/assets/logo.png" alt="logo" className='w-[8rem] slide-right inline' /></Link>
                <MdCancel className='text-green-900 text-3xl inline ms-auto ' role='button' onClick={() => setIsSideBarOpen(false)} />
            </div>
            <div>
                <Navbar className='flex md:hidden' />
            </div>
            {
                user &&
                <div className='flex px-6 items-center bg-gray-800 text-white pb-3'>
                    <span className='text-md'>Logout</span>
                    <HiOutlineLogout className=' text-green-600 hover:text-orange-400 ms-1' role='button' size={25} onClick={() => { localStorage.removeItem('token'); setToken(''); setUser(''); setIsSideBarOpen(false); }} />
                </div>}
        </div>
    )
}

export default SidebarMob