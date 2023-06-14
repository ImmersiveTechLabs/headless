import React from 'react'

const Announcment = ({label, backgroundColor, color}) => {
  return (
    <div className={`h-[50px] w-[100%] bg-[#f5f5f5] flex items-center justify-center`}>
        <span className='text-[#686868] text-[0.8em]'>{label ? label : "Add Label"}</span>
    </div>
  )
}

export default Announcment
