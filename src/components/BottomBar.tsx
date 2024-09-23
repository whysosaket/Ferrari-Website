import { IoChevronDown } from "react-icons/io5";
import {motion} from "framer-motion";
import { useEffect, useState } from "react";

const BottomBar = () => {
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
    initial={{x: -200, y: 200, opacity: 0, scale: 1}}
    animate={{x: 0, y: 0, opacity: 1, scale: 1}}
    transition={{duration: 0, delay: 0.5}}
    style={{bottom: dimensions.width > 768 ? (dimensions.width / 1440) * 24 : undefined}}
    className="a md:absolute bottom-6 right-10 bg-secondary text-white rounded-[3rem] px-3 py-3 flex justify-center align-middle gap-2 md:gap-4">
        <button className="flex text-xs md:text-base align-middle ml-2"><span className="my-auto mx-1">Model</span> <IoChevronDown className="my-auto" /></button>
        <button className="flex text-xs md:text-base align-middle"><span className="my-auto mx-1">Trim</span> <IoChevronDown className="my-auto" /></button>
        <button className="flex text-xs md:text-base align-middle"><span className="my-auto mx-1">Exterior Paint</span> <IoChevronDown className="my-auto" /></button>
        <button className="flex text-xs md:text-base align-middle"><span className="my-auto mx-1">Wheels</span> <IoChevronDown className="my-auto" /></button>
        <button className="flex text-xs md:text-base align-middle bg-[#FDFDFD] text-secondary rounded-[3rem] px-6 py-3">Find</button>
    </motion.div>
  )
}

export default BottomBar