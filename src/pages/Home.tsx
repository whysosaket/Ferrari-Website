import Car from "../assets/car1.png";
import Info from "../components/Info";
import Stats from "../components/Stats";
import Background from "../assets/background.svg";

const Home = () => {
  return (
    <div className="bg-ternary rounded-3xl my-6 px-6 py-4 overflow-hidden">
        <img src={Background} className="w-full absolute top-0 -left-24 -scale-x-150 -rotate-[30deg]" />
        <div className="flex justify-center">
          <h1 className="font-anton flex z-10 text-[21rem] leading-none text-center">EXCLUSIVE</h1>
        </div>
        
        <div className="flex -mt-28">
            <div className="w-1/3 mt-28 pl-10 flex flex-col z-10">
                <Stats />
            </div> 
            <img className="w-2/3 z-10" src={Car} />
        </div>
        <Info />
    </div>
  )
}

export default Home