import React, { useState } from "react";
import { bedRoomItems, diningRoomItems, livingRoomItems } from "../utils/data";
import shopBgPic from "../assets/bg2.webp";
import filter from "../assets/filter.png";
import trophy from "../assets/trophy.webp"
import warranty from "../assets/warranty.webp"
import support from "../assets/support.webp"
import Package from "../assets/package.webp"
import Footer from "../components/Footer";
function Shop() {
  const combinedDataset = [
    ...bedRoomItems,
    ...livingRoomItems,
    ...diningRoomItems,
  ];
  const categories = ["All", "bedroom", "living", "dining"];
  const [selectedCategory, setselectedCategory] = useState("All");

  const handleOnCategory = (e) => {
    setselectedCategory(e.target.value);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? combinedDataset
      : combinedDataset.filter((item) => item.category === selectedCategory);

  return (
    <>
<div className="relative w-full h-[80vh]">
  <img src={shopBgPic} alt="" className="w-full h-full object-cover" />
  <div className="absolute inset-0 flex flex-col justify-center items-center text-black"> {/* Shop heading black kar di */}
    <h1 className="text-4xl font-bold">Shop</h1> {/* Shop heading size 36px */}
    <nav className="flex mt-4" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <a
            href="#"
            className="inline-flex items-center text-lg font-extrabold text-gray-700 dark:text-gray-400"
          >
            Home 
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <svg
              className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 9 4-4-4-4"
              />
            </svg>
            <a
              href="#"
              className="ms-1 text-lg font-extralight text-gray-700 md:ms-2 dark:text-gray-400"
            >
              Shop 
            </a>
          </div>
        </li>
      </ol>
    </nav>
  </div>
</div>

<div className="flex justify-between items-center bg-[#fbf1e7] py-12 px-8">
  <div className="flex gap-4 items-center">
    <img src={filter} alt="" className="w-5 h-5" /> {/* Image size same rakha */}
    <h1 className="text-xl">Filter</h1> {/* Text size bada kar diya */}
    <h1 className="text-xl">|</h1>
    <h1 className="text-xl">Showing 1-30 of 30 results</h1> {/* Text size bada */}
  </div>

  <div className="flex items-center gap-3">
    <h1 className="text-xl">Sort By:</h1> {/* Text size barhaya */}
    <select
      value={selectedCategory}
      onChange={handleOnCategory}
      className="p-2 rounded w-48" 
    >
      {categories.map((category) => (
        <option value={category} key={category}>
          {category}
        </option>
      ))}
    </select>
  </div>
</div>



    
<h1 className='text-3xl text-center font-extrabold  mt-20 mb-8'>Our Products</h1>
<div className="flex flex-wrap justify-center mt-6 mb-6">
  
  {filteredProducts.map((item) => (
    <div key={item.id} className="flex flex-col items-center m-4 w-60 h-auto">
      <div className="w-full h-80 border rounded shadow">
        <div className="h-1/2 overflow-hidden">
          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col justify-center items-center bg-[#f4f5f7] h-1/2 p-2">
          <h2 className="text-lg text-[#3a3a3a] font-extrabold">{item.title}</h2>
          <p className="text-[#8e758b]">{item.category}</p>
          <p className="text-lg text-[#3a3a3a] font-extrabold">${item.price}</p>
        </div>
      </div>

      <button className="w-full bg-white text-[#c28c2b] font-bold py-2 mt-2 text-center border border-gray-300">
        Add to Cart
      </button>
    </div>
  ))}
</div>



<div className='bg-[#fbf1e7] p-16 pb-12 mb-8 mt-8'>
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

<Footer/>

    </>
  );
}

export default Shop;
