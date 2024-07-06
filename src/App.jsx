import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageLoading from './Components/PageLoading';
import ProductSellerPage from './Components/ProductSellerPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLoading />} />
      <Route path="/ProductSellerPage" element={<ProductSellerPage />} />
    </Routes>
  );
}

export default App;
