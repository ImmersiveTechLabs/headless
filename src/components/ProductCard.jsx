import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({title, priceRange, images, handle}) => {
  return (
    <Link to={`/product/${handle}`}>
    <div className=' max-w-[400px] max-h-[500px] flex flex-col'>
        <div>
            <img src={images.edges[0]?.node.transformedSrc} className=' rounded-[20px] w-[200px] aspect-square' alt="" />
        </div>
        <div className='flex flex-col text-[gray] '>
            <span className='font-bold text-[1.3em]'>Rs{priceRange.minVariantPrice.amount}</span>
            <span>{title}</span>
        </div>
    </div>
    </Link>
  )
}

export default ProductCard