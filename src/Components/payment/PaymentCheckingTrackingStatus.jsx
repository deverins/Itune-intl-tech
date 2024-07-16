import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import atmCard from '../imgs/atm_card.png';
import qusetionmark from '../imgs/qusetionmark.png';
import { ProductContext } from '../../context/ProductContext';
import { fetchProducts } from '../../utils/fetchProducts ';
import { toast } from 'react-toastify';

const PaymentCheckingTrackingStatus = () => {
  const [selectedCardType, setSelectedCardType] = useState('');
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('idle');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { state, dispatch } = useContext(ProductContext);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts(setProducts);
  }, []);

  const handleCardTypeChange = (type) => {
    setSelectedCardType(type);
  };

  const handleDeliveryMethodChange = (method) => {
    setSelectedDeliveryMethod(method);
  };

  const validateForm = () => {
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;
    const residenceAddress = document.getElementById('residence-address').value;
    const state = document.getElementById('state').value;
    const phoneNumber = document.getElementById('phone-number').value;

    if (!cardNumber || !expiryDate || !cvv || !residenceAddress || !state || !phoneNumber) {
      toast.warning('Please fill in all the required fields.');
      return false;
    }
    return true;
  };

  const handlePayment = () => {
    if (!validateForm()) return;

    setIsButtonDisabled(true);

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
    }, 1000);

    setTimeout(() => {
      setPaymentStatus('idle');
      setIsButtonDisabled(false);
    }, 16000);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (paymentStatus === 'successful') {
      dispatch({ type: 'CLEAR_CART' });
      navigate('');
    }
  }, [paymentStatus, dispatch, navigate]);


  const calculateTotalAmount = () => {
    return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
      <main className='w-full bg-[#afafd1]'>
        <h2 className="text-xl lg:text-2xl font-Montserrat font-bold mb-4 pt-28 ml-4 md:ml-28">Payment Information</h2>

        {paymentStatus === 'loading' && (
          <div className='w-full flex justify-center my-4 mt-6'>
            <div className='flex items-center lg:w-[402px] lg:h-[48px] sm:w-[350px] sm:h-[35px] w-[350px] h-[35px] md:w-[300px] md:h-[35px] text-white rounded-3xl text-center py-1 bg-[#EC1D25]'>
              <p className='font-semibold text-lg flex-grow'>Please fill in all the required fields.</p>
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
                  <label htmlFor="residence-address" className="block mb-2 font-bold">Residence Address</label>
                  <input
                    type="text"
                    id="residence-address"
                    className="w-full p-2 my-4 border border-black py-3 md:py-4 rounded-xl"
                  />
                </div>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                  <div className="w-full md:w-1/2">
                    <label htmlFor="state" className="block mb-2 font-bold">State</label>
                    <input
                      type="text"
                      id="state"
                      className="w-full p-2 border border-black py-3 md:py-4 rounded-xl"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <label htmlFor="phone-number" className="block mb-2 font-bold">Phone Number</label>
                    <input
                      type="text"
                      id="phone-number"
                      className="w-full p-2 border border-black py-3 md:py-4 rounded-xl"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between">
                  <label className="block mb-2 text-xl font-bold mt-6">Delivery Method</label>
                  <div className="flex items-center space-x-4 mb-6 mt-6">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2 w-5 h-5 md:w-6 md:h-6"
                        checked={selectedDeliveryMethod === 'Standard Delivery'}
                        onChange={() => handleDeliveryMethodChange('Standard Delivery')}
                      />
                      <p className="text-lg md:text-xl">Standard Delivery</p>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2 w-5 h-5 md:w-6 md:h-6"
                        checked={selectedDeliveryMethod === 'Express Delivery'}
                        onChange={() => handleDeliveryMethodChange('Express Delivery')}
                      />
                      <p className="text-lg md:text-xl">Express Delivery</p>
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="w-full lg:w-1/3 p-4 md:p-8">
            <div className="space-y-6 flex flex-col lg:flex-col md:flex-row-reverse gap-5">
              <div className="flex flex-col items-center w-full h-auto bg-white shadow-lg rounded-lg p-4">
                <h3 className="text-lg lg:text-xl font-bold p-4">Order Summary</h3>
                <div className="p-4">
                  {state.cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center mb-4">
                      <div className="flex items-center">
                        <div className="flex flex-col items-center w-full h-auto bg-white shadow-lg rounded-lg p-4">
                          <img
                            src={item.photos && item.photos[0] ? `/api/images/${item.photos[0].url}` : 'default-image-url'}
                            alt={item.name}
                            className="w-full h-auto object-cover mb-4"
                          />
                          <div className="w-full text-center">

                            <p className="font-semibold">{item.name}</p>
                            <p className="text-gray-600">Quantity: {item.quantity}</p>
                            <div className="text-lg font-semibold">
                              {item.current_price && item.current_price.length > 0 && item.current_price[0].NGN && item.current_price[0].NGN.length > 0
                                ? `₦${item.current_price[0].NGN[0]}`
                                : `₦0`}
                            </div>
                          </div>
                        </div>
                        <div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="flex justify-between items-center border-t pt-4 mt-4">
                    <p className="font-semibold text-lg">Total Amount:</p>
                    <p className="font-semibold text-lg">${calculateTotalAmount()}</p>
                  </div>
                  <button
                    className="w-full py-4 mt-4 text-white font-bold rounded-3xl bg-[#2E3192] hover:bg-[#363aae] transition duration-300"
                    onClick={handlePayment}
                    disabled={isButtonDisabled}
                  >
                    Confirm Payment
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PaymentCheckingTrackingStatus;
