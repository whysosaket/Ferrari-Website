import Button from "./shared/Button";
import { CiCreditCard1 } from "react-icons/ci";
import { GoStack } from "react-icons/go";
import { MdOutlineTimer } from "react-icons/md";
import { MdOutlineSpeed } from "react-icons/md";
import {motion} from "framer-motion";

const subtext = "text-xs text-gray-500 my-1";

const Stats = () => {
  return (
    <>
     <motion.div
     initial={{x: -200, opacity: 0, scale: 0.5}}
     animate={{x: 0, opacity: 1, scale: 1}}
     transition={{duration: 0.7, delay: 0.1}}
     >
      <Button
        iconSize={24}
        className=""
        Icon={CiCreditCard1}
        text="$40,930 Vehicle Plan"
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
            <Button Icon={GoStack} iconSize={20} text="260mi" />
            <p className={subtext}>Range</p>
        </motion.div>

        <motion.div
        initial={{x: -200, opacity: 0, scale: 0.5}}
        animate={{x: 0, opacity: 1, scale: 1}}
        transition={{duration: 0.7, delay: 0.45}}
        className="">
            <Button Icon={MdOutlineSpeed} iconSize={20} text="135mph" />
            <p className={subtext}>Top Speed</p>
        </motion.div>

        <motion.div
        initial={{x: -200, opacity: 0, scale: 0.5}}
        animate={{x: 0, opacity: 1, scale: 1}}
        transition={{duration: 0, delay: 0.55}}
        className="a">
            <Button Icon={MdOutlineTimer} iconSize={20} text="6.6sec" />
            <p className={subtext}>0-60 mph</p>
        </motion.div>

      </div>
    </>
  );
};

export default Stats;
