import React, { useEffect, useState } from 'react';
import atmCard from '../imgs/atm_card.png';
import product2 from '../imgs/product1.png';
import product3 from '../imgs/product2.png';
import product7 from '../imgs/product3.png';
import qusetionmark from '../imgs/qusetionmark.png';

const PaymentCheckingTrackingStatus = () => {
  const [selectedCardType, setSelectedCardType] = useState('');
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('idle');

  const handleCardTypeChange = (type) => {
    setSelectedCardType(type);
  };

  const handleDeliveryMethodChange = (method) => {
    setSelectedDeliveryMethod(method);
  };

  const handlePayment = () => {
    // Clear form inputs
    document.getElementById('card-number').value = '';
    document.getElementById('expiry-date').value = '';
    document.getElementById('cvv').value = '';
    document.getElementById('residence-address').value = '';
    document.getElementById('state').value = '';
    document.getElementById('phone-number').value = '';

    setPaymentStatus('loading');
    setTimeout(() => {
      setPaymentStatus('declined');
    }, 2000);

    setTimeout(() => {
      setPaymentStatus('idle');
    }, 16000);
  };

  useEffect(() => {
    if (paymentStatus === 'declined') {
      const timer = setTimeout(() => {
        setPaymentStatus('successful');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [paymentStatus]);

  return (
    <>
      <main className='w-full bg-[#afafd1]'>
        <h2 className="text-xl lg:text-2xl font-Montserrat font-bold mb-4 pt-28 ml-4 md:ml-28">Payment Information</h2>

        {paymentStatus === 'loading' && (
          <div className='w-full flex justify-center my-4 mt-6'>
            <div className='flex items-center lg:w-[402px] lg:h-[48px] sm:w-[350px] sm:h-[35px] w-[350px] h-[35px] md:w-[300px] md:h-[35px] text-white rounded-3xl text-center py-1 bg-[#EC1D25]'>
              <p className='font-semibold text-lg flex-grow'>Please wait...</p>
            </div>
          </div>
        )}

        {paymentStatus === 'declined' && (
          <div className='w-full flex justify-center my-4 mt-6'>
            <div className='flex items-center lg:w-[402px] lg:h-[48px] sm:w-[350px] sm:h-[35px] w-[350px] h-[35px] md:w-[300px] md:h-[35px] text-white rounded-3xl text-center py-1 bg-[#EC1D25]'>
              <p className='font-semibold text-lg flex-grow'>Payment Declined</p>
            </div>
            <div className='flex-shrink-0'>
              <img src={qusetionmark} className='w-10 h-10 ml-3' alt="Question Mark" />
            </div>
          </div>
        )}

        {paymentStatus === 'successful' && (
          <div className='w-full flex justify-center my-4 mt-6'>
            <div className='flex items-center lg:w-[402px] lg:h-[48px] sm:w-[350px] sm:h-[35px] w-[350px] h-[35px] md:w-[300px] md:h-[35px] text-white rounded-3xl text-center py-1 bg-[#28a745]'>
              <p className='font-semibold text-lg flex-grow'>Payment Successful</p>
            </div>
          </div>
        )}

        <div className="flex flex-col lg:flex-row justify-between p-4 md:p-8 mx-4 md:mx-20">
          <div className="flex flex-col gap-8 w-full lg:w-2/3">
            <div className="w-full h-auto rounded-lg p-4 md:p-8 bg-white mb-8 lg:mb-0">
              <div className="bg-gray-200 p-4 mb-6 rounded-xl">
                <img src={atmCard} alt="Credit Card" className="w-full" />
              </div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="card-number" className="block mb-1 font-bold">Card Number</label>
                  <input
                    type="text"
                    id="card-number"
                    className="w-full p-2 border border-black py-4 md:py-6 rounded-xl"
                  />
                </div>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                  <div className="w-full md:w-1/2">
                    <label htmlFor="expiry-date" className="block mb-1 font-bold text-[16px] md:text-[20px]">Expiry Date</label>
                    <input
                      type="text"
                      id="expiry-date"
                      className="w-full py-3 md:py-4 rounded-2xl border border-black"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <label htmlFor="cvv" className="block mb-1 font-bold text-[16px] md:text-[20px]">CVV</label>
                    <input
                      type="text"
                      id="cvv"
                      className="w-full py-3 md:py-4 rounded-2xl border border-black"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between">
                  <label className="block mb-1 text-xl font-bold mt-6">Type of Card</label>
                  <div className="flex items-center space-x-4 mb-6 mt-6">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2 w-5 h-5 md:w-6 md:h-6"
                        checked={selectedCardType === 'Verve'}
                        onChange={() => handleCardTypeChange('Verve')}
                      />
                      <p className="text-lg md:text-xl">Verve</p>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2 w-5 h-5 md:w-6 md:h-6"
                        checked={selectedCardType === 'Visa'}
                        onChange={() => handleCardTypeChange('Visa')}
                      />
                      <p className="text-lg md:text-xl">Visa</p>
                    </label>
                  </div>
                </div>
              </form>
            </div>

            <div className="w-full h-auto rounded-lg p-4 md:p-8 bg-white mb-8 lg:mb-0">
              <form className="space-y-4">
                <div>
                  <div className="flex flex-col md:flex-row justify-between">
                    <label className="block mb-1 text-xl font-bold mt-6">Delivery Method</label>
                    <div className="flex items-center space-x-4 mb-6 mt-6">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2 w-5 h-5 md:w-6 md:h-6"
                          checked={selectedDeliveryMethod === 'Pickup'}
                          onChange={() => handleDeliveryMethodChange('Pickup')}
                        />
                        <p className="text-lg md:text-xl">Pickup</p>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2 w-5 h-5 md:w-6 md:h-6"
                          checked={selectedDeliveryMethod === 'Delivery'}
                          onChange={() => handleDeliveryMethodChange('Delivery')}
                        />
                        <p className="text-lg md:text-xl">Delivery</p>
                      </label>
                    </div>
                  </div>
                  <label htmlFor="residence-address" className="block mb-2 font-bold">Residence Address</label>
                  <input
                    type="text"
                    id="residence-address"
                    className="w-full p-2 my-4 border border-black py-3 md:py-4 rounded-xl"
                  />
                  <label htmlFor="state" className="block mb-2 font-bold mt-4">State</label>
                  <input
                    type="text"
                    id="state"
                    className="w-full p-2 border my-4 border-black py-3 md:py-4 rounded-xl"
                  />
                  <label htmlFor="phone-number" className="block mb-2 font-bold mt-4">Phone Number</label>
                  <input
                    type="text"
                    id="phone-number"
                    className="w-full p-2 border my-4 border-black py-3 md:py-4 rounded-xl"
                  />
                </div>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                </div>
              </form>
            </div>
          </div>

          <div className="w-full lg:w-1/3 p-4 md:p-8">
            <div className="space-y-6 flex flex-col lg:flex-col md:flex-row-reverse gap-5">
              <div className="flex flex-col items-center w-full h-auto bg-white shadow-lg rounded-lg p-4">
                <img src={product2} alt="Oraimo Smart Watch" className="w-full h-auto object-cover mb-4" />
                <div className="w-full text-center">
                  <p className="font-semibold py-2">Oraimo Smart Watch</p>
                  <p className="text-red-500 font-semibold py-2">₦60,000.00</p>
                  <p className="text-gray-600 py-2 font-semibold">Colour: Blue</p>
                </div>
              </div>
              <div className="flex flex-col items-center w-full h-auto bg-white shadow-lg rounded-lg p-4">
                <img src={product3} alt="HP Elitebook 840 G5" className="w-full h-auto object-cover mb-4" />
                <div className="w-full text-center">
                  <p className="font-semibold py-2">HP Elitebook 840 G5</p>
                  <p className="text-red-500 font-semibold py-2">₦270,000.00</p>
                </div>
              </div>
              <div className="flex flex-col items-center w-full h-auto bg-white shadow-lg rounded-lg p-4">
                <img src={product7} alt="Apple iPhone 14 Pro Max" className="w-full h-auto object-cover mb-4" />
                <div className="w-full text-center">
                  <p className="font-semibold py-2">Apple iPhone 14 Pro Max</p>
                  <p className="text-red-500 font-semibold py-2">₦1,500,000.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-4 mx-[50px] md:ml-36 lg:mx-28">
          <button
            type="button"
            className="w-full md:w-72 border border-white py-3 bg-[#2E3192] text-white font-bold rounded"
            onClick={handlePayment}
          >
            Pay ₦1,730,000
          </button>
        </div>
      </main>
    </>
  );
};

export default PaymentCheckingTrackingStatus;
