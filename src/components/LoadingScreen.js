import React, { useState, useEffect } from "react";
import "./LoadingScreen.css";

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState(""); // Start with an empty string

  useEffect(() => {
    const fullText = "Welcome to Shail Desai's Portfolio...";
    let index = 0;

    const textInterval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => fullText.substring(0, index + 1)); // Correctly append the characters
        index++;
      } else {
        clearInterval(textInterval);
      }
    }, 100);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 5;
      });
    }, 200);

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <h1 className="typewriter-text">{text}</h1>
        <div className="spinner"></div>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
