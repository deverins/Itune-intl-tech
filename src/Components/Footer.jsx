import React from 'react';
import footerLogo from '../Components/imgs/footer-logo-loader.png';

const Footer = () => {
  return (
    <>
      <footer className="bg-[#111236] text-white">
        <div className="max-w-screen-lg mx-14 font-medium grid grid-cols-2 md:grid-cols-3 gap-20 pt-8">
          {/* Categories */}
          <div>
            <h3 className="font-bold text-xl mb-4">Categories</h3>
            <ul className="space-y-3">
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
            <h3 className="font-bold text-xl mb-4">Services</h3>
            <ul className="space-y-3">
              <li>CCTV installation</li>
              <li>Network installation</li>
              <li>Dstv decoder installation</li>
              <li>Gotv decoder installation</li>
              <li>Dstv subscription</li>
              <li>Gotv subscription</li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="font-bold text-xl mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>Home</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 mx-14">
          <hr />
          <h4 className="font-bold mb-2 mt-4">Newsletter</h4>
          <div className="mt-4 flex">
            <div className="relative flex items-center">
              <img src={''} alt="Search" className="w-6 h-6 absolute left-3" />
              <input type="text" placeholder='Email Address' className="px-10 w-[258px] text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent flex-" />
            </div>
            <button className="w-[95px] bg-[#2E3192] border border-white ml-6 text-white p-2 rounded-lg">Subscribe</button>
          </div>
          <div className="mb-4 mt-3">
            <p>Mobile: 08123456789</p>
            <p>Email: ituneintltech@gmail.com</p>
          </div>
        </div>

        <div className="bg-white py-4 flex justify-between items-center px-8">
          <img src={footerLogo} alt="Logo" className="h-12 ml-4" />
          <p className="text-gray-600">©2024ituneintltech</p>
          <button className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
            <img src={''} alt="Up Arrow" className="w-6 h-6" />
          </button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
