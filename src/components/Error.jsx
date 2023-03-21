import React from 'react'

const Error = ({error}) => {
  return (
    <div className='mt-[30px] mx-auto text-center py-2 rounded-[10px] text-white font-bold bg-[red] w-[50%]'>{error}</div>
  )
}

export default Error