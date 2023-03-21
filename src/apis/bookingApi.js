import axios from "axios"

export const bookProduct = (productId)=>{
    return axios.post('http://localhost:4000/product/addbooking',{
        productId:productId
    })

}

export const checkBooking = (productId,bookingDate)=>{
    return axios.get(`http://localhost:4000/product/check/"${productId}"/${bookingDate}`)

}
