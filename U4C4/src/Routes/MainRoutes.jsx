import React from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "../components/About";
import { Home } from "../components/Home";
import { Navbar } from "../components/Navbar";
import { Products } from "../components/Products";

const MainRoutes = () => {
  return <>
  
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/products/men" element={<Home/>}/>
      <Route path="/products/women" element={<Home/>}/>
      <Route path="/products/kids" element={<Home/>}/>
      <Route path="/products/homedecor" element={<Home/>}/>

      </Routes>
  
  </>;
};
export { MainRoutes };
