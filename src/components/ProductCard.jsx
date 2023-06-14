import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({title, priceRange, images, handle}) => {

  const {currencyCode, amount} = priceRange?.maxVariantPrice
  return (
    <Link to={`/product/${handle}`}>
    <div className=' max-w-[400px] max-h-[500px] flex flex-col'>
        <div>
            <img src={images.edges[0]?.node.transformedSrc} className=' rounded-[20px] w-[200px] aspect-square' alt={images.edges[0]?.node.altText}/>
        </div>
        <div className='flex flex-col  '>
            <span className='text-[0.9em] font-[500]'>{title}</span>
            <span className='font-[400] text-[gray] text-[0.9em]'>{currencyCode} {amount}</span>
        </div>
    </div>
    </Link>
  )
}

export default ProductCard
