import React from "react";
import "./Hero.css";
import { ReactTyped } from "react-typed";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  // Function to scroll to Skills Section
  const scrollToSkills = () => {
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <ReactTyped
          strings={[
            "Hi, My name is Shail.",
            "I specialize in Software Development.",
            "I specialize in Full Stack Development.",
            "I specialize in Data Engineering.",
            "I specialize in Technical Analysis.",
          ]}
          typeSpeed={80}
          backSpeed={50}
          loop
          className="typed-text"
        />
        {/* Button triggers smooth scroll */}
        <button className="cta-button" onClick={scrollToSkills}>
          Explore My Work
        </button>
      </div>

      {/* Scroll Down Arrow */}
      <div className="scroll-down">
        <p>Please scroll down and view my portfolio</p>
        <FaArrowDown className="scroll-arrow" />
      </div>
    </section>
  );
};

export default Hero;
