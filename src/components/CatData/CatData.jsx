import React, { useContext } from 'react'
import { store } from '../../App'
import { GrSort } from "react-icons/gr";
import Skeleton from '../Loaders/Skeleton';
import './catdata.css'
import { FaRegHeart } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';

const CatData = () => {
    const { catData, category, setPageNo, user, setCartValue } = useContext(store)


    const fetchCartData = async () => {
        try {
            const cart = await axios.post("https://instacart-server-xck1.onrender.com/api/cartvalue", { email: user.email })
            setCartValue(cart.data)
        } catch (error) {
            console.error('Error fetching cart data:', error.message);
        }
    }

    const addProductToCart = async (pid) => {
        try {
            const res = await axios.post("https://instacart-server-xck1.onrender.com/api/cart", { id: pid, userId: user._id })
            fetchCartData()
            toast.success(res.data)

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className='basis-4/5 rounded-md py-2 px-3 shadowx'>
            <div className='flex justify-between border-b border-slate-400 pt-2 pb-2'>
                <span className=' tracking-in-contract'>showing {catData.startingProducts} - {catData.endProducts} of {catData.totalproducts} results of "<span className='text-orange-600'>{category}</span>"</span>
                <div className=' tracking-in-contract'>sort <GrSort className='inline text-[1rem] ms-2 mb-1' /></div>
            </div>
            <div className='flex py-1 flex-wrap w-full'>
                {
                    catData.totalproducts ?
                        catData.products.map((i, index) => {
                            return <div className='basis-1/5 p-3 ' key={index}>
                                <div className='shadowx rounded-md'>
                                    <div className='flex justify-center'>
                                        <img src={i.image} alt="product" className='h-[8rem] rounded-md object-cover object-center' />
                                    </div>
                                    <div className='text-center'>
                                        <p className='text-[0.9rem] text-center p-1 product_title font-medium '>{i.name}</p>
                                        <h6 className='text-[0.7rem] text-gray-500 text-center px-2 cutoff'>{i.description}</h6>
                                        <div className='text-left px-3'>
                                            <div className='pt-2 flex items-center'>
                                                <span className=' line-through text-gray-500 text-sm me-2'>₹{Math.ceil(i.price * 100)}</span>
                                                <span>₹{Math.ceil((i.price * 100) * 0.9)} <span className='text-xs'>/kg</span></span>
                                                <span className='ms-auto' role='button'><FaRegHeart className='text-orange-600' /></span>
                                            </div>
                                        </div>
                                        <span className='button my-3' role='button' onClick={e => { addProductToCart(i._id) }}>Add to cart</span>
                                    </div>
                                </div>
                            </div>
                        })
                        : <Skeleton />
                }


            </div>
            <div className='border-t border-slate-400 pt-3 pb-2 text-center flex justify-center'>
                {
                    Array.from({ length: catData.totalPages }, (i, index) => {
                        return <p className='mx-2 border-gray-400 border h-8 w-[2rem] align-middle rounded pt-1' role='button' key={index} onClick={(e) => setPageNo(parseInt(e.target.innerText))}>{index + 1}</p>

                    })
                }
            </div>
        </div>
    )
}

export default CatData