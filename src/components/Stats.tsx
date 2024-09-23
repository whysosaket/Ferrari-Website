import Button from "./shared/Button";
import { CiCreditCard1 } from "react-icons/ci";
import { GoStack } from "react-icons/go";
import { MdOutlineTimer } from "react-icons/md";
import { MdOutlineSpeed } from "react-icons/md";
import {motion} from "framer-motion";
import { useEffect, useState } from "react";

const subtext = "text-xs text-gray-500 my-1";

const Stats = () => {
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
    <>
     <motion.div
     initial={{x: -200, opacity: 0, scale: 0.5}}
     animate={{x: 0, opacity: 1, scale: 1}}
     transition={{duration: 0.7, delay: 0.1}}
     style={{fontSize: dimensions.width>768?dimensions.width/1440*16:undefined}}
     >
      <Button
        iconSize={24}
        className=""
        Icon={CiCreditCard1}
        text="$40,930 Vehicle Plan"
        factor={dimensions.width>768?dimensions.width/1440:1}
      />
      </motion.div>
      <motion.p
      initial={{x: -200, opacity: 0, scale: 0.5}}
      animate={{x: 0, opacity: 1, scale: 1}}
      transition={{duration: 0.7, delay: 0.2}}
      className={subtext}>
        Hey, buy from us, we are the best.
      </motion.p>
      <motion.p
      initial={{x: -200, opacity: 0, scale: 0.5}}
      animate={{x: 0, opacity: 1, scale: 1}}
      transition={{duration: 0.7, delay: 0.3}}
      className={subtext}>
        Exclusive deals just from us.
      </motion.p>
      <div className="flex justify-start align-middle my-4 gap-2">
        <motion.div
        initial={{x: -200, opacity: 0, scale: 0.5}}
        animate={{x: 0, opacity: 1, scale: 1}}
        transition={{duration: 0.7, delay: 0.35}}
        className="">
            <Button Icon={GoStack} iconSize={20} text="260mi" factor={dimensions.width>768?dimensions.width/1440:1} />
            <p className={subtext}>Range</p>
        </motion.div>

        <motion.div
        initial={{x: -200, opacity: 0, scale: 0.5}}
        animate={{x: 0, opacity: 1, scale: 1}}
        transition={{duration: 0.7, delay: 0.45}}
        className="">
            <Button Icon={MdOutlineSpeed} iconSize={20} text="135mph" factor={dimensions.width>768?dimensions.width/1440:1} />
            <p className={subtext}>Top Speed</p>
        </motion.div>

        <motion.div
        initial={{x: -200, opacity: 0, scale: 0.5}}
        animate={{x: 0, opacity: 1, scale: 1}}
        transition={{duration: 0, delay: 0.55}}
        className="a">
            <Button Icon={MdOutlineTimer} iconSize={20} text="6.6sec" factor={dimensions.width>768?dimensions.width/1440:1} />
            <p className={subtext}>0-60 mph</p>
        </motion.div>

      </div>
    </>
  );
};

export default Stats;
