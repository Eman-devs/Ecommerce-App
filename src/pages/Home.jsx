
import HeroSection from '../components/HeroSection'
import ProductSection from '../components/ProductSection'
import FreatureCard from '../components/FreatureCard'
import StateCard from '../components/StateCard'




function Home() {
  return (
    <>
    <HeroSection/>
    <FreatureCard/>
    <div className="flex flex-col text-center w-full ">
    <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1">PRODUCTS HERE</h2>
    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">MOST POPULAR PRODUCTS</h1>
     </div>
      <ProductSection/>
    <StateCard/>
    </>
  )
}

export default Home