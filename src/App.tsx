import { useEffect, useState } from "react"
import BottomBar from "./components/BottomBar"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Loading from "./components/Loading"
import Hireme from "./components/Hireme"

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      window.scroll(0,0);
      setLoading(false);
    },2500)
  }, [])
  return (
      loading?
      <>
      <Loading />
      <div className="absolute opacity-0">
        <Home />
      </div>
      </>
      :<div className="px-6 py-4 font-inter">
      <Hireme />
      <Navbar />
      <Home />
      <div className="md:hidden">
        <BottomBar />
      </div>
    </div>
  )
}

export default App
