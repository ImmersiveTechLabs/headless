import React, { useEffect, useState } from 'react'
import { fetchAllProducts } from '../apis/productsApi'
import ProductCard from './ProductCard'
import Slider from './Slider'
import {useDispatch, useSelector} from 'react-redux'
import CircularProgress from '@mui/material/CircularProgress';
import Error from './Error'


const Main = () => {
  const {products, error, isFetching} = useSelector(state=>state.products)
  console.log(error)
    const dispatch = useDispatch()
    useEffect(()=>{
     fetchAllProducts(dispatch)
    }, [dispatch])
  return (
    <>
    {
        isFetching ? <div className='w-[100vw] flex justify-center items-center h-[calc(100vh-80px)]'><CircularProgress /></div> :
        error ? <Error error={error} /> :

      <>
      <Slider />
      {
      
        products &&
      <div className='mt-[20px] w-[100vw]'>

            <h1 className='text-[#c09578] text-[2.5em] font-bold text-center'>ALL PRODUCTS</h1>
        
            <div className='flex flex-wrap w-[80vw] justify-center gap-3 mx-auto'  >
      {
        products?.map((p)=>(
            <ProductCard key={p.node.handle} {...p.node} />
            ))
        }
            </div>
  
        </div>
  }
  </>
    }
    </>
  )
}

export default Main 