import React  from "react";
import { HiXMark } from "react-icons/hi2";

const CartDrawer = ({drawerOpen, drawerToggle}) => {
  

  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-2/4  h-full  bg-white shadow-2xl transform transition-transform duration-300 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      } `}
    >
      {/* close button */}
      <div className="flex justify-end p-4">
      <button onClick={drawerToggle} >
        <HiXMark className="h-6 w-6"/>
      </button>
      </div>
    </div>
  );
};

export default CartDrawer;
