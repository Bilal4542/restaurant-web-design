import React, { useState } from 'react'
import {data} from '../data/data'

const Foods = () => {

    const [foods, setFoods] = useState(data);

    // filter type pizza/burgers/etc
    const filterType = (category) => {
       setFoods(
        data.filter((item) => {
            return item.category === category;
        })
       )
    }


    // filter by price
    const filterPrice = (price) => {
        setFoods(
            data.filter((item) => {
                return item.price === price;
            })
        )
    }

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-3xl md:text-4xl my-2 font-bold text-orange-600 text-center'>Top Rated Menu Items</h1>

      {/* Filtered Row */}
      <div className='flex flex-col lg:flex-row justify-between'>

        {/* Filter Type */}
        <div>
            <p className='font-bold text-gray-700 text-lg'>Filter Type</p>
            <div className='flex justify-between flex-wrap'>
                <button onClick={()=>setFoods(data)} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300 m-1'>All</button>
                <button onClick={()=>filterType('burger')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300 m-1'>Burgers</button>
                <button onClick={()=>filterType('pizza')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300 m-1'>Pizza</button>
                <button onClick={()=>filterType('salad')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300 m-1'>Salads</button>
                <button onClick={()=>filterType('chicken')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300 m-1'>Chicken</button>
            </div>
        </div>

        {/* Filter Price */}
        <div>
            <p className='font-bold text-gray-700 text-lg'>Filter Price</p>
            <div  className='flex justify-between w-full max-w-[390px]'>
                <button onClick={()=>filterPrice('$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white focus:outline-none transition-all duration-300 m-1'>$</button>
                <button  onClick={()=>filterPrice('$$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white focus:outline-none transition-all duration-300 m-1'>$$</button>
                <button  onClick={()=>filterPrice('$$$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white focus:outline-none transition-all duration-300 m-1'>$$$</button>
                <button  onClick={()=>filterPrice('$$$$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white focus:outline-none transition-all duration-300 m-1'>$$$$</button>
            </div>
        </div>
      </div>


    {/* Display Foods */}
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4'>
        {
            foods.map((item, index) => (
                <div key={index} className='border shadow-xl hover:scale-105 duration-500 rounded-lg cursor-pointer'>
                    <img className='w-full h-[200px] object-cover rounded-t-lg' src={item.image} alt={item.name} />
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{item.name}</p>
                        <p className='font-bold'><span className='bg-orange-500 p-1 rounded-full text-white'>{item.price}</span></p>
                    </div>
                </div>
            ))
        }
    </div>


    </div>
  )
}

export default Foods
