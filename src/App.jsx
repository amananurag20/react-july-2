import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Signup from "./components/Signup";
import { Product } from "./components/Product";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop/Shop";

const App = () => {
  return (
    <>    
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
