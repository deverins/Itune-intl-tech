import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import cartt from '../Components/imgs/cart2.png';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const CartPage = () => {
  const { state, dispatch } = useContext(ProductContext);
  const { cart } = state;

  const parsePrice = (priceString) => {
    const priceNumber = priceString.replace(/NGN|,/g, '').trim();
    return Number(priceNumber);
  };

  const calculateTotalPrice = (price, quantity) => {
    return parsePrice(price) * Number(quantity);
  };

  const handleRemove = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const handleIncrement = (productId) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: productId });
    toast.success('Product added successfully');
  };

  const handleDecrement = (productId) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: productId });
    toast.info('Item quantity has been updated');
  };

  const subtotal = cart.reduce((total, product) => total + calculateTotalPrice(product.price, product.quantity), 0);
  const discount = 100000;
  const total = subtotal - discount;

  return (
    <>
      <div className="cart-page-container font-bold bg-[#b4b5e5] overflow-x-hidden">
        <div className="flex items-center pt-28 mx-auto max-w-screen-lg">
          <div className='ml-3 lg:-ml-2'>
            <img src={cartt} alt="Cart" className="w-10 h-10 mr-2" />
          </div>
          Cart
        </div>
        <p className="flex items-center text-sm mt-2 mx-auto max-w-screen-lg">
          <span className='font-bold ml-4 md:ml-4 text-lg mr-1'>{cart.length}</span> items in your cart
        </p>
        <section className="max-w-screen-lg mx-auto p-4 bg-white rounded-2xl shadow-lg mt-4">
          <table className="w-full">
            <thead className="hidden md:table-header-group">
              <tr className="border-b">
                <th className="py-2">Product</th>
                <th className="py-2">Price</th>
                <th className="py-2">Quantity</th>
                <th className="py-2">Total Price</th>
                <th className="py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr key={product.id} className="border-b">
                  <td className="py-4 flex flex-col md:flex-row items-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="bg-[#DDDDDD] rounded-xl w-full h-auto sm:w-[300px] sm:h-[300px] md:w-[242.91px] md:h-[210.23px] object-cover mb-4 md:mb-0 md:mr-4"
                    />
                    <div className="text-center md:text-left">
                      <h3 className="font-semibold text-[12px] md:text-[16px] lg:text-[22px]">{product.name}</h3>
                    </div>
                  </td>
                  <td className="py-4">₦{parsePrice(product.price).toLocaleString()}</td>
                  <td className="py-4">
                    <div className="flex items-center lg:w-[75px] lg:h-[50px] md:w-[55px] md:p-2 md:h-[35px] w-[53px] h-[29px] rounded-lg border space-x-2 lg:space-x-mx-4 font-bold border-[#2E3192] text-[#2E3192]">
                      <button onClick={() => handleDecrement(product.id)} className="font-bold md:font-semibold md:text-sm"><span className=' font-bold text-3xl'>-</span></button>
                      <p className="font-bold md:font-semibold md:text-sm">{product.quantity}</p>
                      <button onClick={() => handleIncrement(product.id)} className="font-bold md:font-semibold md:text-sm"><span className=' font-bold text-2xl'>+</span></button>
                    </div>
                  </td>
                  <td className="py-4">₦{calculateTotalPrice(product.price, product.quantity).toLocaleString()}</td>
                  <td className="py-4 ">
                    <button
                      onClick={() => handleRemove(product.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-8">
            <hr />
          </div>
          <div className="flex justify-between mt-4 gap-10">
            <div className="ml-4 font-bold">
              <p>Subtotal: <span className="ml-20">₦{subtotal.toLocaleString()}</span></p>
              <p>Discount: <span className="ml-20">₦{discount.toLocaleString()}</span></p>
              <p>Total: <span className="ml-28">₦{total.toLocaleString()}</span></p>
            </div>
          </div>
          <div className="mt-10">
            <Link to="/product/checkout">
              <button className="mt-6 mb-2 py-4 rounded w-[300px] bg-[#2E3192] border border-white text-white p-2">
                Check out
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default CartPage;
