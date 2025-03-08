import React from 'react';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <div className="h-[75vh] flex flex-col md:flex-row items-center justify-center">
      <div className='w-full mb-12 md:mb-0 lg:w-3/6 flex flex-col lg:items-start justify-center'><h1 className='text-4xl lg:text-6xl font-semibold text-yellow-100 text-center lg:text-left'>
      Books You Love, Delivered!
        </h1>
        <p className="mt-4 text-xl text-zinc-300 text-center lg:text-left">Unmissable stories, unbeatable prices—start reading today!</p>
        <div className='mt-8 flex justify-center'>
        <Link to="/all-books" className='text-yellow-100  font-semibold border border-yellow-100 text-xl lg:text-2xl px-10 py-3 hover:bg-zinc-800 rounded-full '>Uncover Reads</Link>
        </div>
        </div>
      <div className='w-full lg:w-3/6 h-auto lg:h-[100%] flex items-center justify-center'></div>
      <img src="https://hancockghostwriters.com/assets/img/non-fiction/non-fiction.png" alt="hero" className="src" />
    </div>
  )
}

export default Hero
