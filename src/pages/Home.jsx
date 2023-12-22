import React from 'react'
import Random from '../components/Random/Random'

const Home = () => {



    return (
        <section className='px-[1.5rem] lg:px-[5rem] lg:py-0 py-3'>
            <div className=' flex justify-between gap-3 flex-col'>
                <div className='w-full  md:h-[20rem] h-[8.5rem] rounded-2xl md:m-0 mt-[4rem] border green_radient'>
                    {/* <img src="/assets/raj.png" alt="" className=' res_img object-cover' /> */}
                </div>
                <div className=' w-full lg:h-[20%]  flex gap-3 mb-3'>

                    <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded lg:block">
                        <img
                            src='/assets/1.webp'
                            alt={"ka"}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded lg:block">
                        <img
                            src='/assets/2.webp'
                            alt={"ka"}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded lg:block">
                        <img
                            src='/assets/03.webp'
                            alt={"ka"}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                </div>
            </div>
            <Random />
            <br /><br /><br /><br /><br />
        </section>
    )
}

export default Home