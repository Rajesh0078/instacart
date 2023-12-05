import React from 'react'
import Filter from '../components/Filter/Filter'
import CatData from '../components/CatData/CatData'

const Grains = () => {
    return (
        <section className='flex gap-3 '>
            <Filter />
            <CatData />
        </section>
    )
}

export default Grains