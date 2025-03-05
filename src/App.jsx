import React from "react"
import Navbar from "./components/Navbar/Navbar.jsx"
import Hero from "./components/Hero/Hero.jsx"
import Equipment from "./components/Equipment/Equipment.jsx"
import Banner from "./components/Banner/Banner.jsx"
import TabComp from "./components/Tab/TabComp.jsx"
import Testimonial from "./components/Testimonial/Testimonial.jsx"
import Banner2 from "./components/Banner/Banner2.jsx"
import Footer from "./components/Footer/Footer.jsx"
import BgImage from "./assets/bg.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Img1 from "./assets/2.png"
import Img2 from "./assets/3.png"

const BannerData = {
    image: Img1,
    title: "Train Hard. Stay Motivated. Be Part of Our Fitness Family!",
    subtitle: "We believe that fitness is more than just a workout—it’s a community. Our gym is a place where you can push your limits, stay motivated, and meet like-minded people who share your passion for fitness. Together, we’ll help you achieve your goals and celebrate every success along the way",
    link: "#",
}

const BannerData2 = {
    image: Img2,
    title: "Your Fitness Journey Starts Here – Get Started Today!",
    subtitle: "No matter where you are on your fitness journey, we have everything you need to succeed. From personalized training plans to state-of-the-art equipment and a welcoming community, we are here to help you push past your limits and achieve your goals.",
    link: "#",
};


const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",

}

function App() {
  return <>
    <div className="overflow-x-hidden">
        <div style={bgStyle}>
          <Navbar />
          <Hero />
        </div>
        <Equipment />
        <Banner {...BannerData} />
        <TabComp />
        <Banner {...BannerData2} />
        <Testimonial />
        <Banner2 />
    </div>
    <Footer />
  </>
}

export default App
