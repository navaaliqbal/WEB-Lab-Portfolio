import React from "react";
import './Projects.css';

const projects = [
  {
    title: "Remote Sensing Image Change Detection with Transformers",
    description: "Detect meaningful changes between pairs of images taken at different time intervals using transformer models.",
    technologies: "Python, TensorFlow, PyTorch, BIT Transformer, Google Earth Engine, Rasterio",
  },
  {
    title: "Cosmetic Retail System",
    description: "Inventory management, sales tracking, and customer engagement system.",
    technologies: "C#, Windows Forms, Microsoft SQL Server",
  },
  {
    title: "House Price Prediction Model",
    description: "Predict house prices using machine learning techniques with feature scaling.",
    technologies: "Python, scikit-learn, Pandas, Matplotlib",
  },
  {
    title: "Spam SMS Detection",
    description: "A web application to classify spam and legitimate messages using NLP techniques.",
    technologies: "Python, Streamlit, scikit-learn, NLP",
  },
  {
    title: "Movies Recommendation System",
    description: "Provide personalized movie recommendations using content-based filtering techniques.",
    technologies: "Python, Streamlit, pandas, scikit-learn",
  },
  {
    title: "Traffic Signs Classification using CNNs",
    description: "Classify traffic signs to enhance autonomous driving systems.",
    technologies: "Python, Keras, CNNs, OpenCV",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-technologies">{project.technologies}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
