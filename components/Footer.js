import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="w-full p-5 sm:p-5 md:p-10 h-[50vh] md:h-[23vh] bg-[#33221a] flex justify-center items-center flex-col" id="contact">
      <div className="flex items-center justify-center gap-5 md:gap-20 md:flex-row flex-col">
        <div className="relative h-[100px] w-[100px]">
          <Image
            src="/logo-cacao.png"
            alt="/"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="text-white text-center">
          <h1 className="font-bold tracking-wider text-xl">CONTACT US</h1>
          <h1>+639296779580</h1>
        </div>
        <div className="text-white text-center">
          <h1 className="font-bold tracking-wider text-xl">OPENING HOURS</h1>
          <h1>MONDAY - SATURDAY 8 am - 10 pm</h1>
        </div>
        <div className="text-white text-center">
          <h1 className="font-bold tracking-wider text-xl">SOCIAL MEDIA</h1>
          <a
            href="https://facebook.com/cafevanilleetcacao"
            target="_blank"
            rel="noreferrer"
          >
            facebook.com/cafevanilleetcacao
          </a>
        </div>
      </div>

      <div className="mt-10 md:mt-0">
        <h1 className=" text-white text-center">
          © 2022 Cafe Vanille et Cacao All Rights Reserved
        </h1>
      </div>
    </div>
  );
};

export default Footer;
