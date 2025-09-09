import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ServiceOnNav from "./components/ServiceOnNav/ServiceOnNav";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import CornorAnimation from "./components/FixedCornorAnimation/CornorAnimation";
import BelowHero from "./components/Hero/BelowHero";

function App() {
  const [isSeviceOpen, setIsServiceOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <>
      <Navbar openService={setIsServiceOpen} openAbout={setIsAboutOpen} />
      {isSeviceOpen && <ServiceOnNav />}
      {isAboutOpen && <About />}
      <Hero />
      <CornorAnimation />
      <BelowHero />
    </>
  );
}

export default App;
