import React from 'react';
import cartProduct from '../Components/cartPage';
import cart from '../Components/imgs/cart2.png';
import { Link } from 'react-router-dom';

const CartPage = () => {
  return (
    <>
      <div className="cart-page-container font-bold bg-[#b4b5e5] ">
          <div className="flex items-center pt-28 mx-auto max-w-screen-lg">
            <div>
              <img src={cart} alt="Cart" className="w-10 h-10 mr-2 " />
            </div>
            Cart
          </div>
          <p className='flex items-center text-sm mt-2 mx-auto max-w-screen-lg'>3 items in your cart</p>
        <section className="max-w-screen-lg mx-auto p-4 bg-white rounded-2xl shadow-lg mt-4">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="py-2">Product</th>
                <th className="py-2">Price</th>
                <th className="py-2">Quantity</th>
                <th className="py-2">Total Price</th>
              </tr>
            </thead>
            <tbody>
              {cartProduct.map((product) => (
                <tr key={product.id} className="border-b">
                  <td className="py-4 flex flex-col md:flex-row items-center">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full md:w-[242.91px] md:h-[210.23px] object-cover mb-4 md:mb-0 md:mr-4" 
                    />
                    <div className="text-center md:text-left">
                      <h3 className="font-semibold">{product.name}</h3>
                      {product.description.map((desc, index) => (
                        <p key={index}>{desc}</p>
                      ))}
                    </div>
                  </td>
                  <td className="py-4">{product.price}</td>
                  <td className="py-4">
                    <div className="flex items-center w-[77px] h-[50px] rounded-lg border gap-6 text-bold border-purple-300 text-purple-300">
                      <p className='font-bold'>-</p>
                      <p className='font-bold'>{product.quantity}</p>
                      <p className='font-bold'>+</p>
                    </div>
                  </td>
                  <td className="py-4">{product.totalPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-8">
            <hr />
          </div>
          <div className="flex justify-between mt-4 gap-10">
            <div className="ml-4 font-bold">
              <p>Subtotal: <span className='ml-20'>₦1,830,000.00</span></p>
              <p>Discount: <span className='ml-20'>₦100,000.00</span> </p>
              <p>Total:  <span className='ml-28 '></span>₦1,730,000.00</p>
            </div>
          </div>
          <div className='mt-10'>
            <Link to='/product/checkout'>
              <button className="mt-6 mb-2 py-4 rounded w-[300px] bg-[#2E3192] border border-white text-white p-2 ">
                Check out
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default CartPage;
