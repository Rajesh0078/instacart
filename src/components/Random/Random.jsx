import React, { useEffect, useState } from 'react'
import './random.css'
import { FaCaretRight } from "react-icons/fa";
import axios from "axios"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { IoIosStar } from "react-icons/io";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import Skeleton from '../Loaders/Skeleton';

const Random = () => {

    const [randomProducts, setRandomProducts] = useState([])

    useEffect(() => {
        axios.get("https://instacart-server-xck1.onrender.com/api/randomproducts").then(res => setRandomProducts(res.data))
    }, [])

    return (
        <>
            <div className='md:block hidden'>
                <div className='flex '>
                    <p className='  text-xl'>New Products </p>
                    <span className='ms-auto text-orange-600'>See All <FaCaretRight className='inline text-md mb-1' /></span>
                </div>
                <Swiper className='mt-2 flex myswiper'
                    slidesPerView={6}
                    modules={[Navigation]}
                    navigation={true}
                >
                    {
                        randomProducts.length ?
                            randomProducts.map((product, index) => {
                                return <SwiperSlide key={index}>
                                    <div className='border rounded-lg shadowx p-3 w-[11.3rem] mx-5'>
                                        <img src={product.image} alt="product" className='w-[7rem] h-[7rem] rounded-md ms-5' />
                                        <p className='h-[2.5rem] text-[.9rem] mt-1 text-center' > {product.name}</p>
                                        <p className='text-green-800 text-sm mt-1'><IoIosStar className='inline me-1 mb-1' />{product.rating}</p>
                                        <div className='flex mt-2 items-center'>
                                            <div>
                                                <p className='text-gray-600 text-xs line-through'>₹{Math.ceil(product.price) * 100}</p>
                                                <p>₹{Math.ceil((product.price) * 100)}</p>
                                            </div>
                                            <span className='ms-auto px-5 py-1 text-white rounded-xl bg-orange-500' role='button'>Add</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            }) : <div className='flex justify-center items-center h-[10rem] w-full '>
                                <div className='loader-x'></div>
                            </div>
                    }
                </Swiper >
            </div >
            <div className='md:hidden block '>
                <div className='flex'>
                    <p className='text-md'>New Products </p>
                    <span className='ms-auto text-md text-orange-600'>See All <FaCaretRight className='inline text-md mb-1' /></span>
                </div>
                <Swiper className='flex'
                    slidesPerView={2}
                >
                    {
                        randomProducts.length ?
                            randomProducts.map((product, index) => {
                                return <SwiperSlide key={index} className='me-2 py-2 border '>
                                    <div className='w-full flex justify-center h-[7rem]'><img src={product.image} alt="" className='w-[80%]' /></div>
                                    <p className='text-center text-[.9rem] product_title font-medium mt-1'>{product.name}</p>
                                    <p className='text-green-800 text-sm text-center  mt-1'><IoIosStar className='inline me-1 mb-1' />{product.rating}</p>
                                    <div className='text-center'>
                                        <div>
                                            <span className='text-gray-600 text-xs line-through me-2'>₹{Math.ceil(product.price) * 100}</span>
                                            <span>₹{Math.ceil((product.price) * 100)}</span>
                                        </div>
                                        <span className=' px-3 py-[.2rem] text-white  rounded-xl text-sm bg-orange-500' role='button'>Add</span>
                                    </div>

                                </SwiperSlide>
                            }) : <div className='flex justify-center items-center h-[10rem] w-full '>
                                <div className='loader-x'></div>
                            </div>
                    }
                </Swiper >
            </div >

        </>
    )
}

export default Random