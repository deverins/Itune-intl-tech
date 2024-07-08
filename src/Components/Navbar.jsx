import React, { useState } from 'react';
import logo from '../Components/imgs/logo.png';
import cart from '../Components/imgs/cart.png';
import wishList from '../Components/imgs/Favorite_light.png';
import three from '../Components/imgs/three.png';
import user from '../Components/imgs/User_alt.png';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <nav className="bg-[#2E3192] top-0 h-24 w-full fixed flex justify-between items-center px-4 md:px-20 text-white">
      <div className="mt-2">
        <Link to={''}>
          <img className="w-28" src={logo} alt="Logo" />
        </Link>
      </div>
      <ul className="hidden sm:flex items-center gap-8 font-bold text-2xl">
        <li>
          <Link to="/" className="flex items-center hover:text-gray-300">
            All Products
          </Link>
        </li>
        <li>
        <Link to="/product/cart" className="flex items-center hover:text-gray-300">
      <div className='relative'>
        <img src={cart} alt="Cart" className="w-10 h-10 mr-2" />
        <img src={three} alt="" className="absolute top-0 left-5 w-5 h-5" />
      </div>
      Cart
    </Link>
        </li>
        <li>
          <Link to="" className="flex items-center hover:text-gray-300">
            <img src={wishList} alt="Wish List" className="w-10 h-10 mr-2" />
            Wishlist
          </Link>
        </li>
        <li>
          <Link to="" className="flex items-center hover:text-gray-300">
            <img src={user} alt="Account" className="w-10 h-10 mr-2" />
            Account
          </Link>
        </li>
      </ul>
      <div className="sm:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0zM0 7h20v2H0zM0 11h20v2H0zM0 15h20v2H0z" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="sm:hidden absolute top-24 left-0 right-0 bg-[#2E3192] text-white flex flex-col items-center gap-4 shadow-lg">
          <Link to="/" className="flex items-center hover:text-gray-300" onClick={toggleMenu}>
            All Products
          </Link>
          <Link to="/product/cart" className="flex items-center hover:text-gray-300" onClick={toggleMenu}>
            <img src={cart} alt="Cart" className="w-10 h-10 mr-2" />
            Cart
          </Link>
          <Link to="" className="flex items-center hover:text-gray-300" onClick={toggleMenu}>
            <img src={wishList} alt="Wish List" className="w-10 h-10 mr-2" />
            <p>Wishlist</p>
          </Link>
          <Link to="" className="flex items-center hover:text-gray-300" onClick={toggleMenu}>
            <img src={user} alt="Account" className="w-10 h-10 mr-2" />
            Account
          </Link>
        </div>
      )}
    </nav>
    </>
  );
};

export default Navbar;
