import ProductsGrid from '../components/Products/ProductsGrid'
import React, { useEffect, useState } from 'react'
import { fetchAllProducts } from '../apis/productsApi'
import {useDispatch, useSelector} from 'react-redux'



const Products = () => {
    const {products, error, isFetching} = useSelector(state=>state.products)
    console.log(error)
      const dispatch = useDispatch()
      useEffect(()=>{
       fetchAllProducts(dispatch)
      }, [dispatch])
  return (
    <div>
        <ProductsGrid products={products} />
    </div>
  )
}

export default Products
