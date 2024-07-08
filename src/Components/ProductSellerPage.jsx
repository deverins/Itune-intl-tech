import React from 'react';
import backgroundImg from '../Components/imgs/bg-img.png';
import music from '../Components/imgs/music.png';
import search from '../Components/imgs/Search.png';
import sale from '../Components/imgs/sale.png';
import product1 from '../Components/imgs/laptop (2).png';
import products from './productData';
// import product3 from '../Components/imgs/product3.png';
// //... import other images similarly

const ProductSellerPage = () => {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="h-96 bg-cover bg-center flex items-center justify-center px-4" style={{ backgroundImage: `url(${backgroundImg})` }}>
        {/* <div className="text-white w-full max-w-screen-lg mx-aut"> */}
          <div className='flex justify-between text-white w-full mx-8 items-end'>
            <div className='w-1/2'>
              <h1 className='font-bold text-lg md:text-5xl'>Don’t Miss Out!</h1>
              <p className='font-medium text-lg md:text-2xl'>
                Enhance your digital life with the best technology. Upgrade your work setup, find the latest gadgets, or get the perfect gift—we’ve got you covered.
              </p>

              <div className="flex items-center mt-4">
              <div className="relative flex items-center">
              <img src={search} alt="Search" className="w-6 h-6 absolute left-3" />
              <input type="text" placeholder='Search' className="px-10 w-[300px] text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent flex-" />
            </div>
            <button className="w-[95px] bg-[#2E3192] border border-white ml-6 text-white p-2 rounded-lg">Subscribe</button>
              </div>
            </div>
            <div className='w-1/2 flex justify-center '>
              <img src={music} alt="Music" className='w-28 max-w-xs md:max-w-md ml-20' />
            </div>
          </div>
        {/* </div> */}
      </section>

      {/* Hot Deals Section */}
          <div className='bg-[#b4b5e5] w-full'>

          <h2 className="text-4xl py-7 font-bold ml-14 text-[#EC1D25] mb-8">Hot Deals</h2>
          </div>
      <section className="py-2 pb-6">
        <div className="max-w-screen-lg mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Repeat this block for each product */}
            {products.map(product => (
            <div key={product.id} className="bg-[#AAABE4] p-4 rounded-lg shadow-md">
              <img src={product.image} alt={product.name} className="w-full h-42  object-cover mb-4 rounded-lg" />
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <div className="text-gray-700 mb-2">
                {product.description.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
              <p className=" font-bold mb-4">{product.price}</p>
              <button className="w-full bg-[#2E3192] text-white p-2 rounded-lg">Add to cart</button>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* Sale Section */}
      <section className="py-10 text-white bg-[#AAABE4]">
        <div>
          <img src={sale} className='w-full object-cover' alt="" />
        </div>
      </section>
    </main>
  );
};

export default ProductSellerPage;
