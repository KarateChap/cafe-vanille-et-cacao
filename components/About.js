import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div
      className="relative w-full h-[65vh]  flex flex-col items-center justify-center gap-12 p-5 md:p-20 bg-white"
      id="about"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="flex flex-col justify-center items-center"
      >
        <h1 className="font-[Sugar] text-5xl md:text-6xl">Cafe Vanille</h1>
        <h1 className="font-[Sugar] text-5xl md:text-6xl">et Cacao</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="flex max-w-[80%] md:max-w-[520px] text-center text-xl"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tempor nulla eget ex interdum rutrum. Cras id nisi sem. Praesent
          eleifend.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 1.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="bg-[#33221a] text-white font-[Sugar] text-xl px-10 py-3 rounded-xl cursor-pointer hover:scale-105 duration-75 active:scale-95"
      >
        <Link to="featured" spy={true} smooth={true} offset={50} duration={500}>
          See More
        </Link>
      </motion.div>

      <motion.div
        initial={{ x: -200, }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[url('/flag.png')] w-[400px] h-[400px] bg-contain bg-no-repeat absolute -left-[250px] md:left-0 top-10 md:top-[140px]"
      />
    </div>
  );
};

export default About;
