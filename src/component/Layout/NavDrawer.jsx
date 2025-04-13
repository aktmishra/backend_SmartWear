import React from "react";
import { HiXMark } from "react-icons/hi2";
 
import { Link } from "react-router-dom";
import { navLinks } from "../../Utils/commonConst";

const NavDrawer = ({ navDrawerOpen, toggleNavtDrawer }) => {
  return (
    <div
      className={`flex flex-col fixed top-0 left-0 w-full sm:w-1/2 md:w-2/4  h-full  bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
        navDrawerOpen ? "translate-x-0" : "-translate-x-full"
      } `}
    >
      {/* close button */}
      <div className="flex justify-end p-4">
        <button onClick={toggleNavtDrawer}>
          <HiXMark className="h-6 w-6" />
        </button>
      </div>
      {/* Cart content with scrollable area */}
      <div className="flex-grow flex flex-col ml-24 mt-14 p-4 overflow-y-auto  ">
        <h2 className="text-xl font-extrabold mb-3">Menu</h2>
         <nav className="flex flex-col space-y-2  ">
            {navLinks.map((navlink) => (
                       <Link
                       onClick={toggleNavtDrawer}
                         key={navlink.label}
                         to={navlink.to}
                         className="text-gray-700 hover:text-black text-sm font-medium uppercase "
                       >
                         {navlink.name}
                       </Link>
                     ))}
         </nav>
      </div>
    </div>
  );
};

export default NavDrawer;
