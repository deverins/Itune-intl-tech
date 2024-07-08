import React from 'react';
import atmCard from '../Components/imgs/atm_card.png';
import product2 from '../Components/imgs/product1.png';
import product3 from '../Components/imgs/product2.png';
import product7 from '../Components/imgs/product3.png';
const CheckOut = () => {
  return (
    <div className="flex justify-between p-8 ">
      <div className="w-1/2  p-8 ">
        <h2 className="text-xl lg:text-2xl font-bold mb-4 mt-12">Payment Information</h2>
        <div className="bg-gray-200 p-4 mb-6 rounded-xl">
          <img src={atmCard} alt="Credit Card" className="w-full" />
        </div>
        <form className="space-y-4">
          <div>
            <label htmlFor="card-number" className="block mb-1 font-bold">Card Number</label>
            <input
              type="text"
              id="card-number"
              className="w-full p-2 border border-black py-8 rounded-xl"
            />
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2 mt-3">
              <label htmlFor="expiry-date" className="block mb-1 font-bold text-[20px]">Expiry Date</label>
              <input
                type="text"
                id="expiry-date"
                className="w-full py-5 rounded-2xl border border-black"
              />
            </div>
            <div className="w-1/2 mt-3">
              <label htmlFor="cvv" className="block mb-1 font-bold text-[20px]">CVV</label>
              <input
                type="text"
                id="cvv"
                className="w-full py-5 rounded-2xl border border-black"
              />
            </div>
          </div>
          <div className='flex justify-between'>
            <label className="block mb-1 text-xl font-bold  mt-10 ">Type of Card</label>
            <div className="flex items-center space-x-8 mb-10  mt-10 ">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 w-20 h-6" />
                <p className='text-1xl'>
                  Verve
                </p>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 w-20 h-6" />
                <p className='text-1xl'>

                  Visa
                </p>
              </label>
            </div>
          </div>
          <button type="submit" className=" w-72 border border-white py-3 bg-[#2E3192] text-white font-bold rounded">
            Pay ₦1,730,000
          </button>
        </form>
      </div>
      <div className="w-1/2 bg-white p-8 shadow-lg">
        <div className="space-y-6 mt-20">
          <div className="flex items-center border border-gray-300 rounded-lg p-4 shadow-sm">
            <img src={product2} alt="Oraimo Smart Watch" className="w-24 h-24 mr-4" />
            <div>
              <p className="font-semibold">Oraimo Smart Watch</p>
              <p className="text-red-500 font-semibold">₦60,000.00</p>
              <p className="text-gray-600">Colour: Blue</p>
            </div>
          </div>
          <div className="flex items-center border border-gray-300 rounded-lg p-4 shadow-sm">
            <img src={product3} alt="HP Elitebook 840 G5" className="w-24 h-24 mr-4" />
            <div>
              <p className="font-semibold">HP Elitebook 840 G5</p>
              <p className="text-red-500 font-semibold">₦270,000.00</p>
            </div>
          </div>
          <div className="flex items-center border border-gray-300 rounded-lg p-4 shadow-sm">
            <img src={product7} alt="Apple iPhone 14 Pro Max" className="w-24 h-24 mr-4" />
            <div>
              <p className="font-semibold">Apple iPhone 14 Pro Max</p>
              <p className="text-red-500 font-semibold">₦1,500,000.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
