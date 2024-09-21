import Car from "../assets/car1.png";
import Info from "../components/Info";
import Stats from "../components/Stats";
import Background from "../assets/background.svg";
import {motion} from "framer-motion";

const Home = () => {
  return (
    <motion.div
    initial={{y: 200, opacity: 0, scale: 0.5}}
    animate={{y: 0, opacity: 1, scale: 1}}
    transition={{duration: 0.7, delay: 0.1}}
    className="relative bg-ternary rounded-3xl my-6 px-6 py-4 overflow-hidden">
      {/* Background image */}
      <img src={Background} className="w-full absolute -top-16 -left-8 md:-left-24 -scale-x-150 -rotate-[15deg]" />

      {/* Exclusive text */}
      <div className="flex justify-center">
        <motion.h1
        initial={{y: -200, opacity: 0, scale: 0.5}}
        animate={{y: 0, opacity: 1, scale: 1}}
        transition={{duration: 0.7, delay: 0.1}}
        className="font-anton flex z-10 text-[5rem] md:text-[21rem] leading-none text-center">
          EXCLUSIVE
        </motion.h1>
      </div>

      {/* Stats and car image */}
      <div className="flex md:flex-row flex-col-reverse jus -mt-8 md:-mt-28 relative z-10">
        <div className="md:w-1/3 md:mt-28 md:pl-10">
          <Stats />
        </div>
        <motion.img
        initial={{y: 200, opacity: 0, scale: 0.5}}
        animate={{y: 0, opacity: 1, scale: 1}}
        transition={{duration: 0.7, delay: 0.1}}
        className="md:w-2/3" src={Car} alt="Car" />
      </div>

      {/* Info section */}
      <Info />
    </motion.div>
  );
}

export default Home;
