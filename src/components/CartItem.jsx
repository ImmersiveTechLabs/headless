import React from 'react'

const CartItem = ({merchandise}) => {
    const {product} = merchandise
  return (
    <div className='w-[90%] h-[220px] flex mx-auto border-2 border-[#c7c7c7]'>
        <div className='w-[30%]'>
            <img className='w-[200px] aspect-square mx-auto' src={product.images.edges[0]?.node.url} alt="" />
        </div>
        <div className='flex flex-col justify-center gap-3 w-[70%]'>
            <span>Name: {product.title}</span>
            <span>Price: {product.priceRange.minVariantPrice.amount}</span>
            <span>Currency: {product.priceRange.minVariantPrice.currencyCode}</span>
        </div>
    </div>
  )
}

export default CartItem
