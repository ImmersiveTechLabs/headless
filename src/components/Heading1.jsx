import React from 'react'

const Heading1 = ({title, label, className}) => {
  return (
    <div className={className}>
      <div className="heading flex justify-center items-center gap-[10px]">
            <div className='w-[50px] h-[2px] bg-[black]' />
            <h1 className='text-[black] text-[1.5em] font-[500]'>{title}</h1>
            <div className='w-[50px] h-[2px] bg-[black]' />
          </div>
            <h3 className='text-center text-[0.9em] text-[gray]'>{label}</h3>
    </div>
  )
}

export default Heading1
