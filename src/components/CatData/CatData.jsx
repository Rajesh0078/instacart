import React, { useContext, useEffect } from 'react'
import { store } from '../../App'
import { GrSort } from "react-icons/gr";
import './catdata.css'
import { FaRegHeart } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

const CatData = () => {
    const { catData, setCategory, category, setPageNo, user, setCartValue } = useContext(store)

    let params = useParams()

    useEffect(() => {
        setCategory(params.vegetables)
    }, [])


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
    const navigate = useNavigate()

    const productClickHandler = (...values) => {
        if (values[1].target.innerHTML !== "Add to cart") {
            navigate(`/product/${values[0]}`)
        }
    }

    return (
        <>
            <div className='md:basis-5/5 rounded-md py-2  mar px-3 shadowx'>
                <div className='flex justify-between border-b border-slate-400 pt-2 pb-2  text-sm md:text-[1rem]'>
                    <span className=' tracking-in-contract'>showing {catData.startingProducts} - {catData.endProducts} of {catData.totalproducts} results of "<span className='text-orange-600'>{category}</span>"</span>
                    <div className=' tracking-in-contract'>sort <GrSort className='inline text-[1rem] ms-2 mb-1' /></div>
                </div>
                <div className='flex py-1  flex-wrap w-full'>
                    {
                        catData.totalproducts ?
                            catData.products.map((i, index) => {
                                return <div className='md:basis-1/5 basis-1/3   md:p-2 cardxx' key={index} onClick={(e) => productClickHandler(i.name, e)} role='button'>
                                    <div className='shadowme rounded-md'>
                                        <div className='flex justify-center pt-2'>
                                            <img src={i.image} alt="product" className='md:h-[8rem] h-[5rem] rounded-md object-cover object-center' />
                                        </div>
                                        <div className='text-center'>
                                            <p className='text-[0.9rem] text-center p-1 product_title font-medium '>{i.name}</p>
                                            <h6 className='text-[0.7rem] text-gray-500 text-center px-2 cutoff'>{i.description}</h6>
                                            <div className=' px-3'>
                                                <div className='pt-2 flex items-center justify-center text-sm'>
                                                    <span className=' line-through text-gray-500 text-xs me-2'>₹{Math.ceil(i.price * 100)}</span>
                                                    <span>₹{Math.ceil((i.price * 100) * 0.9)} <span className='text-xs'>/kg</span></span>
                                                    <span className='ms-auto md:block hidden' role='button'><FaRegHeart className='text-orange-600' /></span>
                                                </div>
                                            </div>
                                            <span className='md:button text-sm bg-green-800 text-white px-2 py-1 inline-block rounded-md my-3' role='button' onClick={e => { e.preventDefault(); addProductToCart(i._id) }}>Add to cart</span>
                                        </div>
                                    </div>
                                </div>
                            })
                            : <div className='flex justify-center items-center h-[40rem] w-full '>
                                <div className='loader-x'></div>
                            </div>
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
        </>
    )
}

export default CatData
