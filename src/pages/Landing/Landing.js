import "./Landing.css";
import React from "react";
import Header from "../Content/Header/Header";
import Hero from "../Content/Hero/Hero";
import Intro from "../Content/Intro/Intro";
import Features from "../Content/Features/Features";
import Uniquefeatures from "../Content/Uniquefeatures/Uniquefeatures";
import Roadmap from "../Content/Roadmap/Roadmap";
import Tokenomics from "../Content/Tokenomics/Tokenomics";
import TokenDistribution from "../Content/TokenDistribution/TokenDistribution";
import Footer from "../Content/Footer/Footer";

const Landing = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Intro />
      <Features />
      <Uniquefeatures />
      <Tokenomics />
      <TokenDistribution />
      <Roadmap />
      <Footer />
      {/* <Footer /> */}
    </div>
  );
};

export default Landing;
