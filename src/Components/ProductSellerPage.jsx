import React from 'react';

const ProductSellerPage = () => {
  return (
    <main className="flex justify-center items-center mt-[60px] px-4">
      <div className="relative w-full max-w-md">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 6.35 7.5 7.5 0 0116.65 16.65z" />
          </svg>
        </span>
        <input
          type="text"
          className="w-full pl-10 pr-3 py-3 border-none bg-gray-200 shadow focus:outline-none rounded-lg"
          placeholder="Search"
        />
      </div>
    </main>
  );
};

export default ProductSellerPage;
