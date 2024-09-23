import Ferarri from "../assets/ferrari.svg";
import Button from "./shared/Button";

import { IoIosHelpCircleOutline } from "react-icons/io";
import { BsGlobe2 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

import {motion} from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
    initial={{y: -200, opacity: 0, scale: 0.5}}
    animate={{y: 0, opacity: 1, scale: 1}}
    transition={{duration: 0, delay: 0.1}}
    className="bg-ternary rounded-3xl px-6 a flex justify-between align-middle">
        <img src={Ferarri} className="h-14 my-auto"></img>
        <div className="my-auto hidden md:flex justify-center align-middle gap-2">
            <Button factor={1} text="Vehicles" />
            <Button factor={1} text="Energy" />
            <Button factor={1} text="Changing" />
            <Button factor={1} text="Discover" />
        </div>

        <div className="flex my-auto justify-center align-middle gap-2">
            <button className="px-6 hidden md:block rounded-3xl bg-primary hover:bg-yellow-500 select-none cursor-pointer">send an application</button>
            <IoIosHelpCircleOutline size={24} className="my-auto select-none cursor-pointer" />
            <BsGlobe2 size={19} className="my-auto select-none cursor-pointer" />
            <CgProfile size={20} className="my-auto select-none cursor-pointer" />
        </div>
    </motion.div>
  )
}

export default Navbar