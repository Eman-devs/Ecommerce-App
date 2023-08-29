import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProductSection() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then(json => setProducts(json.data)).catch(err => console.log(err))
  }, [])
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4" >
          {
            products.map((val, key) =>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full  border border-opacity-50 mb-4 cursor-pointer" data-aos="flip-left" data-aos-duration="2000">
                <Link to={`/products/${val.id}`}>
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" class="object-contain object-center w-full h-full block" src={val.image} />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{val.title}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{val.title}</h2>
                    <p className="mt-1">${val.price}</p>
                    <button className="flex mx-auto mt-16 text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none hover:bg-gray-500 rounded text-lg">View Product</button>
                  </div>
                </Link>
              </div>
            )
          }
        </div>
      </div>
    </section>
  )
}

export default ProductSection;












