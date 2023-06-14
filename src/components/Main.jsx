import React, { useEffect, useState } from 'react'
import { fetchAllProducts } from '../apis/productsApi'
import ProductCard from './ProductCard'
import Slider from './Slider'
import {useDispatch, useSelector} from 'react-redux'
import CircularProgress from '@mui/material/CircularProgress';
import Error from './Error'
import Heading1 from './Heading1'
import CollectionGrid from './CollectionGrid'
import { fetchCollectionForGrid } from '../apis/collectionsApi'


const Main = () => {
  const {products, error, isFetching} = useSelector(state=>state.products)

  const [collection1, setCollection1] = useState()
  const [collection2, setCollection2] = useState()
  const [collection3, setCollection3] = useState()
    const dispatch = useDispatch()
    useEffect(()=>{
     fetchAllProducts(dispatch)
     fetchCollectionForGrid('293227987117', setCollection1);
     fetchCollectionForGrid('293227954349', setCollection2);
     fetchCollectionForGrid('293227954349', setCollection3);
    }, [dispatch])
  return (
    <>
    {
      isFetching ? <div className='w-[100%] flex justify-center items-center h-[calc(100vh-80px)]'><CircularProgress /></div> :
      error ? <Error error={error} /> :

      <>
      <Slider />
      <CollectionGrid collections={[collection1, collection2, collection3]} />
      <Heading1 className="mt-[30px]" title="BEST SELLER" label="Top sale in this week" />
      {

        products &&
        <div className='mt-[20px] w-[100%]'>




            <div className='flex flex-wrap w-[80vw] justify-center gap-3 mx-auto'  >
      {
        products?.map((p)=>(
            <ProductCard key={p.node.handle} {...p.node} />
            ))
        }
            </div>

        </div>
  }
  </>
    }
    </>
  )
}

export default Main
