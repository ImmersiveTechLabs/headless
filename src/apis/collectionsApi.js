import axios from "axios"
import { collectionQueryForGrid } from "../queries/collectionsQueries"

export const fetchCollectionForGrid = async(id, setCollection)=>{
    try{
      const body = {
         query: collectionQueryForGrid,
         variables:{collectionId:`gid://shopify/Collection/${id}`}
        }
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
     setCollection(data.data.collection)
    }catch(err){
        console.log(err)
    }
}
