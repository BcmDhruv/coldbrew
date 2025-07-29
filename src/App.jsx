import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import CaseStudy from "./Pages/CaseStudy";
import LoaderText from "./Components/LoaderText";
import "./Styles/Responsive.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [startFade, setStartFade] = useState(false);

  useEffect(() => {
    const startFadeTimer = setTimeout(() => setStartFade(true), 4000);
    const endLoaderTimer = setTimeout(() => setLoading(false), 5500);
    return () => {
      clearTimeout(startFadeTimer);
      clearTimeout(endLoaderTimer);
    };
  }, []);

  return (
    <>
      {/* {loading && <LoaderText fadeOut={startFade} />}
      <div className={`app-content ${!loading ? "visible" : ""}`}> */}
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/case-studies" element={<CaseStudy />} />
          </Routes>
          <Footer />
        </Router>
      {/* </div> */}
    </>
  );
};

export default App;
