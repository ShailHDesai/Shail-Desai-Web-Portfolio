import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion';
import java from '../assets/images/java.png';
import python from '../assets/images/python.png';
import javascript from '../assets/images/javascript.png';
import springboot from '../assets/images/springboot.png';
import csharp from '../assets/images/csharp.png';
import oracle from '../assets/images/oracle.png';
import mysql from '../assets/images/mysql.png';
import postgresql from '../assets/images/postgresql.png';
import mongodb from '../assets/images/mongodb.png';
import dynamodb from '../assets/images/dynamodb.png';
import reactIcon from '../assets/images/react.png';
import angular from '../assets/images/angular.png';
import vue from '../assets/images/vue.png';
import aws from '../assets/images/aws.png';
import azure from '../assets/images/azure.png';
import gcp from '../assets/images/gcp.png';


const skillsData = [
  {
    category: 'Languages',
    skills: [
      { name: 'Java', icon: java },
      { name: 'Python', icon: python },
      { name: 'JavaScript', icon: javascript },
      { name: 'Spring Boot', icon: springboot },
      { name: 'C#', icon: csharp },
    ],
  },
  {
    category: 'Databases – SQL & NoSQL',
    skills: [
      { name: 'Oracle SQL', icon: oracle },
      { name: 'MySQL', icon: mysql },
      { name: 'PostgreSQL', icon: postgresql },
      { name: 'MongoDB', icon: mongodb },
      { name: 'DynamoDB', icon: dynamodb },
    ],
  },
  {
    category: 'Front-End Languages',
    skills: [
      { name: 'React', icon: reactIcon },
      { name: 'Angular', icon: angular },
      { name: 'Vue', icon: vue },
    ],
  },
  {
    category: 'Cloud Computing',
    skills: [
      { name: 'AWS', icon: aws },
      { name: 'MS Azure', icon: azure },
      { name: 'Google Cloud Platform', icon: gcp },
    ],
  },
];

const tornadoAnimation = (index) => ({
  hidden: { opacity: 0, rotate: -360, scale: 0 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      delay: index * 0.1,
      type: 'spring',
      stiffness: 80,
      damping: 10,
    },
  },
});

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      {skillsData.map((category, index) => (
        <motion.div
          key={index}
          className="skills-category"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3>{category.category}</h3>
          <div className="skills-container">
            {category.skills.map((skill, idx) => (
              <motion.div
                key={idx}
                className="skill-card"
                variants={tornadoAnimation(idx)}
              >
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                <p>{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Skills;
