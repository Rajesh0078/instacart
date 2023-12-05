import React from 'react'
import Filter from '../components/Filter/Filter'
import CatData from '../components/CatData/CatData'

const Canned = () => {
    return (
        <section className='flex gap-3 md:px-[5rem]'>
            <Filter />
            <CatData />
        </section>
    )
}

export default Canned