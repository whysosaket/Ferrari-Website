import Ferarri from "../assets/ferrari.svg";
import Button from "./shared/Button";

import { IoIosHelpCircleOutline } from "react-icons/io";
import { BsGlobe2 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="bg-ternary rounded-3xl px-6 flex justify-between align-middle">
        <img src={Ferarri} className="h-14 my-auto"></img>
        <div className="my-auto flex justify-center align-middle gap-2">
            <Button text="Vehicles" />
            <Button text="Energy" />
            <Button text="Changing" />
            <Button text="Discover" />
        </div>

        <div className="flex my-auto justify-center align-middle gap-2">
            <button className="px-6 rounded-3xl bg-primary hover:bg-yellow-500 select-none cursor-pointer">send an application</button>
            <IoIosHelpCircleOutline size={24} className="my-auto select-none cursor-pointer" />
            <BsGlobe2 size={19} className="my-auto select-none cursor-pointer" />
            <CgProfile size={20} className="my-auto select-none cursor-pointer" />
        </div>
    </div>
  )
}

export default Navbar