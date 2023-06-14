import React from 'react'
import Main from './components/Main'
import Navbar from './components/Header/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SingleProduct from './components/SingleProduct'
import Login from './components/Login'
import Cart from './components/Cart'
import Date from './components/Date'
import Announcment from './components/Header/Announcment'
import Products from './Pages/Products'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div>
      <BrowserRouter>
              <ToastContainer    />
      <Announcment label="70% OFF! Hurry UP Now." />
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/product/:handle' element={<SingleProduct />}/>
        <Route path='/cart' element={<Cart   />}/>
        <Route path='/test/:productId' element={<Date />}/>
      </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App
