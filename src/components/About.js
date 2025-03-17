import React from 'react';
import './About.css';
import profilePic from '../assets/images/profile_pic1.png';
import { motion } from 'framer-motion'; // ✅ Removed ParticlesBackground

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <motion.div
          className="about-text"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <p>
            Hi, I'm Shail! I believe code is the key to unlocking solutions for the constantly evolving opportunities our world is facing, especially in the AI Agentic Era. I am skilled in Software Development, Web Development, and Data Engineering/Analysis—and for me, code and data are always at the center. With expertise in Python, Java, SQL, NoSQL, APIs, and Cloud Technologies (AWS, Google Cloud, Azure), I thrive on building data-driven applications that optimize IT workflows and enhance operational efficiency. Driven by curiosity and a growth mindset, I’m excited to contribute to dynamic tech environments and shape the future with code.
          </p>
        </motion.div>

        <motion.div
          className="about-image"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img src={profilePic} alt="Shail Desai" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
