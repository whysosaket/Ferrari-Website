import Button from "./shared/Button";
import { CiCreditCard1 } from "react-icons/ci";
import { GoStack } from "react-icons/go";
import { MdOutlineTimer } from "react-icons/md";
import { MdOutlineSpeed } from "react-icons/md";

const subtext = "text-xs text-gray-500 my-1";

const Stats = () => {
  return (
    <>
      <Button
        iconSize={24}
        className=""
        Icon={CiCreditCard1}
        text="$40,930 Vehicle Plan"
      />
      <p className={subtext}>
        Hey, buy from us, we are the best.
      </p>
      <p className={subtext}>
        Exclusive deals just from us.
      </p>
      <div className="flex justify-start align-middle my-4 gap-2">
        <div className="">
            <Button Icon={GoStack} iconSize={20} text="260mi" />
            <p className={subtext}>Range</p>
        </div>

        <div className="">
            <Button Icon={MdOutlineSpeed} iconSize={20} text="135mph" />
            <p className={subtext}>Top Speed</p>
        </div>

        <div className="">
            <Button Icon={MdOutlineTimer} iconSize={20} text="6.6sec" />
            <p className={subtext}>0-60 mph</p>
        </div>

      </div>
    </>
  );
};

export default Stats;
