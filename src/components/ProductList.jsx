import React from 'react';
import { bedRoomItems, diningRoomItems, livingRoomItems } from '../utils/data';
import trophy from "../assets/trophy.webp"
import warranty from "../assets/warranty.webp"
import support from "../assets/support.webp"
import Package from "../assets/package.webp"
function ProductList() {
  const combinedDataset = [...bedRoomItems, ...livingRoomItems, ...diningRoomItems];

  const shuffledArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const getRandomProducts = (dataset, count) => {
    const shuffled = shuffledArray(dataset);
    return shuffled.slice(0, count);
  };

  const selectedProducts = getRandomProducts(combinedDataset, 8);

  return (
    <>
    <h1 className='text-3xl text-center font-extrabold  mt-20 mb-8'>Our Products</h1>
    <div className="flex flex-wrap justify-center">
      {selectedProducts.map(product => (
        <div key={product.id} className="flex flex-col m-4 w-60 h-64 border rounded shadow"> 
          <div className="h-1/2 overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>

         
          <div className="flex flex-col justify-center items-center bg-[#f4f5f7] h-1/2 p-2">
            <h2 className="text-lg text-[#3a3a3a] font-extrabold">{product.title}</h2>
            <p className="text-[#8e758b]"> {product.category}</p>
            <p className="text-lg text-[#3a3a3a] font-extrabold">${product.price}</p>
          </div>
        </div>
      ))}

      
    </div>
    <div className='flex justify-center mt-6 mb-8 '>  <button className="w-60 p-2 h-10 bg-white text-[#c28c2b] border border-[#c28c2b]  transition duration-300 hover:bg-[#c28c2b] hover:text-white">Show More</button></div>
    
    <div className='bg-[#fbf1e7] p-16 pb-12 mb-8'>
  <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
    <div className='flex items-center'>
      <img src={trophy} alt="" className='w-12 h-12' />
      <div className='flex flex-col ml-4'>
        <span className='text-[16px] text-black font-extrabold'>High Quality</span>
        <span className='text-[16px] text-[#5e7da3]'>Crafted from top materials</span>
      </div>
    </div>

    <div className='flex items-center'>
      <img src={warranty} alt="" className='w-12 h-12' />
      <div className='flex flex-col ml-4'>
        <span className='text-[16px] text-black font-extrabold'>Warranty Protection</span>
        <span className='text-[16px] text-[#5e7da3]'>Over 2 years</span>
      </div>
    </div>

    <div className='flex items-center'>
      <img src={Package} alt="" className='w-12 h-12' />
      <div className='flex flex-col ml-4'>
        <span className='text-[16px] font-extrabold text-black'>Free Shipping</span>
        <span className='text-[16px] text-[#5e7da3]'>Order over 150 $</span>
      </div>
    </div>

    <div className='flex items-center'>
      <img src={support} alt="" className='w-12 h-12' />
      <div className='flex flex-col ml-4'>
        <span className='text-[16px] font-extrabold text-black'>24/7 Support</span>
        <span className='text-[16px] text-[#5e7da3]'>Dedicated support</span>
      </div>
    </div>
  </div>
</div>




    </>
  );
}

export default ProductList;
