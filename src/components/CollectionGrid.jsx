import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const CollectionGrid = ({collections}) => {

    console.log(collections)

  const Collection1 = ()=>{
    if(collections[0] !== null && collections[0] !== undefined){
      // const id = collections[0]?.id?.split('/')[4]
      return (
        <div className="left h-[100%] relative  flex-[3] overflow-hidden">
          <div className="absolute w-[100%] h-[100%] flex justify-center items-end">
          <Link to={`/collection/${collections[0].handle}`} className='z-[2] bg-[white] font-[500] rounded-[5px] absolute bottom-[20px] py-[5px] px-[25px]'>{collections[0].title}</Link>
          </div>
          <img src={collections[0].image.url} className='hover:scale-110 transition-all duration-[0.5s] w-[100%] h-[100%] object-cover' alt="" />
        </div>
        )
    }
  }
  const Collection2 = ()=>{
    if(collections[1] !== null && collections[1] !== undefined){
      return (
        <div className="left relative h-[100%] flex-[1.5] overflow-hidden">
<div className="absolute w-[100%] h-[100%] flex justify-center items-end">
          <button className='z-[2] bg-[white] font-[500] rounded-[5px] absolute bottom-[20px] py-[5px] px-[25px]'>{collections[1].title}</button>
          </div>
          <img src={collections[1].image.url} className='hover:scale-110 transition-all duration-[0.5s] w-[100%] h-[100%] object-cover' alt="" />
        </div>
        )
    }
  }
  const Collection3 = ()=>{
    if(collections[2] !== null && collections[2] !== undefined){
      return (
        <div className="right h-[100%] relative flex-[1.5] overflow-hidden">
          <div className="absolute w-[100%] h-[100%] flex justify-center items-end">
          <button className='z-[2] bg-[white] font-[500] rounded-[5px] absolute bottom-[20px] py-[5px] px-[25px]'>{collections[2].title}</button>
          </div>
          <img src={collections[2].image.url} className='hover:scale-110 transition-all duration-[0.5s] w-[100%] h-[100%] object-cover' alt="" />
        </div>
        )
    }
  }


  return (
    <div className='w-[90%] h-[500px] lg:flex-row flex-col flex mx-auto mt-[30px] gap-[20px]'>
      <Collection1 />
      <Collection2 />
      <Collection3 />

    </div>
  )
}

export default CollectionGrid
