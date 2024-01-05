import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Nav from "../layout/Nav";
import Footer from "../layout/Footer";
import Blog from "../Pages/Blog";
const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/blogs' element={<Blog/>}/>
    {/* <Route path='/services' element={<Home/>}/>
    <Route path='/contact' element={<Home/>}/> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
