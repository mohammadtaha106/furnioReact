import React from 'react';
import vid from '../assets/vid.mp4';
import Footer from '../components/Footer';
import shopBgPic from "../assets/bg2.webp";

function AboutUs() {
  return (
    <>

<div className="relative w-full h-[80vh]">
        <img src={shopBgPic} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-black">
          {" "}
          {/* Shop heading black kar di */}
          <h1 className="text-4xl font-bold">About</h1>{" "}
          {/* Shop heading size 36px */}
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
                    About
                  </a>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

     <div className="flex flex-col md:flex-row justify-between items-start mt-16 h-screen p-6">
  
  <div className="w-full md:w-1/2 p-4 flex flex-col">
    <h1 className="text-5xl font-bold text-black mb-4">About Us</h1>
    <p className="text-lg mb-4">
      We have been providing high-quality furniture since 2024. Our commitment to excellence and customer satisfaction has made us a leader in the industry.
    </p>
    <p className="text-lg mb-4">
      Our mission is to transform homes with stylish and comfortable furniture that meets the needs of every customer. Each piece is crafted with care, ensuring durability and aesthetic appeal.
    </p>
    <p className="text-lg mb-4">
      Explore our diverse collection and discover how we can help you create your dream space. Join us on this journey to make your home more beautiful and welcoming.
    </p>
  </div>
  
  {/* Video Section */}
  <div className="w-full md:w-1/2 flex justify-center items-center p-4">
    <video 
      autoPlay 
      loop 
      muted 
      className="w-[350px] h-[450px] object-cover rounded-lg shadow-md" // Adjusted size for larger video
    >
      <source src={vid} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>

<Footer/>
    </>
   
  );
}

export default AboutUs;
