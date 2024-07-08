import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Make sure to import useNavigate from react-router-dom

const CardVerification = () => {
  // Initialize with default OTP values
  const [otp, setOtp] = useState(['7', '1', '6', '4']);
  const navigate = useNavigate(); // Correct usage of useNavigate

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== '' && index < 3) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleResendCode = () => {
    // Implement resend code logic here
  };

  const handleVerify = () => {
    navigate('/'); // Navigate to the home page or desired route
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg p-8 w-[400px] shadow-md">
        <div className="flex justify-end">
          <button className="text-gray-500 text-xl">&times;</button>
        </div>
        <h2 className="text-center text-2xl font-semibold mb-4">Card Verification</h2>
        <p className="text-center mb-4">
          To proceed, you need to confirm the payment by entering the OTP received on your registered mobile number with the debit card.
        </p>
        <div className="flex justify-center space-x-2 mb-4">
          {otp.map((value, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              maxLength="1"
              className="w-12 h-12 text-center text-xl border border-gray-300 rounded"
              value={value}
              onChange={(e) => handleChange(e, index)}
            />
          ))}
        </div>
        <div className="text-center mb-4">
          <button className="text-lg underline" onClick={handleResendCode}>
            Resend Code
          </button>
        </div>
        <div className="text-center">
          <button className="w-full py-2 bg-[#2E3192] text-2xl font-bold text-white rounded" onClick={handleVerify}>
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardVerification;
