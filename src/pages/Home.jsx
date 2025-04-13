import React from "react";
import Hero from "../component/Layout/Hero";
import GenderCollection from "../component/Products/GenderCollection";
import NewArrival from "../component/Products/NewArrival";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <GenderCollection></GenderCollection>
      <NewArrival></NewArrival>
    </div>
  );
};

export default Home;
