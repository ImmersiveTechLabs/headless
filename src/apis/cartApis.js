import axios from "axios"
import { addItemToCartQuery, createCartQuery, getCartQuery } from "../queries/cartQueries"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"



export const createCart  = async (productId, quantity)=>{
    try{
    const body = {query: createCartQuery(productId, quantity), variables:{}}
    return toast.promise(axios.post(
      process.env.REACT_APP_STOREFRONT_API,
      body,
      {
          headers:{
            "Content-Type": "application/json",
            "X-Shopify-Storefront-Access-Token": process.env.REACT_APP_STOREFRONT_TOKEN
          }
        }), {pending:"Adding To Cart", success:"Added To Cart", error:"error occured"})
        }catch(err){
            console.log(err)
        }

}

export const getCart  = async (cartId)=>{
    try{
    const body = {query: getCartQuery(cartId), variables:{}}
         return axios.post(
            process.env.REACT_APP_STOREFRONT_API,
            body,
            {
                headers:{
                  "Content-Type": "application/json",
                  "X-Shopify-Storefront-Access-Token": process.env.REACT_APP_STOREFRONT_TOKEN
                }
              })
        }catch(err){
            console.log(err)
        }

}
export const addItemToCart  = async (cartId,productId,quantity)=>{
    try{
    const body = {query: addItemToCartQuery(cartId,productId,quantity), variables:{hamza:''}}
              return toast.promise(axios.post(
                process.env.REACT_APP_STOREFRONT_API,
                body,
                {
                    headers:{
                      "Content-Type": "application/json",
                      "X-Shopify-Storefront-Access-Token": process.env.REACT_APP_STOREFRONT_TOKEN
                    }
                  }), {pending:"Adding To Cart", success:'Added To cart', error:"error occured"})
        }catch(err){
            console.log(err)
        }

}
