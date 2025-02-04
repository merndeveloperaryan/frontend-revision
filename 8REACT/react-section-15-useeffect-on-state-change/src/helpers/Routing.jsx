import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Users from '../components/Users'
import Products from '../components/Products'
import Cart from '../components/Cart'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/products' element={<Products />} />
        <Route path='/carts' element={<Cart />} />
    </Routes>
  )
}

export default Routing