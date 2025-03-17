import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';



const projects = [
  {
    title: 'E-Commerce Auto Purchasing and Selling Platform',
    image: require('../assets/images/E-Carmart.png'),
    description: 'A platform for seamless buying and selling of automobiles with secure payment integration and dynamic search features.',
    techStack: 'Node.js | Oracle SQL | MongoDB | React'
  },
  {
    title: 'Purdue IT Services Ticket Chatbot',
    image: require('../assets/images/Purdue_Chatbot.png'),
    description: 'AI-powered chatbot to streamline IT ticket generation and improve response times.',
    techStack: 'Python | MongoDB | AWS Lex | React'
  },
  {
    title: 'Manufacturing Sales Order System',
    image: require('../assets/images/Sales_Order.png'),
    description: 'Automated sales order processing system with real-time inventory tracking.',
    techStack: 'Java | MySQL | Spring Boot'
  },
  {
    title: 'Smart Traffic Management System',
    image: require('../assets/images/Smart_Traffic.jpg'),
    description: 'Analyzed large datasets for predictive insights using real-time data pipelines.',
    techStack: 'Python | MySQL | Kafka | Informatica | Hadoop | BigQuery'
  },
  {
    title: 'AI-Powered Bill of Materials (BOM) Generator',
    image: require('../assets/images/BOMAI.png'),
    description: 'Used OpenAI’s GPT to automatically generate and optimize Bills of Materials (BOM) based on product design and cost efficiency.',
    techStack: 'Python | Flask/Django | Oracle SQL | AWS Lambda Functions'
  },
  {
    title: 'Purdue Campus Bus Route Optimization Using Big Data (BoilerTransit AI)',
    image: require('../assets/images/Purdue_Campus_Connect.jpg'),
    description: 'Analyze real-time bus movement, student boarding data, and campus congestion to suggest dynamic bus route optimizations for better efficiency.',
    techStack: 'Kafka | Spark Streaming | AWS Kinesis | Python'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="tech-stack">{project.techStack}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
