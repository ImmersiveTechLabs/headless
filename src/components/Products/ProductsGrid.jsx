import React from 'react'
import ProductCard from '../ProductCard'

const ProductsGrid = ({products}) => {
  return (
    <div>
           {

products &&
<div className='mt-[20px] w-[100%]'>

    <h1 className='text-[#c09578] text-[2em] font-[500] mb-[30px] text-center'>ALL PRODUCTS</h1>

    <div className='flex flex-wrap w-[90%] justify-center  gap-[20px] mx-auto'  >
{
products?.map((p)=>(
    <ProductCard key={p.node.handle} {...p.node} />
    ))
}
    </div>

</div>
}
    </div>
  )
}

export default ProductsGrid
