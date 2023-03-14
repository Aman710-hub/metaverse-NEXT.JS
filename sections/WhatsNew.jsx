"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { TypingText, TitleText, StartSteps } from "../components";
import {
  staggerContainer,
  FeatureDefinition,
  planetVariants,
  fadeIn,
} from "../utils/motion";
const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| What's New" />
        <TitleText title={<>What's new about metaverses?</>} />
        {/* <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
        {startingFeatures.map((feature, index) => {
          return (
            <StartSteps key={feature} number={index + 1} text={feature} />
          );
        })}
      </div> */}
      </motion.div>
      <motion.div
        variants={planetVariants("right")}
        className={`flex-1 ${styles.flexCenter}`}
        initial="hidden"
        whileInView="show"
      >
        <img
          src="/whats-new.png"
          alt="whats new"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
