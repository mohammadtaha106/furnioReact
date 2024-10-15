import React, { useEffect, useState } from 'react';
import { bedRoomItems, diningRoomItems, livingRoomItems } from "../utils/data";
import { useParams, useNavigate } from 'react-router-dom'; 
import shopBgPic from "../assets/bg2.webp";
import Footer from '../components/Footer';

function ProductDetails() {
  const combinedDataset = [
    ...bedRoomItems,
    ...livingRoomItems,
    ...diningRoomItems,
  ];

  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState({});
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setLoading(true);
    setNotFound(false);

    const foundProduct = combinedDataset.find((item) => item.id === parseInt(id));
    if (foundProduct) {
      setProducts(foundProduct);
    } else {
      setNotFound(true);
    }
    setLoading(false);
  }, [id]);

  return (
    <>
      <div className="relative w-full h-[80vh]">
        <img src={shopBgPic} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-black">
          <h1 className="text-4xl font-bold">Product Detail</h1>
          <nav className="flex mt-4" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <a
                  href="#"
                  className="inline-flex items-center text-lg font-extrabold text-gray-700 dark:text-gray-400"
                >
                  Shop
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
                    Product Detail
                  </a>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container mt-8 mx-auto">
        <h1 className="text-center text-3xl font-bold uppercase text-gray-800 mb-4">
          {products.category}
        </h1>

        {loading ? (
          <div className="flex justify-center items-center h-[50vh]">
            <h1>Loading...</h1>
          </div>
        ) : notFound ? (
          <h1 className="text-center text-3xl">Product Not Found</h1>
        ) : (
          <>
            <div className="flex flex-col lg:flex-row lg:items-start gap-8 py-12">
              {/* Left: Image */}
              <div className="lg:w-1/2 w-full">
                <img
                  src={products.image}
                  alt={products.title}
                  className="w-full h-auto object-cover rounded"
                />
              </div>

              {/* Right: Product Details */}
              <div className="lg:w-1/2 w-full">
                <h2 className="text-sm text-gray-500 tracking-widest uppercase mb-2">
                  New Collection
                </h2>

                {/* Unique Black Text */}
                <p className="text-black text-lg mb-4">
                  Explore our exclusive {products.title} designed to add a touch of elegance 
                  to your {products.category}. Crafted with high-quality materials, this piece offers 
                  both style and durability, making it a perfect addition to your space.
                </p>

                <h1 className="text-4xl font-bold text-gray-900 mb-4">{products.title}</h1>
                <div className="flex items-center mb-4">
                  <span className="text-3xl text-[#c28c2b] font-bold">${products.price}</span>
                </div>

                {/* Description */}
                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-2">Description</h3>
                  <p className="text-gray-600">{products.description}</p>
                </div>

                {/* Additional Details */}
                <div className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">Details</h3>
                  <p className="text-gray-600">Size: 24.5” H x 35.5” W x 33” D</p>
                  <p className="text-gray-600">Material: {products.materials}</p>
                  <p className="text-gray-600">Weight: 40 lbs</p>
                </div>

                {/* Back Button (Moved Here) */}
                <div className="mt-8">
                  <button
                    className="bg-[#c28c2b] text-white px-4 py-2 rounded"
                    onClick={() => navigate(-1)} 
                  >
                    Go Back To Shop
                  </button>
                </div>
              </div>
            </div>

            <Footer />
          </>
        )}
      </div>
    </>
  );
}

export default ProductDetails;
