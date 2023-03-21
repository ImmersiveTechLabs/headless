import { allProductsQuery, singleProductQuery } from "../queries/productQueries"
import axios from 'axios'
import { allProductsFailure, allProductsStart, allProductsSuccess } from "../redux/slices/product"

export const fetchAllProducts = async(dispatch)=>{
  dispatch(allProductsStart())
  try{


    const body = {query: allProductsQuery, variables:{}}
    const {data} = await axios.post(
      process.env.REACT_APP_STOREFRONT_API,
    body,
   {
     headers:{
       "Content-Type": "application/json",
       "X-Shopify-Storefront-Access-Token": process.env.REACT_APP_STOREFRONT_TOKEN
     }
   }

   )
   dispatch(allProductsSuccess(data.data.products.edges))
  }catch(err){
    dispatch(allProductsFailure(err.message))

  }


}




 export const fetchSingleProduct =async (handle)=>{

  const body = {query:singleProductQuery(handle), variables:{}}
      return axios.post(
        process.env.REACT_APP_STOREFRONT_API,
        body,
        {
          headers:{
            "Content-Type": "application/json",
            "X-Shopify-Storefront-Access-Token": process.env.REACT_APP_STOREFRONT_TOKEN
          }
        }

      )

  }
