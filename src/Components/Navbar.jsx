import React, { useContext } from 'react';
import logo from '../Components/imgs/logo.png';
import cartt from '../Components/imgs/cart.png';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';

export const Navbar = () => {
  const { state } = useContext(ProductContext);
  const { cart } = state;
  const totalItemsInCart = cart.reduce((total, product) => total + product.quantity, 0);

  return (
    <>
      <nav className="bg-[#2E3192] top-0 h-24 w-full z-50 fixed flex justify-between items-center px-4 md:px-20 text-white">
        <div className="mt-2">
          <Link to={''}>
            <img className="w-28" src={logo} alt="Logo" />
          </Link>
        </div>
        <ul className="flex items-center gap-8 font-bold text-[12px] lg:text-[23px] md:text-[12px]">
          <li>
            <Link to="/" className="flex items-center hover:text-gray-300">
              All Products
            </Link>
          </li>
          <li>
            <Link to="/product/cart" className="flex items-center hover:text-gray-300 relative">
              <div className="relative">
                <img src={cartt} alt="Cart" className="w-10 h-10 mr-2" />
                {totalItemsInCart > 0 && (
                  <span className="absolute top-0 left-5 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {totalItemsInCart}
                  </span>
                )}
              </div>
              Cart
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
