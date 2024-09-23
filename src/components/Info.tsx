import {motion} from "framer-motion";
import { useEffect, useState } from "react";

const Info = () => {
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
    <div style={{marginTop: dimensions.width>768?-dimensions.height/812*160:undefined}} className="md:w-2/5 md:px-10 md:-mt-40 flex flex-col">
      <motion.h1
      initial={{y: 200, opacity: 0, scale: 0.5}}
      animate={{y: 0, opacity: 1, scale: 1}}
      transition={{duration: 0, delay: 0.55}}
      style={{fontSize: dimensions.width>768?dimensions.width/1440*36:24}}
      className="md:text-start text-center md:text-4xl font-semibold z-10 a">
        Innovating the Future of Electric Vehicles
      </motion.h1>
      <div className="my-2 flex gap-8">
        <motion.p
        initial={{y: 200, opacity: 0, scale: 0.5}}
        animate={{y: 0, opacity: 1, scale: 1}}
        transition={{duration: 0, delay: 0.6}}
        style={{fontSize: dimensions.width>768?dimensions.width/1440*16:undefined}}
        className="z-10 a">
          Ferrari is innovating the future of electric vehicles. By harnessing
          advanced battery systems, lightweight materials, and precision
          aerodynamics.
        </motion.p>
        <motion.p
        initial={{y: 200, opacity: 0, scale: 0.5}}
        animate={{y: 0, opacity: 1, scale: 1}}
        transition={{duration: 0, delay: 0.65}}
        style={{fontSize: dimensions.width>768?dimensions.width/1440*16:undefined}}
        className="z-10 hidden md:block a">
          {" "}
          Ferrari is shaping a new era of electrification, without compromising
          the passion and legacy of its iconic brand.
        </motion.p>
      </div>
    </div>
  );
};

export default Info;
