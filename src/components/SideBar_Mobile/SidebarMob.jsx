import React, { useContext } from 'react'
import './sidebar.css'
import { store } from '../../App'
import { MdCancel } from "react-icons/md";
import { Link } from 'react-router-dom';

const SidebarMob = () => {

    const { isSideBarOpen, setIsSideBarOpen } = useContext(store)

    return (
        <div className={`md:hidden bg-white w-full h-[30rem] sidebar ${isSideBarOpen ? "active" : ""}`}>
            <div className='flex items-center border-b p-3'>
                <Link to={'/'}><img src="/assets/logo.png" alt="logo" className='w-[8rem] slide-right inline' /></Link>
                <MdCancel className='text-green-900 text-3xl inline ms-auto ' role='button' onClick={() => setIsSideBarOpen(false)} />
            </div>
            <div>

            </div>
        </div>
    )
}

export default SidebarMob