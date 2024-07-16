import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../utils/Loading';
import { fetchProductDetails } from '../utils/fetchProductDetails';
import { ProductContext } from '../context/ProductContext';
import { toast } from 'react-toastify';

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { dispatch } = useContext(ProductContext);

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } });
    toast.success(`Product added to cart successfully!`);
  };

  useEffect(() => {
    fetchProductDetails(productId, setProduct, setLoading);
  }, [productId]);

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return <div>Error loading product details</div>;
  }

  return (
    <main className="pt-24 overflow-x-hidden">
      <div className='bg-[#b4b5e5] w-full'>
        <h2 className="lg:text-2xl py-5 font-extrabold ml-14 text-[#EC1D25] xl:text-3xl md:text-[24px] mb-8">
          Product details
        </h2>
      </div>

      <section className="py-2 pb-6">
        <div className="lg:max-w-screen-lg xl:mx-auto mx-4 md:mx-4 lg:mx-10 sm:mx-4 bg-inherit shadow-xl p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex justify-center">
              {product.photos && product.photos.length > 0 && (
                <img src={`/api/images/${product.photos[0].url}`} alt={product.name} className="w-full object-cover rounded-lg max-w-md" />
              )}
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <div className="text-gray-700 mb-2">
                  {product.description ? product.description.split('\r\n').map((line, index) => (
                    <p key={index} className='text-[#000000] font-Montserrat font-medium text-[16px]'>{line}</p>
                  )) : <p className='text-[#000000] font-Montserrat font-medium text-[16px]'>No description available</p>}
                </div>
                <p className="font-bold text-2xl mb-4">
                  {product.current_price && product.current_price.length > 0 && product.current_price[0].NGN && product.current_price[0].NGN.length > 0
                    ? `₦${product.current_price[0].NGN[0]}`
                    : `₦0`}
                </p>
              </div>
              <div>
                <button
                  className="bg-[#2E3192] text-white py-2 px-4 rounded-md w-full mt-4"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetailsPage;
