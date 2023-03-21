import React from 'react'

const CartInfo = ({cart}) => {
    console.log(cart)
  return (
    <div className='w-[100%] h-[400px]'>
        <div>
            <div className='flex justify-between w-[80%] mx-auto'>
                <span>Total Quantity</span>
                <span>{cart?.totalQuantity}</span>
            </div>
            <div className='flex justify-between w-[80%] mx-auto'>
                <span>Sub Total</span>
                <span>{cart?.cost.subtotalAmount.currencyCode} {cart?.cost.subtotalAmount.amount}</span>
            </div>
            <div className='flex justify-between w-[80%] mx-auto'>
                <span>Total</span>
                <span>{cart?.cost.totalAmount.currencyCode} {cart?.cost.totalAmount.amount}</span>
            </div>
        </div>
    </div>
  )
}

export default CartInfo
