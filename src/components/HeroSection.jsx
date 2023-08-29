import React from 'react'
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
      <>
      <section className="text-gray-600 body-font ">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br className="hidden lg:inline-block"/>readymade gluten
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center">
        <Link to="/about">
        <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">view about our company</button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6" data-aos="zoom-out-up">
      <img className="object-cover object-center rounded" alt="hero" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fashion-sale-banner-template-design-71d683b33a1514229b35df17dc603224_screen.jpg?ts=1648616697"/>
    </div>
  </div>
</section>
      </>
  )
}

export default HeroSection



