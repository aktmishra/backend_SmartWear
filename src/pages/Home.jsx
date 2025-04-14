import React from "react";
import Hero from "../component/Layout/Hero";
import GenderCollection from "../component/Products/GenderCollection";
import NewArrival from "../component/Products/NewArrival";
import ProductDetails from "../component/Products/ProductDetails";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <GenderCollection></GenderCollection>
      <NewArrival></NewArrival>
      {/* Best Seller */}
      <h2 className="text-3xl font-bold text-center mt-8 mb-4">
        Best Seller
      </h2>
      <ProductDetails></ProductDetails>
    </div>
  );
};

export default Home;
