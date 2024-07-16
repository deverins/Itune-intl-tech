import React, { useEffect, useState, useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import Loading from '../utils/Loading';
import backgroundImg from '../Components/imgs/bg-img.png';
import music from '../Components/imgs/screen-lap.png';
import music1 from '../Components/imgs/screen-lap2.png';
import sale from '../Components/imgs/sale.png';
import search from '../Components/imgs/Search.png';
import { fetchProducts } from '../utils/fetchProducts ';
import { useNavigate } from 'react-router';

const ProductSellerPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const { dispatch } = useContext(ProductContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts(setProducts, setLoading, setNextPage, setPreviousPage, setTotalPages, currentPage);
  }, [currentPage]);

  const handleCardClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleNextPage = () => {
    if (nextPage) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePreviousPage = () => {
    if (previousPage) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <main className="pt-24 overflow-x-hidden">
      {/* Hero Section */}
      <section className="h-auto py-4 bg-cover bg-center px-2 w-full" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className='flex flex-col md:flex-row justify-between md:-mx-14 md:ml-4 ml-2 text-white lg:mx-14 items-end'>
          <div className='w-full md:w-1/2 mb-4 md:mb-0'>
            <h1 className='font-bold text-lg md:text-5xl mt-10'>Don’t Miss Out!</h1>
            <p className='font-medium text-lg md:text-2xl w-full md:w-10/12 lg:w-8/12'>
              Enhance your digital life with the best technology. Upgrade your work setup, find the latest gadgets, or get the perfect gift—we’ve got you covered.
            </p>
          </div>
          <div className='w-full md:w-1/2 flex justify-center md:justify-end'>
            <img src={music} alt="Music" className='hidden md:block w-[337px] lg:w-[488px] lg:h-[222.2px]' />
            <img src={music1} alt="Music" className='block md:hidden w-[372px] h-[115.24px]' />
          </div>
        </div>
        <div className="flex items-center mt-10 lg:w-1/2 md:w-full justify-center md:justify-start px-2">
          <div className="relative flex items-center w-full max-w-md mb-2 md:mb-0 md:mr-4 pl-0 lg:pl-12 md:-pl-12">
            <img src={search} alt="Search" className="w-6 h-6 absolute inset-y-2 left-2 sm:left-2 md:left-2 lg:left-[55px] xl:left-[50px]" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-3 py-2 w-full text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
            />
          </div>
          <div className='md:mb-2 mb-2 lg:mb-0 xl:mb-0 sm:mb-2'>
            <button className="bg-[#2E3192] text-white py-2 px-4 rounded-md ml-2">Search</button>
          </div>
        </div>
      </section>

      <div className='bg-[#b4b5e5] w-full'>
        <h2 className="lg:text-2xl py-5 font-extrabold ml-14 text-[#EC1D25] xl:text-3xl md:text-[24px] mb-8">
          Hot Deals
        </h2>
      </div>

      <section className="py-2 pb-6">
        <div className="lg:max-w-screen-lg xl:mx-auto mx-4 md:mx-4 lg:mx-10 sm:mx-4">
          {loading ? (
            <Loading />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map(product => (
                <div
                  key={product.id}
                  className="bg-[#AAABE4] hover:shadow-2xl p-4 rounded-lg shadow-md flex flex-col justify-between transition-scale hover:scale-100 cursor-pointer"
                  onClick={() => handleCardClick(product.id)}
                >
                  <div>
                    <img src={`/api/images/${product.photos[0].url}`} alt={product.name} className="w-full object-cover mb-4 rounded-lg md:w-3/4 mx-auto transition-transform transform hover:scale-105" />
                    <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                    <p className="font-bold mb-4">
                      {product.current_price && product.current_price.length > 0 && product.current_price[0].NGN && product.current_price[0].NGN.length > 0
                        ? `₦${product.current_price[0].NGN[0]}`
                        : `₦0`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      {/* Sale Section */}
      <section className="py-10 text-white bg-[#AAABE4]">
        <div className='lg:max-w-screen-lg xl:mx-auto mx-4 md:mx-4 lg:mx-10 sm:mx-4'>
          <div className="flex justify-between mt-2 mb-6">
            <button
              onClick={handlePreviousPage}
              disabled={!previousPage}
              className="px-4 py-2 mx-2 border border-[#2E3192] w-40 font-bold text[18px] text-black rounded-md hover:border-2 disabled:border-[#151736]"
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={!nextPage}
              className="px-4 py-4 mx-2 bg-[#2E3192] text-white font-bold text[18px] w-40 rounded-md hover:bg-[#202364] disabled:bg-[#212252]"
            >
              Next
            </button>
          </div>
        </div>
        <div>
          <img src={sale} className='w-full object-cover' alt="Sale" />
        </div>
      </section>
    </main>
  );
};

export default ProductSellerPage;
