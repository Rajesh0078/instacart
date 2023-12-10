import React, { useContext, useEffect } from 'react'
import { store } from '../../App'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import axios from 'axios'

const CartValue = () => {

    const { cartValue, user, setCartValue } = useContext(store)

    useEffect(() => {
        if (user) {
            axios.post("https://instacart-server-xck1.onrender.com/api/cartvalue", { email: user.email }).then((res) => setCartValue(res.data))
        }
    }, [user, setCartValue])

    return (
        <Link className='relative' to={"/cart"}>
            <FaShoppingCart size={25} className='text-green-900 hover:text-orange-600 slide-left' />
            {
                cartValue && user &&
                <div className=' bg-orange-600 absolute top-[-20px] text-center right-[-14px] rounded-full  px-[.4rem] text-[.9rem] text-white'>{cartValue.length}</div>
            }
        </Link>
    )
}

export default CartValue