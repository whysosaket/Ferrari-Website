import Car from "../assets/car1.png";
import Info from "../components/Info";
import Stats from "../components/Stats";
import Background from "../assets/background.svg";

const Home = () => {
  return (
    <div className="relative bg-ternary rounded-3xl my-6 px-6 py-4 overflow-hidden">
      {/* Background image */}
      <img src={Background} className="w-full absolute -top-16 -left-24 -scale-x-150 -rotate-[15deg]" />

      {/* Exclusive text */}
      <div className="flex justify-center">
        <h1 className="font-anton flex z-10 text-[5rem] md:text-[21rem] leading-none text-center">
          EXCLUSIVE
        </h1>
      </div>

      {/* Stats and car image */}
      <div className="flex md:flex-row flex-col-reverse jus -mt-8 md:-mt-28 relative z-10">
        <div className="md:w-1/3 md:mt-28 md:pl-10">
          <Stats />
        </div>
        <img className="md:w-2/3" src={Car} alt="Car" />
      </div>

      {/* Info section */}
      <Info />
    </div>
  );
}

export default Home;
