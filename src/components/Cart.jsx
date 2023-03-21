import React, { useEffect, useState } from 'react'
import { getCart } from '../apis/cartApis'
import CartInfo from './CartInfo'
import CartItem from './CartItem'

const Cart = () => {
    const [cart, setCart] = useState(null)
    const cartId = localStorage.getItem('cartId')
    useEffect(()=>{
       const func = async ()=>{
        const {data } = await getCart(cartId)
        setCart(data.data.cart)
        }
        func()
    }, [cartId])

  return (
    <div className='w-[90%] flex  mx-auto'>
        <div className='w-[70%] flex flex-col h-[100%] gap-4'>
            {
            cart?.lines?.edges?.map((line)=>(
                <CartItem {...line.node} />
                ))
            }
        </div>
        <div className='w-[30%] border-[#c7c7c7] border-2 h-[100%]'>
            <CartInfo cart={cart} />
        </div>
    </div>
  )
}

export default Cart
