import React from 'react'
import Filter from '../components/Filter/Filter'
import CatData from '../components/CatData/CatData'

const Dairy = () => {
    return (
        <section className='flex gap-3 '>
            <Filter />
            <CatData />
        </section>
    )
}

export default Dairy