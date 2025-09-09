import React from "react";
import { motion } from "framer-motion";
import leo from "../../assets/Leo.mp4";

const HeroLeft = () => {
  return (
    <div className="w-full md:w-1/2  flex flex-col justify-center items-center p-8">
      <motion.video
        playsInline
        autoPlay
        muted
        loop
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-92 h-92 object-contain rounded-lg"
        src={leo}
        alt="Design illustration"
      />
    </div>
  );
};

export default HeroLeft;
