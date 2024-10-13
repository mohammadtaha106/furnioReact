import React from "react";
import { useForm } from "react-hook-form";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import Footer from "../components/Footer";
import shopBgPic from "../assets/bg2.webp";
function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
<div className="relative w-full h-[80vh]">
        <img src={shopBgPic} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-black">
          {" "}
          {/* Shop heading black kar di */}
          <h1 className="text-4xl font-bold">Contact</h1>{" "}
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
                    Contact
                  </a>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-16 ">
        {/* Larger Heading */}
        <h2 className="text-center text-3xl font-bold mb-4 ">
          Get In Touch With Us
        </h2>
        {/* Grey Text Below Heading */}
        <p className="text-gray-400 text-center">
          For More Information About Our Product & Services, Please Feel Free To
          Drop Us
        </p>
        <p className="text-gray-400 text-center">
          An Email. Our Staff Will Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      {/* Form and Contact Information */}
      <div className="flex justify-center items-center py-10 px-4">
        <div className="flex flex-col md:flex-row w-full max-w-4xl gap-8">
          {/* Left Side - Address, Phone, Working Time */}
          <div className="flex flex-col w-full md:w-1/3 space-y-8">
            {/* Address Section */}
            <div>
              <div className="flex items-center mb-2">
                <span className="material-icons">
                  <FaLocationDot />
                </span>
                <span className="ml-2 font-bold">Address</span>
              </div>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>

            {/* Phone Section */}
            <div>
              <div className="flex items-center mb-2">
                <span className="material-icons">
                  <FaPhoneAlt />
                </span>
                <span className="ml-2 font-bold">Phone</span>
              </div>
              <p>Mobile: (+84) 546-6789</p>
              <p>Hotline: (+84) 456-6788</p>
            </div>

            {/* Working Time Section */}
            <div>
              <div className="flex items-center mb-2">
                <span className="material-icons">
                  <FaClock />
                </span>
                <span className="ml-2 font-bold">Working Time</span>
              </div>
              <p>Monday-Friday: 8:00 - 22:00</p>
              <p>Saturday-Sunday: 8:00 - 21:00</p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="flex flex-col w-full md:w-2/3 bg-white p-8 rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div className="flex flex-col">
                <label>Your Name</label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  className="border p-3 rounded w-full"
                />
                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}
              </div>

              {/* Email Field */}
              <div className="flex flex-col">
                <label>Email Address</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="border p-3 rounded w-full"
                />
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
              </div>

              {/* Subject Field */}
              <div className="flex flex-col">
                <label>Subject</label>
                <input
                  type="text"
                  {...register("subject")}
                  className="border p-3 rounded w-full"
                  placeholder="This is optional"
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col">
                <label>Message</label>
                <textarea
                  {...register("message", { required: true })}
                  className="border p-3 rounded w-full"
                  rows="4"
                  placeholder="Hi! I'd like to ask about..."
                ></textarea>
                {errors.message && (
                  <span className="text-red-500">Message is required</span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#ce8924] text-white px-5 py-3 rounded hover:bg-yellow-500 w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default Contact;
