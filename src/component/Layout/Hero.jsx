import React from "react";
import heroImg from "../../assets/hero.webp";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative">
      <img
        src={heroImg}
        alt="SmartWear"
        className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover "
      />
      <div className="absolute inset-0 bg-opacity-35 bg-black flex justify-center items-center ">
        <div className="text-center text-white p-6 ">
          <h1 className=" text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4 ">
            Vacation <br /> Ready
          </h1>
          <p className=" text-sm tracking-tighter md:text-lg mb-6 ">Explore our vacation-ready outfits with fast pan India delivery  </p>
          <Link to="#" className="font-semibold bg-white text-gray-900 px-6 py-2 rounded-md hover:text-white hover:bg-gray-900 transition duration-300 ">
          Shop
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
