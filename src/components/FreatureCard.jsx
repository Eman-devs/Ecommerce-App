import axios from 'axios';
import React, {useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function FreatureCard() {

    const [categories, setCategories] = useState([]);

   useEffect(() =>{
          axios.get("https://fakestoreapi.com/products/categories").then(json => setCategories(json.data)).catch(err => console.log(err))
   },[])

    // useEffect(() => {
    //     axios.get("https://fakestoreapi.com/products/categories").then(json => setCategories(json.data)).catch(err => console.log(err))
    // }, [])
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                    <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">ALL THE CATEGORIES</h1>
                </div>
                <div className="flex flex-wrap -m-4">
                    {
                        categories.map((val, key) =>
                            <div className="p-4 md:w-1/3 " key={key} data-aos="fade-up" data-aos-duration="1000"
                            data-aos-anchor-placement="center-bottom">
                                <Link to={`/products/category/${val}`}>
                                    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col cursor-pointer" >
                                        <div className="flex items-center mb-3">
                                            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                                </svg>
                                            </div>
                                            <h2 className="text-gray-900 text-lg  title-font font-medium">{val}</h2>
                                        </div>
                                        <div className="flex-grow">
                                            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                        </div>
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

export default FreatureCard;





