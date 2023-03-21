import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { bookProduct, checkBooking } from '../apis/bookingApi'
import { addItemToCart, createCart } from '../apis/cartApis'
import { fetchSingleProduct } from '../apis/productsApi'

const SingleProduct = () => {
    const [product, setProduct] = useState(null)
    const [productId, setProductId] = useState(null)
    const [enteredDate, setEnteredDate] = useState("")
    console.log(productId)
    const cartId = localStorage.getItem('cartId')

    const handleBooking = async()=>{
        await bookProduct(productId)
        console.log('booking added')
        handleAddToCart()
    }
    const handleCheck = async ()=>{
       const {date} =  await checkBooking(productId, enteredDate)
}



    const handleAddToCart =async () =>{
        if(!cartId){
            const {data} =await createCart(productId, 1)
            localStorage.setItem('cartId',data.data.cartCreate.cart.id)
            console.log('added to cart')
        }
        else{
            const {data} =await addItemToCart(cartId,productId, 1)
            console.log('added to cart')
        }
    }



    const amount = product?.priceRange.minVariantPrice.amount.split('.')
    const location = useLocation()
    const handle = location.pathname.split('/')[2].toString()
    useEffect(()=>{
        const func = async ()=>{
            try{
                const {data} =  await fetchSingleProduct(handle)
                setProduct(data.data.productByHandle)
                setProductId(data.data.productByHandle.variants?.edges[0]?.node?.id)
            }catch(err){
                console.log(err)
            }
        }
        func()
    }, [])
  return (
    <div>

        {
product &&
<>
            <div className="min bg-blue-300-w-screen min-h-screen  flex items-center p-5 lg:p-10 overflow-hidden relative">
    <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div className="relative">
                    <img src={product?.images?.edges[0]?.node?.transformedSrc} className="w-full relative z-10" alt="" />
                    <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
                <div className="mb-10">
                    <h1 className="font-bold uppercase text-2xl mb-5">{product.title}</h1>
                    <p className="text-sm">{product.description ? product.description : "No Description" }</p>
                </div>
                <div>
                    <div className='mb-[3em]'>
                        <input onChange={(e)=>setEnteredDate(e.target.value)} placeholder='enter date' type="text" />
                        <button onClick={handleCheck}>Check</button>
                    </div>
                    <div className="inline-block align-bottom mr-5 overflow-hidden">
                        <span className="text-2xl leading-none align-baseline">Rs</span>
                        <span className="font-bold text-5xl leading-none align-baseline">{amount[0]}</span>
                        <span className="text-2xl leading-none align-baseline">{amount[1]}</span>
                    </div>
                    <div className="inline-block align-bottom">
                        <button onClick={handleBooking} className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</>
}
    </div>
  )
}

export default SingleProduct
