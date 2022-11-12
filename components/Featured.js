import React from "react";
import Image from "next/image";

const Featured = () => {
  const products = [
    {
      url: "/prod-1.png",
      name: "Sandwich",
    },
    {
      url: "/prod-2.png",
      name: "Burger and Nachos",
    },
    {
      url: "/prod-3.png",
      name: "Frappe",
    },
    {
      url: "/prod-4.png",
      name: "Coffee",
    },
  ];

  return (
    <div className="w-full h-[auto] flex flex-col items-center justify-center py-20 px-10 gap-10 bg-white" id="featured">
      <h1 className="font-[Sugar] text-3xl tracking-wider">
        Featured Products
      </h1>
      <div className="w-full h-[auto] max-w-[1440px] flex justify-start overflow-scroll scrollbar-hide">
        <div className="flex justify-center  space-x-4 ">
          {products.map((prod) => {
            return (
              <div
                key={prod.url}
                className="cursor-pointer hover:scale-90 transform transition duration-300 ease-out"
              >
                <div className="relative h-80 w-80">
                  <Image
                    src={prod.url}
                    alt="/"
                    layout="fill"
                    className="rounded-xl "
                  />
                </div>
                <h3 className="text-2xl mt-3">{prod.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Featured;
