import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Vegetables, CartPage, Beverages, Canned, Dairy, Spices, Snacks, Pulses, Pan, Grains, Fruits, Home } from '../pages/NavPages'


const AllNavigations = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/category/vegetables' element={<Vegetables />} />
                <Route path='/category/beverages' element={<Beverages />} />
                <Route path='/category/canned' element={<Canned />} />
                <Route path='/category/dairy' element={<Dairy />} />
                <Route path='/category/fruits' element={<Fruits />} />
                <Route path='/category/grains' element={<Grains />} />
                <Route path='/category/pan' element={<Pan />} />
                <Route path='/category/pulses' element={<Pulses />} />
                <Route path='/category/snacks' element={<Snacks />} />
                <Route path='/category/spices' element={<Spices />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='*' element={<>Page not found</>} />
            </Routes>
        </>
    )
}

export default AllNavigations