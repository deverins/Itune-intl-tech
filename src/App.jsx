import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import ProductSellerPage from './Components/ProductSellerPage';
import Layout from './Components/Layout';
import CartPage from './Components/CartPage.jsx';
import CheckOut from './Components/CheckOut.jsx';
import CardVerification from './Components/CardVerification.jsx';

const App = () => {
  return (
    <div className='font-Montserrat'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductSellerPage />} />
          <Route path="/product/cart" element={<CartPage />} />
          <Route path="/product/checkout" element={<CheckOut />} />
          <Route path="/card-verification" element={<CardVerification />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
