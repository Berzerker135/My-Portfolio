import React, { useEffect, useRef, useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import ScrollBar from "./utils/ScrollBar";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollText from "./components/ScrollText";
import Glow from "./utils/Glow";
import Spinner from "./utils/Spinner";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <>
          <ScrollBar />
          <Header />
          <div className="container-all-wrapper">
            <Glow className={"glow-1"} />
            <Glow className={"glow-2"} />
            <Glow className={"glow-3"} />
            <Glow className={"glow-4"} />
            <Glow className={"glow-5"} />
            <Glow className={"glow-6"} />
            <Glow className={"glow-7"} />
            <div className="wrapper">
              <Home />
              <About />
              <Resume />
              <Skills />
              <Services />
              <Projects />
              <Contact />
              <Footer />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
