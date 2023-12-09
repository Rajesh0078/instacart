import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import Random from '../components/Random/Random'

const SearchedProducts = () => {

    const { productName } = useParams()
    const [searchData, setSearchData] = useState('')

    useEffect(() => {
        axios.post("https://instacart-server-xck1.onrender.com/api/search", { productName: productName }).then((res) => setSearchData(res.data))
    }, [productName])

    if (searchData) {
        console.log(searchData)
    }

    return (
        <>
            <div className="bg-white">
                {
                    searchData ?
                        <div className="md:pt-[.5rem] pt-[5rem]">
                            <nav aria-label="Breadcrumb">
                                <div className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                                    {
                                        <div >
                                            <div className="flex items-center">
                                                <Link to={`/`} className="mr-2 text-sm font-medium text-gray-900">
                                                    Home
                                                </Link>
                                                <svg
                                                    width={16}
                                                    height={20}
                                                    viewBox="0 0 16 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                    className="h-5 w-4 text-gray-300 me-2"
                                                >
                                                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                                </svg>
                                                <Link to={`/category/${searchData.category}`} className="mr-2 text-sm font-medium text-gray-900" >
                                                    {searchData.category}
                                                </Link>
                                                <svg
                                                    width={16}
                                                    height={20}
                                                    viewBox="0 0 16 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                    className="h-5 w-4 text-gray-300"
                                                >
                                                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                                </svg>
                                            </div>
                                        </div>
                                    }
                                    <span className="text-sm">
                                        <span className="font-medium text-gray-500 hover:text-gray-600">
                                            {searchData.name}
                                        </span>
                                    </span>
                                </div>
                            </nav>

                            {/* Image gallery */}
                            <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                                <div className="aspect-h-3 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                                    <img
                                        src={searchData.image}
                                        alt={"ka"}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                                    <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                                        <img
                                            src={searchData.image}
                                            alt={"ji"}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                                        <img
                                            src={searchData.image}
                                            alt={"ka"}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                </div>
                                <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                                    <img
                                        src={searchData.image}
                                        alt={"ka"}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                            </div>

                            {/* Product info */}
                            <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                                <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{searchData.name}</h1>
                                </div>

                                {/* Options */}
                                <div className="mt-4 lg:row-span-3 lg:mt-0">
                                    <h2 className="sr-only">Product information</h2>
                                    <span className="text-xl line-through me-2 tracking-tight text-gray-600">₹{Math.ceil((searchData.price) * 100)}</span>
                                    <span className="text-3xl tracking-tight text-gray-900">₹{Math.ceil(((searchData.price) * 100) * 0.9)}</span>
                                    <p className='text-green-600 mt-1'>10% offer</p>
                                    {/* Reviews */}
                                    <div className="mt-6">
                                        <h3 className="sr-only">Reviews</h3>
                                        <div className="flex items-center">
                                            <div className="flex items-center">
                                                {[2, 3, 4, 5, 6].map((rat) => (
                                                    <FaStar
                                                        key={rat}
                                                        className={`h-5 w-5 flex-shrink-0 ${Math.ceil(searchData.rating) > rat ? 'text-orange-500' : 'text-gray-200'}`}
                                                        aria-hidden="true"
                                                    />
                                                ))}
                                            </div>
                                            <p className="sr-only">{searchData.rating} out of 5 stars</p>
                                            <span className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                                {Math.ceil(Math.random() * 28)} reviews
                                            </span>

                                        </div>
                                        <p className='mt-5'>Delivery by within 3 days</p>
                                    </div>

                                    <div className='btn text-center lg:mt-12 mt-5'>
                                        Add to cart
                                    </div>


                                </div>
                                <div className="pt-10 pb-2 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-3 lg:pr-8 lg:pt-6">
                                    {/* Description and details */}
                                    <div>
                                        <h3 className="sr-only">Description</h3>

                                        <div className="space-y-6">
                                            <p className="text-base text-gray-900">{searchData.description}</p>
                                        </div>
                                    </div>

                                    <div className="mt-5">
                                        <h2 className="text-sm font-medium text-gray-900">Details</h2>

                                        <div className="mt-2 space-y-6">
                                            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vero corrupti, nam dolorum repellat minus incidunt ipsum harum consequuntur earum, placeat consectetur velit cupiditate fugiat distinctio architecto. Ullam, sed! Nihil.</p>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <h2 className="text-sm font-medium text-gray-900">Store Details</h2>

                                        <div className="mt-2 space-y-3">
                                            <p className="text-sm text-gray-600">{searchData.description}</p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className='md:px-[5rem] px-[1rem]'>
                                <Random />
                            </div>
                        </div>
                        : <div className='flex justify-center items-center h-[40rem] w-full '>
                            <div className='loader-x'></div>
                        </div>
                }
            </div>
            <br />
        </>
    )

}

export default SearchedProducts
