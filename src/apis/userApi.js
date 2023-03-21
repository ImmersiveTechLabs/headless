import axios from "axios"
import { registerQuery } from "../queries/userQueries"

export const register =async (firstName, lastName, email, phone, password, setSuccess, setError, setLoading)=>{
    try{
        const body = {query:registerQuery(firstName, lastName, email, phone, password) }
        setLoading(true)
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
            setLoading(false)
            data.data.customerCreate?.customer&& setSuccess(data.data.customerCreate.customer)
            data.errors && setError(data.errors)
            data.data?.customerCreate?.customerUserErrors && setError(data.data.customerCreate.customerUserErrors)
            
            
        }catch(err){
            console.log(err)
    }


}