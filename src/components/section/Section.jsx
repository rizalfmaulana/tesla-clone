import { KeyboardArrowDown } from "@mui/icons-material";
import React from "react";
import Footer from "../footer/Footer";
import Header from "../Header/Header";
import { motion } from "framer-motion";
import { useScroll } from "../../utils/useScroll";
import { fadeAnim } from "../../utils/Animation";

const Section = ({
  title,
  desc,
  id,
  descrip,
  image,
  left,
  right,
  isMenuOpen,
}) => {
  const [element, controls] = useScroll();
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`w-screen h-screen flex flex-col justify-between items-center overflow-hidden snap-always snap-center`}
    >
      <div className="pt-[15vh] text-center text-[#393C41]">
        <motion.h1
          variants={fadeAnim}
          animate={controls}
          initial="hidden"
          ref={element}
          className="text-[40px] font-medium"
        >
          {title}
        </motion.h1>
        <motion.p
          variants={fadeAnim}
          animate={controls}
          initial="hidden"
          ref={element}
          className="text-base font-[400]"
        >
          {desc} {""}
          <a className="underline" href="#">
            {descrip}
          </a>
        </motion.p>
      </div>
      <div className="items-center flex flex-col gap-[50px]">
        <motion.div
          variants={fadeAnim}
          animate={controls}
          initial="hidden"
          ref={element}
          className="flex gap-5 flex-col lg:flex-row"
        >
          <button
            className={`bg-[#171a20cc] ${
              id === 7 ? "mt-[47vh]" : id !== 1 ? "mb-[16vh]" : ""
            } rounded-[32px] text-white uppercase font-medium text-xs w-[256px] h-[40px]`}
          >
            {left}
          </button>
          {right && (
            <button className="bg-[#EBEBEB] rounded-[32px] text-[#393C41] uppercase font-medium text-xs w-[256px] h-[40px]">
              {right}
            </button>
          )}
        </motion.div>
        {id === 1 && (
          <KeyboardArrowDown
            className="mb-6 animate-bounce"
            style={{ width: "1.3em", height: "1.3em", color: "#433c41" }}
          />
        )}
      </div>
      {id === 7 && <Footer />}
    </div>
  );
};

export default Section;
