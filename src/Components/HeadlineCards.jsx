import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] p-4 m-auto py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='relative rounded-xl'>
        {/* Overlay */}
        <div className='rounded-xl absolute bg-black/50 w-full h-full text-white'>
            <p className='text-2xl px-4 pt-10 font-bold'>Sun's Out, BOGO's Out</p>
            <p className='px-4 text-lg'>Through 8/26</p>
            <button className='bg-white text-black font-semibold border border-white absolute bottom-5 mx-4 hover:bg-black hover:text-white transition-all duration-300 ease-in-out'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full rounded-xl object-cover' src="https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
      {/* Card */}
      <div className='relative rounded-xl'>
        {/* Overlay */}
        <div className='rounded-xl absolute bg-black/50 w-full h-full text-white'>
            <p className='text-2xl px-4 pt-10 font-bold'>Sandwiches</p>
            <p className='px-4 text-lg'>Added Daily</p>
            <button className='bg-white text-black font-semibold border border-white absolute bottom-5 mx-4 hover:bg-black hover:text-white transition-all duration-300 ease-in-out'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full rounded-xl object-cover' src="https://images.pexels.com/photos/4491395/pexels-photo-4491395.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
      {/* Card */}
      <div className='relative rounded-xl'>
        {/* Overlay */}
        <div className='rounded-xl absolute bg-black/50 w-full h-full text-white'>
            <p className='text-2xl px-4 pt-10 font-bold'>We Delivered Desserts Too</p>
            <p className='px-4 text-lg'>Tasty Treats</p>
            <button className='bg-white text-black font-semibold border border-white absolute bottom-5 mx-4 hover:bg-black hover:text-white transition-all duration-300 ease-in-out'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full rounded-xl object-cover' src="https://images.pexels.com/photos/2205270/pexels-photo-2205270.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
    </div>
  )
}

export default HeadlineCards
