import React from "react";

function Footer() {
  return (
    <footer className="bg-white text-gray-900 p-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-4">
          <h3 className="text-xl font-bold mb-4">Furniro</h3>
          <p>400 University Drive Suite 200</p>
          <p>Coral Gables, FL 33134 USA</p>
        </div>

        <div className="w-full md:w-1/4 mb-4">
          <h3 className="text-xl font-bold mb-4">Links</h3>
          <ul className="space-y-6">
            <li>
              <a href="#" className="hover:text-gray-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 mb-4">
          <h3 className="text-xl font-bold mb-4">Home</h3>
          <ul className="space-y-6">
            <li>
              <a href="#" className="hover:text-gray-600">
                Payment Options
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Privacy Policies
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 mb-4">
          <h3 className="text-xl font-bold mb-4">Newsletter</h3>
          <p>Enter Your Email Address</p>
          <div className="flex flex-col sm:flex-row mt-4 gap-2">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 flex-1 rounded-l bg-transparent border-b border-black text-gray-900 focus:outline-none"
            />
            <button className="bg-white text-black p-2 rounded-r border-b border-black hover:bg-gray-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 text-left border-t border-gray-400 pt-4 pl-2">
        <p>&copy; 2024 Furniro. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
