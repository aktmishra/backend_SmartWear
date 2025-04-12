import React from "react";
import { FaMeta } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="bg-wear-red text-white ">
      <div className="container mx-auto flex justify-between items-center px-4 py-2 ">
        <div className="hidden  md:flex items-center space-x-4">
          <a href="" className="hover:text-gray-400">
            <FaMeta className="h-5 w-5" />{" "}
          </a>
          <a href="" className="hover:text-gray-400">
            <FaXTwitter className="h-4 w-4" />{" "}
          </a>
          <a href="" className="hover:text-gray-400">
            <FaInstagram className="h-5 w-5" />{" "}
          </a>
        </div>

        <div className="text-sm text-center flex-grow">
          <span>We ship pan India - Fast and Reliable shipping!</span>
        </div>
        <div className="text-sm hidden md:block ">
          <span>(+91)-0000000000</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
