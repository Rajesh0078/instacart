import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { store } from '../App'
import { FaStar } from 'react-icons/fa'
import { toast } from 'react-toastify'

const CartPage = () => {

    const { user, setCartValue } = useContext(store)
    const [area, setArea] = useState('')
    const [cartData, setCartData] = useState([])

    useEffect(() => {
        if (user) {
            axios.get(`https://api.postalpincode.in/pincode/${user.pincode}`).then((res) => setArea(res.data[0].PostOffice))
        }
        fetchCartData();
    }, [user])

    const fetchCartData = async () => {
        try {
            const response = await axios.post('https://instacart-server-xck1.onrender.com/api/cartvalue', { email: user.email });
            setCartData(response.data);
            const cart = await axios.post("https://instacart-server-xck1.onrender.com/api/cartvalue", { email: user.email })
            setCartValue(cart.data)
        } catch (error) {
            console.error('Error fetching cart data:', error.message);
        }
    };
    const handleRemoveProduct = async (productId) => {
        try {
            const res = await axios.post('https://instacart-server-xck1.onrender.com/api/cartremove', { userId: user._id, id: productId });
            fetchCartData();
            toast.warn(res.data)
        } catch (error) {
            console.error('Error removing product from cart:', error.message);
        }
    };




    return (
        <>
            <div className='hidden md:flex gap-4 px-[3rem]'>
                <div className='basis-4/6 '>
                    <div className=' bg-white px-4 py-2 shadowx rounded'>
                        <div className='flex items-center'>

                            <span>Address:-</span>
                            {
                                area ?
                                    <div className='inline text-gray-600'>
                                        <span className='ms-2'>{area[0].Block},</span>
                                        <span> {area[0].Division}, </span>
                                        <span>{user.pincode}</span>
                                    </div> :
                                    <span className='ms-2 text-gray-600'>Please login to get address</span>
                            }
                        </div>
                    </div>
                    <div className='bg-white shadowx rounded mt-3'>
                        <div className=' h-[29rem] overflow-y-auto px-4 py-2 '>
                            {
                                cartData &&
                                cartData.map((i, index) => {
                                    return <div className='flex gap-2 border my-3' key={index}>
                                        <img src={i.image} alt="product" className='w-[10rem] h-[10rem]' />
                                        <div className='w-full'>
                                            <p className='text-[1.2rem]'>{i.name}</p>
                                            <span className='text-gray-500 text-sm'>{i.description}</span><br />
                                            <p className='bg-green-700 inline-block text-white px-1 mt-2'><FaStar className='inline mb-1 me-1' />{i.rating}</p>
                                            <div className='mt-3'>
                                                <span className=' line-through text-gray-500 text-sm me-2'>₹{Math.ceil(i.price * 100)}</span>
                                                <span>₹{Math.ceil((i.price * 100) * 0.9)} <span className='text-xs'>/kg</span></span>
                                            </div>
                                            <div className='mt-2 flex w-full pe-12'>
                                                <span className='text-gray-700'>Delivery by within 3 days</span>
                                                <p className='ms-auto text-xs bg-orange-600 text-white pt-1 px-1' role='button' onClick={e => { handleRemoveProduct(i._id) }}>Remove item</p>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                        <div className='flex py-2 px-12'>
                            <p className='button ms-auto'>Place Order</p>
                        </div>
                    </div>
                </div>
                {
                    cartData &&
                    <div className='basis-2/6 bg-white  h-full py-2 shadowx rounded'>
                        <div className='text-gray-500 px-4 pb-1 border-b border-gray-300 text-xl'>
                            Price Details
                        </div>
                        <div className=' p-3'>
                            <p className='text-green-800 font-medium text-md'>Order Summary</p>
                            <div className='flex mt-3'>
                                <p>Price ({cartData.length} items)</p>
                                <p className='ms-auto'>₹ {Math.ceil(cartData.reduce((a, b) => a + b.price, 0) * 100)}</p>
                            </div>
                            <div className='flex mt-3'>
                                <p>Applied Offer</p>
                                <p className='ms-auto text-green-600'>10%</p>
                            </div>
                            <div className='flex mt-3'>
                                <p>Total Discount</p>
                                <p className='ms-auto text-green-600'>₹{Math.ceil(cartData.reduce((a, b) => a + b.price, 0) * 100) - Math.ceil((cartData.reduce((a, b) => a + b.price, 0) * 100) * 0.9)}</p>
                            </div>
                        </div>
                        <div className='flex items-center px-3 pb-3 flex-wrap gap-3'>

                            <span>Address:-</span>
                            {
                                area ?
                                    <div className='inline text-gray-600'>
                                        <span className=''>{area[0].Block},</span>
                                        <span> {area[0].Division}, </span>
                                        <span>{user.pincode}</span>
                                    </div> :
                                    <span className='ms-2 text-gray-600'>Please login to get address</span>
                            }
                        </div>
                        <hr />
                        <div className='flex mt-3 px-3 py-1 pb-2'>
                            <p>Total Amount</p>
                            <p className='ms-auto text-xl'>₹ {Math.ceil((cartData.reduce((a, b) => a + b.price, 0) * 100) * 0.9)}</p>
                        </div>
                        <hr />
                        <div className='flex py-2 pt-4  justify-center'>
                            <p className='button '>Place Order</p>
                        </div>
                        <p className='text-center'>or</p>
                        <div className='flex py-2  justify-center'>
                            <p className='text-green-900 '>Continue Shopping</p>
                        </div>
                    </div>
                }
            </div>
            <div className='md:hidden pt-[3.5rem] px-3'>
                <div className='basis-4/6 '>
                    <div className=' bg-white px-4 py-2 shadowx rounded'>
                        <div className='flex items-center'>

                            <span>Address:-</span>
                            {
                                area ?
                                    <div className='inline text-gray-600'>
                                        <span className='ms-2'>{area[0].Block},</span>
                                        <span> {area[0].Division}, </span>
                                        <span>{user.pincode}</span>
                                    </div> :
                                    <span className='ms-2 text-gray-600'>Please login to get address</span>
                            }
                        </div>
                    </div>
                    <div className='bg-white shadowx rounded mt-3'>
                        <div className=' h-[21rem] overflow-y-auto px-4 py-2 '>
                            {
                                cartData &&
                                cartData.map((i, index) => {
                                    return <div className='flex gap-2 border my-3' key={index}>
                                        <img src={i.image} alt="product" className='w-[8rem] h-[8rem]' />
                                        <div className='w-full'>
                                            <p className='text-[1.1rem]'>{i.name}</p>
                                            <span className='text-gray-500 text-sm product_title'>{i.description}</span>
                                            <p className='bg-green-700 text-sm inline-block text-white px-1 mt-1'><FaStar className='inline mb-1 me-1' />{i.rating}</p>
                                            <div className='mt-1'>
                                                <span className=' line-through text-gray-500 text-sm me-2'>₹{Math.ceil(i.price * 100)}</span>
                                                <span>₹{Math.ceil((i.price * 100) * 0.9)} <span className='text-xs'>/kg</span></span>
                                            </div>
                                            <div className='mt-1 flex w-full pe-2'>
                                                <span className='text-gray-700 text-sm'>Delivery by within 3 days</span>
                                                <p className='ms-auto text-xs bg-orange-600 text-white pt-1 px-1 pb-1 mt-[-.4rem]' role='button' onClick={e => { handleRemoveProduct(i._id) }}>Remove item</p>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
                {
                    cartData &&
                    <div className='basis-2/6 bg-white mt-3 h-full py-2 shadowx rounded'>
                        <div className='text-gray-500 px-4 pb-1 border-b border-gray-300 text-xl'>
                            Price Details
                        </div>
                        <div className=' p-3'>
                            <p className='text-green-800 font-medium text-md'>Order Summary</p>
                            <div className='flex mt-3'>
                                <p>Price ({cartData.length} items)</p>
                                <p className='ms-auto'>₹ {Math.ceil(cartData.reduce((a, b) => a + b.price, 0) * 100)}</p>
                            </div>
                            <div className='flex mt-3'>
                                <p>Applied Offer</p>
                                <p className='ms-auto text-green-600'>10%</p>
                            </div>
                            <div className='flex mt-3'>
                                <p>Total Discount</p>
                                <p className='ms-auto text-green-600'>₹{Math.ceil(cartData.reduce((a, b) => a + b.price, 0) * 100) - Math.ceil((cartData.reduce((a, b) => a + b.price, 0) * 100) * 0.9)}</p>
                            </div>
                        </div>
                        <div className='flex items-center px-3 pb-3 flex-wrap gap-3'>

                            <span>Address:-</span>
                            {
                                area ?
                                    <div className='inline text-gray-600'>
                                        <span className=''>{area[0].Block},</span>
                                        <span> {area[0].Division}, </span>
                                        <span>{user.pincode}</span>
                                    </div> :
                                    <span className='ms-2 text-gray-600'>Please login to get address</span>
                            }
                        </div>
                        <hr />
                        <div className='flex mt-3 px-3 py-1 pb-2'>
                            <p>Total Amount</p>
                            <p className='ms-auto text-xl'>₹ {Math.ceil((cartData.reduce((a, b) => a + b.price, 0) * 100) * 0.9)}</p>
                        </div>
                        <hr />
                        <div className='flex py-2 pt-4  justify-center'>
                            <p className='button '>Place Order</p>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default CartPage