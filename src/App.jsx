/* eslint-disable no-unused-vars */
import About from "./components/About";
import Eyes from "./components/Eyes";
import Feature from "./components/Feature";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Card from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from 'locomotive-scroll';
import Test from "./components/Test";



function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className=' min-h-screen text-white bg-zinc-950'>
        <Navbar />
        <LandingPage />
        <Marquee/>
        <About/>
        <Eyes/>
        <Feature />
        <Card />
        <Footer /> 
        {/* <Test />  */}
    </div>
  )
}

export default App
