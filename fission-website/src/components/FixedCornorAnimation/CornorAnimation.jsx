import { motion } from "framer-motion";
import animation from "../../assets/animation.mp4";

const CornorAnimation = () => {
  return (
    <div className="fixed top-10/12 md:top-8/10 left-4/6 md:left-6/7 w-26 h-26  z-50">
      <div className="w-full h-full flex flex-col justify-center items-center rounded-lg border-2 border-black  shadow-lg bg-slate-400 dark:bg-gray-400 hover:scale-105 transition-transform duration-300 cursor-pointer">
        <motion.video
          playsInline
          autoPlay
          muted
          loop
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-20 h-18 object-contain border-2 border-black rounded-lg  shadow-lg"
          src={animation}
          alt="Design illustration"
        />
        <p className="text-black dark:text-white font-bold">Contact</p>
      </div>
    </div>
  );
};

export default CornorAnimation;
