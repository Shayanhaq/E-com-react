
import ProductCard from "../components/ProductCard";

import React from 'react'
import Slider from "../components/Slider";
import Slider2 from "../components/Slider2";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import NewArrivalGrid from "../components/NewArrivalGrid";
import Product from "./Product";
import Footer from "../components/Footer";
import Catogory from "../components/Catogory";
import Card1 from "../components/Card1";
import { Link } from "react-router-dom";
export default function Home({darkMode}) {
  
  
  return (
    <div className= {`container-x transition-colors duration-300  ${ darkMode ?" bg-slate-900" : ""}`} >
          
          <Card1 />
          <SectionTitle text="Today's" />
          <h3 className={`heading m-4 ${darkMode ? "text-white" : ""}`}>Flash Sales</h3>
          
          <div class="flex gap-7 font-medium text-xs m-4">
            
            <span className="">Days</span><span>Hours</span><span>Mintus</span><span>Secand</span></div>
          <div class="flex gap-7 font-bold text-2xl m-4"><span>03 <span class="text-myTheme font-medium">:</span> </span><span>23 <span class="text-myTheme font-medium">:</span> </span><span>10 <span class="text-myTheme font-medium">:</span> </span><span>56</span></div>

          <Slider className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center my-8"> </Slider>

          <Link to={"/Product"}className="h-14 w-56 mx-auto my-16 font-medium rounded bg-primary center text-white">View All Products </Link>


          <SectionTitle text="Categories" />
        <h3 className={`heading m-4 ${darkMode ? "text-white" : ""}`}>Browse By Category</h3>
<Catogory/>
  {/* todo */}
          <SectionTitle text="This Month" />

          <div className="flex justify-between my-10">
        <h3 className={`heading m-4 ${darkMode ? "text-white" : ""}`}>Best Selling Products</h3>
        <Link to={"/Product"} className="mx-12 h-14 w-40 font-medium rounded bg-primary center text-white">View All</Link>
        
      </div>
<Slider2 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center my-8 bg-"/>

          <SectionTitle text="Our Prudects" />
          <h3 className={`heading m-4 ${darkMode ? "text-white" : ""}`}>Explore Your Product</h3>
      <div className="">
      <Product />
</div>

          
          <SectionTitle text="Featured" />

          <h3 className={`heading m-4 ${darkMode ? "text-white" : ""}`}></h3>
          <NewArrivalGrid />


       
    </div>
  )
}
