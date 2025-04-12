import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

const CartContent = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 150,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Jeans",
      size: "M",
      color: "Black",
      quantity: 1,
      price: 300,
      image: "https://picsum.photos/200?random=2",
    },
    {
      productId: 3,
      name: "T-shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 150,
      image: "https://picsum.photos/200?random=3",
    },
    {
      productId: 4,
      name: "Skirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 100,
      image: "https://picsum.photos/200?random=4",
    },
    {
      productId: 5,
      name: "Shirt",
      size: "L",
      color: "Red",
      quantity: 1,
      price: 250,
      image: "https://picsum.photos/200?random=5",
    },
  ];

  return (
    <div>
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b "
        >
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-20 object-cover rounded mr-1"
            />

            <div>
              <h3>{product.name}</h3>
              <p className="text-sm text-gray-500">
                Size:{product.size} | Color: {product.color}
              </p>
              <div className="flex items-center  mt-2">
                <button className=" border rounded px-2  text-sm sm:text-xl font-medium ">
                  -
                </button>
                <span className=" mx-4 ">{product.quantity}</span>
                <button className=" border rounded px-2  text-sm sm:text-xl font-medium ">
                  +
                </button>
              </div>
            </div>
          </div>
        <div>
            <p>${product.price.toLocaleString()}</p>
            <button>
                <RiDeleteBin5Line className="h-6 w-6 mt-2 text-red-600"/>
            </button>
        </div>

        </div>
      ))}
    </div>
  );
};

export default CartContent;
