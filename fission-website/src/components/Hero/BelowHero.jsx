import { motion } from "framer-motion";

const tagline =
  "We are a global creative agency that combines design expertise with technology and intelligence.";

export default function BelowHero({ animation }) {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row justify-center items-center bg-white dark:bg-gray-900 transition-colors duration-700 relative overflow-hidden">
      <div className="w-full md:w-1/2 flex justify-center items-center p-6 relative">
        <motion.video
          playsInline
          autoPlay
          muted
          loop
          initial={{ opacity: 0, scale: 0.8, rotate: -10, x: -50 }}
          animate={{ opacity: 1, scale: 1, rotate: 0, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-64 h-64 object-cover border-4 border-indigo-500 rounded-full shadow-lg"
          src={animation}
        />

        {/* Animated glowing background blob */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-30 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start p-6 z-10">
        {/* Staggered Tagline */}
        <motion.div
          className="mt-6 flex flex-wrap justify-center md:justify-start text-lg md:text-2xl font-medium text-gray-700 dark:text-gray-300 max-w-xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {tagline.split(" ").map((word, i) => (
            <motion.span
              key={i}
              className="mr-2"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
