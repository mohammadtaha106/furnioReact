import React, { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import shopBgPic from "../assets/bg2.webp";
import Footer from "../components/Footer";
function Checkout() {
  const { cartItems, setcartItems } = useContext(CartContext);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (savedCartItems) {
      setcartItems(savedCartItems);
    }
  }, [setcartItems]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data: ", data);
  };

  return (
  <>
<div className="relative w-full h-[80vh]">
        <img src={shopBgPic} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-black">
          {" "}
          {/* Shop heading black kar di */}
          <h1 className="text-4xl font-bold">Checkout</h1>{" "}
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
                    Checkout
                  </a>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>


    <div className="max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
    
      <div className="md:col-span-2 p-6 rounded-md">
        <h2 className="text-4xl font-semibold mb-6">Billing Details</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-8"
        >
         
          <div className="flex flex-col">
            <label className="mb-2">First Name</label>
            <input
              className="border border-gray-300 p-4 rounded-2xl" 
              {...register("firstName", {
                required: "First name is required",
                minLength: {
                  value: 2,
                  message: "First name must be at least 2 characters",
                },
              })}
            />
            {errors.firstName && (
              <span className="text-red-600">{errors.firstName.message}</span>
            )}
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label className="mb-2">Last Name</label>
            <input
              className="border border-gray-300 p-4 rounded-2xl" // Updated here
              {...register("lastName", {
                required: "Last name is required",
                minLength: {
                  value: 2,
                  message: "Last name must be at least 2 characters",
                },
              })}
            />
            {errors.lastName && (
              <span className="text-red-600">{errors.lastName.message}</span>
            )}
          </div>

          {/* Company Name (Optional) */}
          <div className="col-span-2 flex flex-col">
            <label className="mb-2">Company Name (Optional)</label>
            <input
              className="border border-gray-300 p-4 rounded-2xl" 
              {...register("companyName")}
            />
          </div>

       
          <div className="col-span-2 flex flex-col">
            <label className="mb-2">Country / Region</label>
            <select
              className="border border-gray-300 p-4 rounded-2xl"
              {...register("country", {
                required: "Please select your country",
              })}
            >
              <option value="">Select a country</option>
              <option value="Pakistan">Pakistan</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
              <option value="Germany">Germany</option>
              <option value="France">France</option>
              <option value="China">China</option>
              <option value="Japan">Japan</option>
              <option value="Brazil">Brazil</option>
            </select>
            {errors.country && (
              <span className="text-red-600">{errors.country.message}</span>
            )}
          </div>

          
          <div className="col-span-2 flex flex-col">
            <label className="mb-2">Street Address</label>
            <input
              className="border border-gray-300 p-4 rounded-2xl" 
              {...register("streetAddress", {
                required: "Street address is required",
              })}
            />
            {errors.streetAddress && (
              <span className="text-red-600">
                {errors.streetAddress.message}
              </span>
            )}
          </div>

          {/* Town / City */}
          <div className="flex flex-col">
            <label className="mb-2">Town / City</label>
            <input
              className="border border-gray-300 p-4 rounded-2xl" // Updated here
              {...register("city", {
                required: "City is required",
              })}
            />
            {errors.city && (
              <span className="text-red-600">{errors.city.message}</span>
            )}
          </div>

          {/* Province */}
          <div className="flex flex-col">
            <label className="mb-2">Province</label>
            <input
              className="border border-gray-300 p-4 rounded-2xl" // Updated here
              {...register("province", {
                required: "Province is required",
              })}
            />
            {errors.province && (
              <span className="text-red-600">{errors.province.message}</span>
            )}
          </div>

          {/* Zip Code */}
          <div className="flex flex-col">
            <label className="mb-2">Zip Code</label>
            <input
              className="border border-gray-300 p-4 rounded-2xl" // Updated here
              {...register("zipCode", {
                required: "Zip code is required",
                pattern: {
                  value: /^[0-9]{5}$/,
                  message: "Please enter a valid 5-digit zip code",
                },
              })}
            />
            {errors.zipCode && (
              <span className="text-red-600">{errors.zipCode.message}</span>
            )}
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="mb-2">Phone</label>
            <input
              className="border border-gray-300 p-4 rounded-2xl" // Updated here
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Please enter a valid 10-digit phone number",
                },
              })}
            />
            {errors.phone && (
              <span className="text-red-600">{errors.phone.message}</span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-2">Email Address</label>
            <input
              className="border border-gray-300 p-4 rounded-2xl" // Updated here
              type="email"
              {...register("email", {
                required: "Email address is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-600">{errors.email.message}</span>
            )}
          </div>
        </form>
      </div>

      {/* Right Section - Cart Summary */}
      <div className="md:col-span-1 p-6 rounded-md">
  <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
  <div className="space-y-4">
    {/* Products and SubTotal Header */}
    <div className="flex justify-between text-xl font-extrabold">
      <p>Products</p>
      <p>Subtotal</p>
    </div>

    {/* Product List */}
    {cartItems.length > 0 ? (
      cartItems.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center border-b py-2"
        >
          <div>
            <p className="text-md">{item.title}</p>
            <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
          </div>
          <p className="text-lg font-medium">
            ${item.price * item.quantity} {/* Displaying total for this item */}
          </p>
        </div>
      ))
    ) : (
      <p>No items in cart</p>
    )}
  </div>

  {/* Total Amount Section */}
  <div className="mt-2  pt-4">

  <div className="flex justify-between items-center mb-2 ">
  <div>
    <p className="text-lg font-semibold">Subtotal</p>
  
  </div>
  <p className="text-lg font-medium">${total}</p>
</div>

<div className="flex justify-between items-center mb-2 border-b pb-4 ">
  <div>
    <p className="text-lg font-semibold">Shipping Cost</p>
  
  </div>
  <p className="text-lg font-medium">$0.00</p>
</div>


<div className="flex justify-between items-center mb-2 mt-4 border-b pb-4 ">
  <div>
    <p className="text-xl font-semibold">Total</p>
  
  </div>
  <p className="text-2xl font-medium text-[#ce8924]">${total}</p>
</div>

   
  </div>

  {/* Place Order Button */}
  <button
  type="submit"
  className="text-black border border-black w-full py-3 rounded-2xl transition font-bold text-lg hover:bg-black hover:text-white hover:border-transparent"
  onClick={handleSubmit(onSubmit)}
>
  Place Order
</button>

</div>

    </div>

    <Footer/>
    </>
  );
  
}

export default Checkout;
