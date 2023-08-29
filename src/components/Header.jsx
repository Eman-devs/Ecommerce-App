import React from 'react'
import { Link } from 'react-router-dom'



export default function Header( ) {
  return (
    <header className="text-gray-400 bg-gray-900 body-font drop-shadow-2xl ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to={'/'} className="flex cursor-pointer title-font font-medium item-center text-gray-900 mb-4 md:mb-0" data-aos="flip-left">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="text-gray-400 ml-3 text-xl">Ship shops</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-white">Home</Link>
          <Link to="/products" className="mr-5 hover:text-white">Products</Link>
          <Link to="/about" className="mr-5 hover:text-white">About</Link>
          <Link to="/contact" className="mr-5 hover:text-white">Contact</Link>
        
        </nav>
        <Link to="/shoppingCard">
        <button className="inline-flex items-center text-black bg-green-500 border-0 py-2 px-3  focus:outline-none hover:bg-green-700  rounded text-base mt-4 md:mt-0">Go to Cart
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button> 
        </Link>
      </div>
    </header>
  )
}




