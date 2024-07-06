import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import img from './imgs/logo-page-loader.png';

const PageLoading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/ProductSellerPage');
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, [navigate]);

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <img src={img} alt="Loading..." className="w-1/2 max-w-xs sm:w-1/3 md:w-1/4 lg:w-1/5 h-auto" />
    </div>
  );
};

export default PageLoading;
