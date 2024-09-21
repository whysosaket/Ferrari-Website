import BottomBar from "./components/BottomBar"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"

function App() {

  return (
    <div className="px-6 py-4 font-inter">
      <Navbar />
      <Home />
      <BottomBar />
    </div>
  )
}

export default App
