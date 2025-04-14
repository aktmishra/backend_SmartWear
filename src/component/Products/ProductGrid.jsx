import React from "react";
import { Link } from "react-router-dom";

const ProductGrid = ({ products }) => {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
      {products.map((product, index) => (
        <div key={product._id} className=" block p-4 ">
          <div className="w-full h-96  relative border rounded-lg border-gray-300">
            <img
              src={product.images[0]?.url}
              alt={product.images[0].altText || product.name}
              className="w-full h-full object-cover rounded-lg "
              draggable={false}
            />
            <div className="  absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg ">
              <Link to={`/product/${product._id}`} className="block ">
                <h4 className="text-lg font-medium">{product.name}</h4>
                <p className=" mt-1 ">${product.price}</p>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
