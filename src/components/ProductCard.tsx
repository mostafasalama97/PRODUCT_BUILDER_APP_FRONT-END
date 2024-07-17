import React from 'react'
import Image from './Image'
import Button from './UI/Button'

const ProductCard = () => {
  return (
    <div className='border rounded-md p-2 flex flex-col'>
      <Image
        imgURL='https://via.placeholder.com/200x100'
        alt='Product Name'
        className='rounded-md mb-2'
      />
      <h3>2022 Gensis GV70: Nomine</h3>
      <div className=''>ProductCard</div>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum molestiae illo quae porro ducimus, alias nulla veritatis repudiandae quasi a facere animi aliquid impedit? Dignissimos quidem magni molestias odit eaque.</p>
      <div className='flex items-center my-4 space-x-2'>
        <span className='w-5 h-5 bg-indigo-600 rounded-full cursor-pointer'></span>
        <span className='w-5 h-5 bg-yellow-600 rounded-full cursor-pointer'></span>
        <span className='w-5 h-5 bg-red-600 rounded-full cursor-pointer'></span>
      </div>

      <div className='flex items-center justify-between'>
        <span>$500,000</span>
        {/* <img className='w-10 h-10 rounded-full' src='https://via.placeholder.com/100x50' alt='Product Name' /> */}
        <Image
          imgURL='https://via.placeholder.com/100x50'
          alt='Product Name'
          className='w-10 h-10 rounded-full object-bottom'
        />
      </div>

      <div className='flex items-center justify-between space-x-4 my-5'>
        <Button className='bg-indigo-700' width='w-full'>Edit</Button>
        <Button className='bg-red-700' width='w-full'>Delete</Button>

      </div>

    </div>
  )
}

export default ProductCard