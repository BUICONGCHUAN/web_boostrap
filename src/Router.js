import React from 'react';
import {
  BrowserRouter, Routes, Route, Link
} from "react-router-dom";
import Home from './screen/Home';
import Product from './screen/Product';
import Detail  from './screen/Detail';
import Cart from './screen/Cart';

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
         {/* <Route path="/product" element={<Product />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path='' element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}