import React from "react"
import Navbar from "./components/Navbar/Navbar.jsx"
import Hero from "./components/Hero/Hero.jsx"
import Equipment from "./components/Equipment/Equipment.jsx"
import BgImage from "./assets/bg.png"

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",

}

function App() {
  return <div className="overflow-x-hidden">
        <div style={bgStyle}>
          <Navbar />
          <Hero />
        </div>
        <Equipment />
    </div>
}

export default App
