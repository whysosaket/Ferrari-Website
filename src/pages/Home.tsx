import Car from "../assets/car1.png";
import Info from "../components/Info";
import Stats from "../components/Stats";
import Background from "../assets/background.svg";
import {motion} from "framer-motion";
import { useEffect, useState } from "react";
import BottomBar from "../components/BottomBar";

const Home = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.div
    initial={{y: 200, opacity: 0, scale: 0.5}}
    animate={{y: 0, opacity: 1, scale: 1}}
    transition={{duration: 0, delay: 0.1}}
    className="relative bg-ternary rounded-3xl my-6 px-6 py-4 overflow-hidden a">
      {/* Background image */}
      <img src={Background} className="w-full absolute -top-16 -left-8 md:-left-24 -scale-x-150 -rotate-[15deg]" />

      {/* Exclusive text */}
      <div className="flex justify-center">
        <motion.h1
        initial={{y: -200, opacity: 0, scale: 0.5}}
        animate={{y: 0, opacity: 1, scale: 1}}
        transition={{duration: 0, delay: 0.1}}
        style={{fontSize: dimensions.width>768?dimensions.width/1440*336:undefined}}
        className="font-anton flex z-10 text-[5rem] md:text-[21rem] leading-none text-center a">
    
          EXCLUSIVE
        </motion.h1>
      </div>

      {/* Stats and car image */}
      <div className="flex md:flex-row flex-col-reverse jus -mt-8 md:-mt-28 relative z-10">
        <div className="md:w-1/3 md:mt-28 md:pl-10">
          <Stats />
        </div>
        <motion.img
        style={{scale: dimensions.width>768?dimensions.width/1440:undefined}}
        initial={{y: 200, opacity: 0, scale: 0.5}}
        animate={{y: 0, opacity: 1, scale: 1}}
        transition={{duration: 0, delay: 0.1}}
        className="md:w-2/3 a transform" src={Car} alt="Car" />
      </div>

      {/* Info section */}
      <Info />
      <div className="hidden md:block">
        <BottomBar />
      </div>
    </motion.div>
  );
}

export default Home;
