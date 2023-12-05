import React from 'react'
import Filter from '../components/Filter/Filter';
import CatData from '../components/CatData/CatData';

const Vegetables = () => {

    return (
        <section className='flex gap-3 h-full'>
            <Filter />
            <CatData />
        </section>
    )
}

export default Vegetables