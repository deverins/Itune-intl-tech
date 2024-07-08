import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductSellerPage from './Components/ProductSellerPage';
import Layout from './Components/Layout';

const App = () => {
  return (
    <>
      <div className=' font-Montserrat'>
        <Routes>
        <Route element={<Layout />}>
          <Route index element={<ProductSellerPage />} />
        </Route>
        </Routes>

      </div>
    </>
  );
}

export default App;
