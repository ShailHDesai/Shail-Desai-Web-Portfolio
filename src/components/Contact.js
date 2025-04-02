import React, { useState, useRef } from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaLinkedin } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  // 🔗 Change this URL to your most recent resume link
const resumeURL = "https://contactfunctionstor123.blob.core.windows.net/portfolio-resumes/Shail%20Desai%20-%20Resume%20-%20Updated.pdf";



  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("Error:", error);
          setStatus("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Connect with Me!
      </motion.h2>

      <motion.form
        ref={form}
        className="contact-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <input type="text" name="from_name" placeholder="Name" required />
        <input
          type="email"
          name="from_email"
          placeholder="From: Email Address"
          required
        />
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea name="message" placeholder="Message" rows="6" required />
        <button type="submit">Send Message</button>
        {status && <p className="status">{status}</p>}
      </motion.form>

      {/* Resume Section */}
      <motion.div
        className="resume-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        <p>Want to check my latest resume?</p>
        <div className="resume-buttons">
          <a href={resumeURL} target="_blank" rel="noopener noreferrer" className="resume-button">
            <FaFilePdf size={22} /> View Resume
          </a>
          <a href={resumeURL} download="Shail_Desai_Resume.pdf" className="resume-button">
            <FaFilePdf size={22} /> Download Resume
          </a>
        </div>
      </motion.div>

      {/* LinkedIn Section */}
      <motion.div
        className="linkedin-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        <p>I will contact you back.</p>
        <a
          href="https://www.linkedin.com/in/shail-desai-0a9153313/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          <FaLinkedin size={28} /> Connect with me on LinkedIn
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
