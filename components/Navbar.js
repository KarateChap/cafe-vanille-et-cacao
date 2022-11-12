import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="w-full h-[10vh] md:h-[8vh] bg-[#33221a] text-white px-12 flex justify-center items-center">
      <div className="flex w-full md:justify-between font-[Sugar] flex-col md:flex-row items-center">
        <div className="flex justify-center items-center gap-2 md:gap-5">
          <div className="relative h-[50px] w-[50px]">
            <Image
              src="/logo-cacao.png"
              alt="/"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h1 className="text-2xl">Cafe Vanille et Cacao</h1>
        </div>
        <div className="flex items-center">
          <ul className="flex gap-4 md:gap-10 tracking-wider">
            <Link
              to="about"
              className="cursor-pointer"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
            <Link
              to="featured"
              className="cursor-pointer"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Products
            </Link>
            <Link
              to="menu"
              className="cursor-pointer"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Menu
            </Link>
            <Link
              to="contact"
              className="cursor-pointer"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact Us
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
