import React from "react";
import Hero from "../component/Layout/Hero";
import GenderCollection from "../component/Products/GenderCollection";
import NewArrival from "../component/Products/NewArrival";
import ProductDetails from "../component/Products/ProductDetails";
import ProductGrid from "../component/Products/ProductGrid";

const Home = () => {
const placeholderProducts =[
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

  return (
    <div>
      <Hero></Hero>
      <GenderCollection></GenderCollection>
      <NewArrival></NewArrival>
      {/* Best Seller */}
      <h2 className="text-3xl font-bold text-center mt-8 mb-4">Best Seller</h2>
      <ProductDetails></ProductDetails>

      <h2 className="text-3xl font-bold text-center mt-8 mb-4">
        Top Wear For Women
      </h2>
      <ProductGrid products={placeholderProducts} ></ProductGrid>
    </div>
  );
};

export default Home;
