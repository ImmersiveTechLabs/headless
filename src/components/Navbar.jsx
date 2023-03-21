import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='flex justify-between w-[100vw] items-center overflow-hidden h-[80px] px-5 '>
        <div className="left ">
          <Link to="/">
          <img src="/logo.avif" alt="" />
          </Link>
        </div>
        <div className="middle">
        <div className="navbar flex gap-4 text-sm text-[var(--primary-color)] font-nav-font">
            <Link to="/cart"><span href="#">Cart</span></Link>
            <span href="#">Valentine Collection</span>
            <span href="#">Custom Jewelry</span>
          </div>
        </div>
        <div className="right">
          <div className="search-bar flex gap-2 items-center">
            <SearchIcon fontSize='small' className='text-[var(--primary-color)] stroke-white stroke-1'  />
            <input className='text-sm outline-none' placeholder='Search here' type="text" />
          </div>

        </div>
    </div>
  )
}

export default Navbar
