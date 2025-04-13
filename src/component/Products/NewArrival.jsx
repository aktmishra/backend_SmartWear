import React, { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewArrival = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const newArrivals = [
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

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };
  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behaviour: "smooth" });
  };
  //Update Scroll Button
  const updateScrollButtons = () => {
    const container = scrollRef.current;

    if (container) {
      const scrollLeft = container.scrollLeft;

      const clientWidth = container.clientWidth;
      const containerScrollWidth = container.scrollWidth;
      const rightScrollable = containerScrollWidth > scrollLeft + clientWidth;
      console.log(rightScrollable);
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(rightScrollable);
    }

    console.log({
      scrollLeft: container.scrollLeft,

      clientWidth: container.clientWidth,
      containerScrollWidth: container.scrollWidth,
      offsetleft: scrollRef.current.offsetLeft,
    });
    console.log({ container });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
      return () => container.removeEventListener("scroll", updateScrollButtons);
    }
  }, []);
  return (
    <section className="pt-16 px-4">
      <div className="container mx-auto text-center mb-6">
        <h2 className="text-3xl font-bold mb-4 ">Explore New Arrivals</h2>
        <p className=" text-gray-600 text-sm sm:text-lg ">
          Discover the latest styles straight off the runway, freshly added to
          keep your wordrobe on the cutting edge of fashion.
        </p>
      </div>

      {/* Scrollable Content */}

      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className={`container mx-auto overflow-x-scroll relative flex space-x-6 ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        } `}
      >
        {newArrivals.map((product) => (
          <div
            key={product._id}
            className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative  "
          >
            <img
              src={product.images[0]?.url}
              alt={product.images[0].altText || product.name}
              className="w-full h-[480px] object-cover rounded-lg "
              draggable={false}
            />
            <div className=" absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg ">
              <Link to={`/product/${product._id}`} className="block ">
                <h4 className="text-lg font-medium">{product.name}</h4>
                <p className=" mt-1 ">${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* Scroll Button */}
      <div className="  w-full flex mt-2  justify-between">
        <button
          onClick={() => {
            scroll("left");
          }}
          disabled={!canScrollLeft}
          className={`p-2 rounded border ${
            canScrollLeft
              ? "bg-white text-black"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          <FaAngleLeft />
        </button>
        <button
          onClick={() => {
            scroll("right");
          }}
          disabled={!canScrollRight}
          className={`p-2 rounded border ${
            canScrollRight
              ? "bg-white text-black"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          <FaAngleRight />
        </button>
      </div>
    </section>
  );
};

export default NewArrival;
