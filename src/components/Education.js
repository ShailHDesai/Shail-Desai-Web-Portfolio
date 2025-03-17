import React from 'react';
import './Education.css';
import { motion } from 'framer-motion';
import PurdueLogo from '../assets/images/Purdue.png';
import CEHSLogo from '../assets/images/CEHS.png';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      <div className="education-container">

        {/* Purdue University Card */}
        <motion.div
          className="education-card"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={PurdueLogo} alt="Purdue University" className="school-logo" />
          <h3>Purdue University (West Lafayette)</h3>
          <p className="date-range">2021 - 2024</p>
          <ul>
            <li>Degree: (Bachelors in Computer & Information Technology)</li>
            <li>Major: CIT (Software Engineering & Big Data Analytics)</li>
            <li>Dean’s List Award: All Semesters (2021 – 2024)</li>
            <li>Overall GPA: 3.90 with Distinction</li>
            <li>Purdue Top 100 Students Member</li>
            <li>Tau Alpha Pi Honor Society Member</li>
          </ul>
        </motion.div>

        {/* Columbus East High School Card */}
        <motion.div
          className="education-card"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img src={CEHSLogo} alt="Columbus East High School" className="school-logo" />
          <h3>Columbus East High School (CEHS)</h3>
          <p className="date-range">2017 - 2021</p>
          <ul>
            <li>Technical Academic Honors</li>
            <li>Honor Roll – All Semesters</li>
            <li>CEHS Robotics Team Lead</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;
