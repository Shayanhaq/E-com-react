import React, { useState } from 'react';
import logo from "../assets/logo/logoipsum-269.svg";
import { CiSearch } from "react-icons/ci";
import { FaHeart, FaShoppingCart, FaRegUser } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoMoonSharp } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";


const links = [
   { title: "Home", link: "/" },
   { title: "About", link: "/about" },
   { title: "Contect", link: "/contect" },
];

export default function Navbar({darkMode,setDarkMode}) {

  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const isLoggedIn = true ;

  const navLinkStyle = "capitalize hover:underline cursor-pointer hover:text-primary";

  return (
    <div className={`h-28 relative flex justify-around transition-colors duration-300 ${ darkMode ?" bg-slate-900" : ""} items-center`}>
      <img src="https://dynamic.design.com/asset/logo/2a2b0531-f004-4e9e-afe7-88abde57444e/logo-search-grid-1x?logoTemplateVersion=2&v=638434245537230000&text=Hash" alt="Logo" height={60} width={60} className=' rounded-full '/>

      <div className='bg-[#f5f5f5] rounded flex justify-around items-center w-60 h-10 px-2'>
        <input
          type="search"
          className='bg-transparent outline-none text-sm w-full'
          placeholder='What are you looking for?'
        />
        <CiSearch className='font-bold text-3xl' />
      </div>

      <button
        className='md:hidden order-1 text-2xl'
        onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
      >
        {isHamburgerOpen ? <IoMdCloseCircleOutline /> : <CiMenuFries />}
      </button>

      {isHamburgerOpen && (
        <ul className='absolute bg-gray-200 w-full z-10 center justify-around  pl-1 top-20  h-14'>
          {links.map((item, i) => (
            <li key={i}>
              <a className='hover:bg-primary px-2 py- transition-all duration-300 ease-in-out rounded-r-full' href={item.link}>{item.title}</a>
            </li>
          ))}
          {!isLoggedIn && <li className={navLinkStyle}>
            
              
        <Link to  ="/login" className='rounded-b-md border-2 border-red-600 px-1 py-1 font-medium text-red-600 hover:bg-red-600 hover:text-white
        m-0 transition-all duration-300 ease-in-out ' >Login</Link>
        
            </li>}
        </ul>
      )}

     
<ul className={`hidden md:flex gap-3 ${darkMode ? "text-white" : ""}`}>
        {links.map((item, i) => (
          <li key={i} className='hover:bg-primary px-3 py-0 transition-all duration-300 ease-in-out rounded-r-full'>
            <Link to ={item.link}>{item.title}</Link>
          </li>
        ))}
        {!isLoggedIn && <li className={navLinkStyle}>
          
        <Link to  ="/login" className='rounded-bl-xl border-2 border-red-600 px-6 py-3 font-medium text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 ease-in-out' >Login</Link>
        
          
          </li>
        }
      </ul>

      <div className='flex items-center gap-3 text-2xl'>

        <button

        
        
        onClick={() => {
           setDarkMode(!darkMode);
          }}
          className= {`${darkMode ? "text-white" : ""} transition-colors duration-100000`}
        >
          {darkMode ? <MdOutlineLightMode /> :<IoMoonSharp />  }
        </button>


        


        {isLoggedIn && (
          <>
            <FaHeart  className = {`${darkMode ? "text-white" : ""}` }/>
            <FaShoppingCart className = {`${darkMode ? "text-white" : ""}` }/>
          </>
        )}
        
        <Link to={"/profile"} className='bg-primary rounded-full h-10 w-10 flex justify-center items-center text-base overflow-hidden'>
          {isLoggedIn ? (
              <FaRegUser />
          ) : (
          
            <img
              src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/465009504_3936006186645848_3308954008077880070_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEH-HAyelHYaTdDYC5ApPusCgm9DDWIYJgKCb0MNYhgmIz_nleMFFQjvA36dXkCH2tIDhJPCJdjAufKTXeYf9qL&_nc_ohc=g3UFOu4070cQ7kNvgHcDeTt&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=A10i7uUpi_BYKP6DU5HjOdW&oh=00_AYAymFC5lE6o421QxEC5BlZjHZyAQiUFCE39uBeNJErLBw&oe=674ADC8C"
              alt="User"
              className="h-full w-full object-cover"
            />
          )}
        </Link>
      </div>
    </div>
  );
}
