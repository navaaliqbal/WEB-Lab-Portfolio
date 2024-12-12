import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftBar from "./LeftBar";
import "../components/MainSection.css";

const MainSection = () => {
  return (
    <div class="container">
         <LeftBar />
    <div className="content">
      <h2>Work Experience</h2>

      <div className="content-section">
        <h4>Machine Learning Intern - NUST SEECS Lab <span style={{ fontStyle: "italic", color: "#092116" }}>(06/2024 - 09/2024)</span></h4>
        <p>Islamabad, Pakistan</p>
        <ul>
          <li>Worked on change detection using remote sensing techniques</li>
          <li>Applied machine learning and deep learning models to satellite imagery</li>
          <li>Developed automated tools to enhance prediction accuracy</li>
        </ul>
      </div>

      <div className="content-section">
        <h4>Campus Ambassador - Royal Cyber <span style={{ fontStyle: "italic", color: "#092116" }}>(05/2024 - Present)</span></h4>
        <p>Remote</p>
        <ul>
          <li>Increasing brand visibility and awareness through creative marketing campaigns.</li>
          <li>Hosting informational sessions and workshops to engage students.</li>
          <li>Assisting with recruitment efforts by promoting internship and job opportunities.</li>
        </ul>
      </div>

      <h2>Projects</h2>

      <div className="content-section">
        <h4>Satellite Image Change Detection</h4>
        <ul>
          <li>Used Vision Transformers and CNNs to detect land-use changes over time.</li>
          <li>Preprocessed satellite images from Google Earth Engine.</li>
          <li>Achieved 75% accuracy using the BIT model on a custom dataset.</li>
        </ul>
      </div>

      <div className="content-section">
        <h4>Spam SMS Detection</h4>
        <ul>
          <li>Created a spam SMS detection app using NLP techniques.</li>
          <li>Deployed the app with Streamlit, achieving 92% accuracy.</li>
        </ul>
      </div>

      <div className="content-section">
        <h4>Data Analysis on COVID-19 Impact</h4>
        <ul>
          <li>Analyzed datasets related to COVID-19 spread and vaccination rates.</li>
          <li>Utilized Python libraries like Pandas and Matplotlib for data visualization.</li>
          <li>Presented findings through interactive dashboards, improving public awareness.</li>
        </ul>
      </div>

      <h2>Skills</h2>

      <div className="skills">
        <ul>
          <li><span className="badge bg-primary">Python</span></li>
          <li><span className="badge bg-success">Java</span></li>
          <li><span className="badge bg-danger">C++</span></li>
          <li><span className="badge bg-info">SQL</span></li>
          <li><span className="badge bg-warning text-dark">HTML</span></li>
          <li><span className="badge bg-primary">CSS</span></li>
          <li><span className="badge bg-danger">JavaScript</span></li>
          <li><span className="badge bg-info">React</span></li>
          <li><span className="badge bg-warning text-dark">TensorFlow</span></li>
          <li><span className="badge bg-primary">PyTorch</span></li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default MainSection;
