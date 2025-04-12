import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3 } from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const drawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <nav className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* left logo */}
        <div>
          <Link to="/" className=" text-2xl  font-bold ">
            WearSmart
          </Link>
        </div>
        {/* Center-Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase "
          >
            Men
          </Link>
          <Link
            to="#"
            className="text-gray-700  hover:text-black text-sm font-medium uppercase "
          >
            Women
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase "
          >
            Top wear
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase "
          >
            Bottom wear
          </Link>
        </div>

        {/* Right-Icons */}
        <div className="flex items-center space-x-4 ">
          <Link to="/profile" className="">
            <HiOutlineUser className="h-6 w-6 text-gray-700 hover:text-black" />
          </Link>

          <button onClick={drawerToggle} className="relative ">
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700 hover:text-black " />
            <span className="absolute -top-2 left-5 bg-wear-red text-white text-xs rounded-full px-1.5 py-0.5 ">
              4
            </span>
          </button>
          {/* Search */}
          <div className="overflow-hidden">
            <SearchBar></SearchBar>
          </div>
          <button className="md:hidden">
            <HiBars3 className=" h-6 w-6 text-gray-700 hover:text-black" />
          </button>
        </div>
      </nav>
      <CartDrawer
        drawerOpen={drawerOpen}
        drawerToggle={drawerToggle}
      ></CartDrawer>
    </>
  );
};

export default Navbar;
