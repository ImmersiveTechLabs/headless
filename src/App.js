import React from 'react'
import Main from './components/Main'
import Navbar from './components/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SingleProduct from './components/SingleProduct'
import Login from './components/Login'
import Cart from './components/Cart'



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/product/:handle' element={<SingleProduct />}/>
        <Route path='/cart' element={<Cart   />}/>
      </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App
