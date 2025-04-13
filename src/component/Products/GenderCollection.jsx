import React from "react";
import womenCollectionImage from "../../assets/womens-collection.webp";
import menCollectionImage from "../../assets/mens-collection.webp";
import { Link } from "react-router-dom";

const GenderCollection = () => {
  return (
    <section className=" pt-16 px-4  ">
      <div className="container mx-auto flex flex-col md:flex-row gap-8 ">
        {/* Women Collection */}

        <div className="relative flex-1">
          <img
            src={womenCollectionImage}
            alt="Women Collection"
            className=" w-full h-[500px] object-cover "
          />
          <div className="absolute bottom-8 left-8 max-sm:left-0 bg-white bg-opacity-90 p-4 ">
            <h2 className=" text-2xl font-bold text-gray-900 mb-3 whitespace-nowrap ">
              Women's Collection
            </h2>
            <Link
              to="/collections/all?gender=women"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
        {/* Men Collection */}

        <div className="relative flex-1">
          <img
            src={menCollectionImage}
            alt="Men Collection"
            width={400}
            className=" w-full h-[500px] object-cover "
          />
          <div className="absolute bottom-8 left-8 max-sm:left-0 bg-white bg-opacity-90 p-4 ">
            <h2 className=" text-2xl font-bold text-gray-900 mb-3 whitespace-nowrap ">
              Men's Collection
            </h2>
            <Link
              to="/collections/all?gender=men"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollection;
