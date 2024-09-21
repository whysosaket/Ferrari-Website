import Car from "../assets/car1.png";
import Button from "../components/shared/Button";

const Home = () => {
  return (
    <div className="bg-ternary rounded-3xl my-6 px-6 py-4">
        <h1 className="font-anton text-[21rem] leading-none text-center">EXCLUSIVE</h1>
        <div className="flex -mt-28">
            
            <div className="w-1/3 mt-28 pl-10">
                <Button text="$40,930 Vehicle Plan" />
            </div>
            <img className="w-2/3" src={Car} />
        </div>
    </div>
  )
}

export default Home