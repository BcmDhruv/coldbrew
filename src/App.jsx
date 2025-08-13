import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import CaseStudy from "./Pages/CaseStudy";
import "./Styles/Responsive.css";
import ArksCaseStudy from "./Pages/ArksCaseStudy";
import ChaloCaseStudy from "./Pages/ChaloCaseStudy";
import NiviCaseStudy from "./Pages/NiviCaseStudy";
import YangpooCaseStudy from "./Pages/YangpooCaseStudy";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/case-studies" element={<CaseStudy />} />
          <Route path="/arks-case-study" element={<ArksCaseStudy />} />
          <Route path="/chalo-case-study" element={<ChaloCaseStudy />} />
          <Route path="/asknivi-case-study" element={<NiviCaseStudy />} />
          <Route path="/Yangpoo-case-study" element={<YangpooCaseStudy />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
