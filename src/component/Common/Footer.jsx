import React from "react";
import { Link } from "react-router-dom";
import { FaMeta } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t mt-16 pt-6 ">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-8  px-4 ">
        <div>
          <h3 className="text-lg text-gray-800 mb-4 ">Newsletter</h3>
          <p className="text-gray-500 mb-4 text-sm tracking-tighter">
            Be the first to hear about new products, exclusive events and online
            offers.
          </p>
          <p className="text-sm font-medium text-gray-500 mb-2">
            Sign up and get 10% off your first order.
          </p>
          {/* Newsletter form */}
          <form className="flex">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="p-3 w-full text-sm border-l border-t border-b border-gray-300 rounded-l-md focus:outline-none focus:right-2 focus:ring-gray-500 transition-all "
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-500">
            <li>
              <Link
                to="#"
                className="hover:text-gray-500 transition-colors mb-4 text-sm tracking-tighter"
              >
                Men's Top Wear
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-gray-500 transition-colors mb-4 text-sm tracking-tighter"
              >
                Women's Top Wear
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-gray-500 transition-colors mb-4 text-sm tracking-tighter"
              >
                Bottom Wear
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-gray-500 transition-colors mb-4 text-sm tracking-tighter"
              >
                Top Wear
              </Link>
            </li>
          </ul>
        </div>
        {/* Support Links */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Support</h3>
          <ul className="space-y-2 text-gray-500">
            <li>
              <Link
                to="#"
                className="hover:text-gray-500 transition-colors mb-4 text-sm tracking-tighter"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-gray-500 transition-colors mb-4 text-sm tracking-tighter"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-gray-500 transition-colors mb-4 text-sm tracking-tighter"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-gray-500 transition-colors mb-4 text-sm tracking-tighter"
              >
                Featurs
              </Link>
            </li>
          </ul>
        </div>
        {/* Follow us */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Support</h3>
          <div className="flex flex-col space-y-2 text-gray-500">
            <a
              href="https://wwww.facebook.com"
              target="_blank"
              rel="noopener noreferrer "
              className="hover:text-gray-500 flex items-center gap-x-3"
            >
              <FaMeta />
              <span>Facebook</span>
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer "
              className="hover:text-gray-500 flex items-center gap-x-3"
            >
              <FaXTwitter />
              <span>Twitter</span>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer "
              className="hover:text-gray-500 flex items-center gap-x-3"
            >
              <FaInstagram />
              <span>Instagram</span>
            </a>
          </div>
          <p className="text-gray-500">Call Us</p>
          <p>
            <FaPhoneAlt className="inline-block mr-2" />
            <span>(+91)-000000000</span>
          </p>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="container mx-auto mt-12 px-4 border-t border-gray-300 py-5">
        <p className=" text-gray-500 text-sm tracking-tighter text-center ">© 2025, WearSmart. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
