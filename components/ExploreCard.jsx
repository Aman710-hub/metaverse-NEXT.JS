"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles";
import { fadeIn } from "../utils/motion";
const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    onClick={() => handleClick(id)}
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative ${
      active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
    } flex items-center justify-center min-w-[170px]  h-[700px]  transition-[flex] duration-[0.7s]  ease-out-flex cursor-pointer`}
  >
    <img
      src={imgUrl}
      alt={title}
      className="absolute h-full w-full  object-cover rounded-[24px]"
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] tex-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-4 lg:p-8 justify-start w-full flex-col  rounded-b-[24px] bg-[rgba(0,0,0,0.5)]">
        <div
          className={`${styles.flexCenter}  w-[45px] h-[45px] lg:w-[60px] lg:h-[60px]  rounded-[24px] glassmorphism mb-[16px]`}
        >
          <img
            src="/headset.svg"
            alt="headset"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
        <p className="font-normal lg:text-[16px]  text-[12px] leading-[20px]  text-white uppercase">
          Enter the Metaverse
        </p>
        <h2 className="mt-[14px]  font-semibold sm:text-[32px] lg:mt-[24px] text-[18px] text-white ">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
