import React from 'react';
import footerLogo from '../Components/imgs/footer-logo-loader.png';
import email from '../Components/imgs/email.png';
import arrow from '../Components/imgs/arrow-up.png';

const Footer = () => {
  return (
    <>
      <footer className="bg-[#111236] text-white">
        <div className="max-w-screen-lg mx-14 font-medium flex flex-wrap gap-8 justify-between pt-8">
          {/* Categories */}
          <div>
            <h3 className="font-bold text-[16px] lg:text-[20px] md:text-[16px] mb-4">Categories</h3>
            <ul className="space-y-2 font-medium lg:text-[20px] md:text-[16px]">
              <li>Computers and accessories</li>
              <li>Smartphones and tablets</li>
              <li>Wearable technology</li>
              <li>Audio and entertainment</li>
              <li>Home and office Equipment</li>
              <li>Gaming</li>
              <li>Cameras and photography</li>
              <li>Networking and connectivity</li>
              <li>Storage and memory</li>
            </ul>
          </div>
          {/* Services */}
          <div>
            <h3 className="font-bold text-[16px] lg:text-[20px] md:text-[16px] mb-4">Services</h3>
            <ul className="space-y-2 font-medium text-[16px] lg:text-[20px] md:text-[16px]">
              <li>CCTV installation</li>
              <li>Network installation</li>
              <li>Dstv decoder installation</li>
              <li>Gotv decoder installation</li>
              <li>Dstv subscription</li>
              <li>Gotv subscription</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 font-bold border border-l-inherit">
        </div>
        <div className="mb-4 mt-2 mx-14">
          <p>Mobile: 08123456789</p>
          <p>Email: ituneintltech@gmail.com</p>
        </div>

        <div className="bg-white py-3 flex justify-between items-center lg:px-8 px-4 md:px-2">
          <img src={footerLogo} alt="Logo" className="h-12 ml-4" />
          <p className="text-gray-600">©2024ituneintltech</p>
          <button 
  className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center"
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>
  <img src={arrow} alt="Up Arrow" className="w-6 h-6" />
</button>

        </div>
      </footer>
    </>
  );
};

export default Footer;
