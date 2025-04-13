import React from "react";
import { HiXMark } from "react-icons/hi2";
import CartContent from "../Cart/CartContent";

const CartDrawer = ({ cartDrawerOpen, toggleCartDrawer }) => {
  return (
    <div
      className={`flex flex-col fixed top-0 right-0 w-full sm:w-1/2 md:w-1/3  h-full  bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
        cartDrawerOpen ? "translate-x-0" : "translate-x-full"
      } `}
    >
      {/* close button */}
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer}>
          <HiXMark className="h-6 w-6" />
        </button>
      </div>
      {/* Cart content with scrollable area */}
      <div className="flex-grow p-4 overflow-y-auto  ">
        <h2 className="text-xl font-semibold mb-3">Cart Items</h2>
        <CartContent></CartContent>
      </div>
      {/* checkout button fixed at bottom */}
      <div className="p-4 bg-white sticky bottom-0">
        <button className="w-full text-white bg-black hover:bg-gray-800 transition font-semibold rounded-lg py-3 ">
          Checkout
        </button>
        <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center ">Shipping, Taxes and Discount codes calculated at checkout.</p>
      </div>
    </div>
  );
};

export default CartDrawer;
