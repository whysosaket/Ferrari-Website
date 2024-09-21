import { useEffect, useState } from "react"
import BottomBar from "./components/BottomBar"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Loading from "./components/Loading"

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },1500)
  }, [])
  return (
      loading?<Loading />:<div className="px-6 py-4 font-inter">
      <Navbar />
      <Home />
      <BottomBar />
    </div>
  )
}

export default App
