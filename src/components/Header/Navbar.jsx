import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Link, NavLink } from 'react-router-dom';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Navbar = () => {
  return (
    <div className='flex justify-between w-[100%] items-center h-[80px] px-[10px]'>
        <div className="left w-[20%] ">
          <Link to="/">
          <img className='w-[70px]' src="/logo.webp" alt="" />
          </Link>
        </div>

        <div className="middle w-[60%] navbar flex gap-4 justify-center text-[0.9em] items-center font-[500] text-[black] font-nav-font">
            <NavLink className='hover:text-[#c09578] transition-all duration-300' to="/">Home</NavLink>
            <NavLink className='hover:text-[#c09578] transition-all duration-300' to="/products">Products</NavLink>
            <NavLink className='hover:text-[#c09578] transition-all duration-300' to='/collections' >Collections</NavLink>
        </div>

        <div className="right w-[20%] flex justify-end gap-[10px] ">
          <Link to='/cart'><ShoppingBagOutlinedIcon /></Link>
          <Link to='/login'><PersonOutlineOutlinedIcon /></Link>
          <Link to='/cart'><SearchOutlinedIcon /></Link>
        </div>
    </div>
  )
}

export default Navbar
