import {motion} from "framer-motion";

const Info = () => {
  return (
    <div className="md:w-2/5 md:px-10 md:-mt-40 flex flex-col">
      <motion.h1
      initial={{y: 200, opacity: 0, scale: 0.5}}
      animate={{y: 0, opacity: 1, scale: 1}}
      transition={{duration: 0.7, delay: 0.55}}
      className="text-2xl md:text-start text-center md:text-4xl font-semibold z-10">
        Innovating the Future of Electric Vehicles
      </motion.h1>
      <div className="my-2 flex gap-8">
        <motion.p
        initial={{y: 200, opacity: 0, scale: 0.5}}
        animate={{y: 0, opacity: 1, scale: 1}}
        transition={{duration: 0.7, delay: 0.6}}
        className="z-10">
          Ferrari is innovating the future of electric vehicles. By harnessing
          advanced battery systems, lightweight materials, and precision
          aerodynamics.
        </motion.p>
        <motion.p
        initial={{y: 200, opacity: 0, scale: 0.5}}
        animate={{y: 0, opacity: 1, scale: 1}}
        transition={{duration: 0.7, delay: 0.65}}
        className="z-10 hidden md:block">
          {" "}
          Ferrari is shaping a new era of electrification, without compromising
          the passion and legacy of its iconic brand.
        </motion.p>
      </div>
    </div>
  );
};

export default Info;
