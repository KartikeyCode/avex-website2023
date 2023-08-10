import { useState, useEffect, React } from "react";
import { motion } from "framer-motion";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import PreLoader from "./components/PreLoader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Slider from "./components/Slider";
import Features from "./components/Features";
import Collage from "./components/Collage";
import Footer from "./components/Footer";
import { Waitlist } from "./components/Waitlist.jsx";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const MainComponent = () => (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ ease: "easeInOut", duration: 2 }}
      className="">
      <Navbar />
      <Hero />
      <About />
      <Slider />
      <Features />
      <Collage />
      <Footer />
    </motion.div>
  );

  return (
    <BrowserRouter>
      <div className="bg-[#F2F2F2]">
        {loading ? (
          <PreLoader />
        ) : (
          <Routes>
            <Route exact path="/" element={<MainComponent />} />
            <Route path="/waitlist" element={<Waitlist />} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
