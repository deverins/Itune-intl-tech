import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import ProductSellerPage from './Components/ProductSellerPage';
import Layout from './Components/Layout';
import CartPage from './Components/CartPage.jsx';
import CheckOut from './Components/CheckOut.jsx';
import CardVerification from './Components/CardVerification.jsx';
import PaymentChecking from './Components/payment/PaymentChecking.jsx';
import PaymentDeclined from './Components/payment/PaymentDeclined.jsx';
import PaymentSuccessful from './Components/payment/PaymentSuccessful.jsx';
import { ProductProvider } from './context/ProductContext.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className='font-Montserrat'>
        <ProductProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<ProductSellerPage />} />
              <Route path="/product/cart" element={<CartPage />} />
              <Route path="/product/checkout" element={<CheckOut />} />
              <Route path="/card-verification" element={<CardVerification />} />
              <Route path="/payment-in-process" element={<PaymentChecking />} />
              <Route path="/payment-declined" element={<PaymentDeclined />} />
              <Route path="/payment-successful" element={<PaymentSuccessful />} />
            </Route>
          </Routes>
        </ProductProvider>
      </div>
    </>
  );
}

export default App;
