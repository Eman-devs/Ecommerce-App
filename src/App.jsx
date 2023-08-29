
import React from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import FooterSection from './components/FooterSection'
import { Route, Routes } from 'react-router-dom'
import Products from './pages/products'
import About from './pages/About'
import Contact from './pages/Contact'
import ProductPage from './pages/ProductPage'
import CategoryPage from './pages/CategoryPage'
import ShoppingCard from './pages/ShoppingCard'





function App() {

  return (
   <div>
    <Header/>
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path="/products/:productID" element={<ProductPage/>} />
         <Route path="/products/category/:categoryName" element={<CategoryPage/>} />
         <Route path="/products" element={<Products/>} />
         <Route path="/about" element={<About/>} />
         <Route path="/contact" element={<Contact/>} />
         <Route path="/shoppingCard" element={<ShoppingCard/>} />
         <Route path="*" element={<div>404</div>} />
         
      </Routes>
    <FooterSection/>
   </div>
  )
}

export default App
