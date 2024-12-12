import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/LeftBar.css";


const LeftBar = () => {
  return (
      <div className="sidebar">
        <div>
          <h1>Navaal Iqbal</h1>
          <div className="profile-pic">
            <img src="/new.jpg" alt="Navaal Iqbal" />
          </div>
          <h2>Software Engineer</h2>

          <div className="sidebar-section">
            <h3>Contact</h3>
            <ul>
              <li><i className="fa fa-home"></i> House 165 A, Rawalpindi, Pakistan</li>
              <li><i className="fa fa-phone"></i> (+92) 320-5474144</li>
              <li><i className="fa fa-envelope"></i> 
                <a href="mailto:niqbal.bese22seecs@seecs.edu.pk" style={{ color: "#ecf0f1", textDecoration: "none" }}>
                  niqbal.bese22seecs@seecs.edu.pk
                </a>
              </li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>Certifications</h3>
            <ul>
              <li><i className="fa fa-certificate"></i> Certified Machine Learning Specialist</li>
              <li><i className="fa fa-certificate"></i> Data Science Professional Certificate</li>
              <li><i className="fa fa-certificate"></i> AWS Certified Cloud Practitioner</li>
            </ul>
          </div>

          <div className="d-flex justify-content-center">
            <a href="https://github.com/navaaliqbal" target="_blank" className="btn-social">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="https://www.linkedin.com/in/navaal-iqbal-460945253/" target="_blank" className="btn-social">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>

        <footer>&copy; 2024 Navaal Iqbal. All rights reserved.</footer>
      </div>
  );
};

export default LeftBar;
