import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisable, setIsButtonDisable] = useState(false);

  const selectedProduct = {
    _id: "1",
    name: "Shirt",
    price: 120,
    originalPrice: 150,
    description: "This is a stylish Jeans perfect for any occation",
    brand: "FashionBrand",
    material: "Denim",
    sizes: ["S", "M", "L", "Xl", "XXL"],
    colors: ["Red", "Black", "White", "Blue"],
    images: [
      {
        url: "https://picsum.photos/500/500?random=1",
        altText: "Stylish Jacket",
      },
      {
        url: "https://picsum.photos/500/500?random=2",
        altText: "Stylish Jacket",
      },
    ],
  };
  const similarProducts = [
    {
      _id: "1",
      name: "Shirt",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "2",
      name: "Jeans",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=2",
          altText: "Jeans",
        },
      ],
    },
    {
      _id: "3",
      name: "T-shirt",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
          altText: "T-shirt",
        },
      ],
    },
    {
      _id: "4",
      name: "Stylis Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=4",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "5",
      name: "Stylis Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=5",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "6",
      name: "Stylis Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=6",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "7",
      name: "Stylis Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=7",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "8",
      name: "Stylis Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=8",
          altText: "Stylish Jacket",
        },
      ],
    },
  ];

  const handleQuantityChange = (action) => {
    if (action === "plus") setQuantity((prev) => prev + 1);
    if (action === "minus" && quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      toast.error("Please select a Size and Color before adding to cart.", {
        duration: 1000,
      });
      return;
    }
    setIsButtonDisable(true);

    setTimeout(() => {
      toast.success("Product added to cart!", {
        duration: 1000,
      });
      setIsButtonDisable(false);
    }, 500);
  };

  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, []);

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-2 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Left Thumbnails */}
          <div className="hidden md:flex flex-col space-y-4 mr-6 ">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer p-0.5  border ${
                  mainImage === image.url
                    ? "border-blue-600"
                    : "border-gray-300"
                } `}
                onClick={() => {
                  setMainImage(image.url);
                }}
              />
            ))}
          </div>
          {/* Main Image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={mainImage}
                alt="Main Product"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          {/* Mobile Thumbnail */}
          <div className="md:hidden flex overscroll-x-auto space-x-4 mb-4">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`w-14 h-14 object-cover rounded-lg cursor-pointer p-0.5 border ${
                  mainImage === image.url
                    ? "border-blue-600 border-2"
                    : "border-gray-300"
                } `}
                onClick={() => {
                  setMainImage(image.url);
                }}
              />
            ))}
          </div>
          {/* Right Side */}

          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>
            <div className="flex gap-x-2 items-center">
              <p className=" text-gray-600 mb-1 line-through">
                {selectedProduct.originalPrice &&
                  `$${selectedProduct.originalPrice}`}
              </p>
              <p className="text-xl text-gray-500 mb-2">
                ${selectedProduct.price}
              </p>
            </div>
            <p className=" text-gray-600 mb-4 tracking-tighter">
              {selectedProduct.description}
            </p>

            <div className="mb-4">
              <p className="text-gray-700 font-extrabold">Color:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border ${
                      selectedColor === color
                        ? "border-blue-600 border-4 "
                        : "border-black"
                    }`}
                    style={{
                      backgroundColor: color.toLowerCase(),
                    }}
                  ></button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-700 font-extrabold">Size:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`  rounded-sm border py-1 px-2 flex justify-center items-center text-sm ${
                      selectedSize === size
                        ? "border-blue-600 border-2"
                        : "border-black"
                    }`}
                    style={{}}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-700 font-extrabold">Quantity:</p>

              <div className="flex items-center  mt-2">
                <button
                  onClick={() => handleQuantityChange("minus")}
                  className=" border rounded px-2  text-sm sm:text-xl font-medium "
                >
                  -
                </button>
                <span className=" mx-4 ">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("plus")}
                  className=" border rounded px-2  text-sm sm:text-xl font-medium "
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-gray-700 font-extrabold">Characteristics:</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr className="py-1">
                    <td>Brand</td>
                    <td className="text-xs">{selectedProduct.brand}</td>
                  </tr>
                  <tr className="py-1">
                    <td>Material</td>
                    <td className="text-xs">{selectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button
              disabled={isButtonDisable}
              onClick={handleAddToCart}
              className={`w-full text-white bg-black hover:bg-gray-800 transition font-semibold rounded-lg py-3 px-6 mt-4 ${
                isButtonDisable
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-gray-800"
              } `}
            >
              {isButtonDisable ? "Adding..." : "ADD TO CART"}
            </button>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mt-8 mb-4">
            You May Also Like
          </h2>
          {/* Product Grid */}
          <ProductGrid products={similarProducts}></ProductGrid>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
