import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // Import routing components
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contect from "./pages/Contect";
import Login from "./pages/Login";  
import SignupPage from "./pages/Resgister";

import "./index.css";
import LoginMinimal from "./pages/Login";
import Slider from "./components/Slider";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import Item from "./pages/ProductDetail"
import ItemDetail from "./pages/ProductDetail";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const isLoggedIn = false ;
  const [darkMode, setDarkMode]= useState(false)
  return (
    <>
      <Banner />
      <Navbar darkMode ={darkMode} setDarkMode={setDarkMode} />
      


      <Routes>
    
         < Route path="/" element={<Home  darkMode ={darkMode}/>} />
          <Route path="/about" element={<About  darkMode ={darkMode} />} />
        <Route path="/not-found" element={<div>not foundddd </div>}  darkMode ={darkMode}/>
        <Route path="/product" element={<Product  darkMode ={darkMode} />} />
        <Route path="/product/:id" element={<ProductDetail  darkMode ={darkMode} />} />
        
        {isLoggedIn ? (
          <>
            <Route
              path="/profile"
              element={ <Profile  darkMode ={darkMode} /> }
            />
           
            <Route path="/contect" element={<Contect  darkMode ={darkMode}/>} /> 
            <Route path="/login" element={<Navigate to="/"  darkMode ={darkMode}/>} />
            <Route path="*" element={<Navigate to="/not-found"  darkMode ={darkMode}/>} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login   darkMode ={darkMode}/>} />
            <Route path="*" element={<Navigate to="/login"  darkMode ={darkMode}/>} />
          </>
        )}

        <Route path="/login" element={<LoginMinimal darkMode ={darkMode} />} />
        <Route path="/resgister" element={<SignupPage  darkMode ={darkMode}/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
