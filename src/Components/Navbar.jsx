import React, { useState } from 'react'
import {FaBars, FaSistrix, FaCartShopping, FaXmark, FaTruckMoving, FaHeart, FaWallet, FaCircleQuestion, FaTag, FaThumbsUp, FaUsers} from 'react-icons/fa6'


const Navbar = () => {

    const [nav, setNav] = useState(false);


  return (
    <div className='max-w-[1640px] m-auto flex justify-between items-center p-4'>
      {/* left side */}
      <div className='flex items-center'>
        <div onClick={()=>setNav(!nav)} className='cursor-pointer'>
            <FaBars size={30}/>
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Fusion<span className='font-bold'>Flames</span></h1>
        <div className='hidden lg:flex items-center bg-gray-300 p-1 rounded-full text-[14px]'>
            <p className='bg-black text-white p-2 rounded-full cursor-pointer'>Delivery</p>
            <p className='p-2 cursor-pointer'>Pickups</p>
        </div>
      </div>
      {/* search Input */}
      <div className='bg-gray-300 flex items-center rounded-full px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
      <FaSistrix size={25}/>
      <input className='bg-transparent p-2 outline-none w-full focus:outline-none' type="search" name="search" id="search" placeholder='Search Food...' />
      </div>
      {/* Cart button */}
      <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'><FaCartShopping size={20} className='mr-2'/>Cart</button>

      {/* mobile menu */}
      
      {/* overlay */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen top-0 left-0 z-10'></div> : ''}

      {/* side drawer menu */}
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
        <FaXmark onClick={()=>setNav(!nav)} size={30} className='absolute top-4 right-4 cursor-pointer' />
        <h1 className='text-2xl p-4'>Fusion<span className='font-bold'>Flames</span></h1>
        <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
                <li className='flex items-center text-xl py-4'><FaTruckMoving size={25} className='mr-4'/>Orders</li>
                <li className='flex items-center text-xl py-4'><FaHeart size={25} className='mr-4'/>Favorites</li>
                <li className='flex items-center text-xl py-4'><FaWallet size={25} className='mr-4'/>Wallet</li>
                <li className='flex items-center text-xl py-4'><FaCircleQuestion size={25} className='mr-4'/>Help</li>
                <li className='flex items-center text-xl py-4'><FaTag size={25} className='mr-4'/>Promotions</li>
                <li className='flex items-center text-xl py-4'><FaThumbsUp size={25} className='mr-4'/>Best Ones</li>
                <li className='flex items-center text-xl py-4'><FaUsers size={25} className='mr-4'/>Invite Friends</li>
            </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
