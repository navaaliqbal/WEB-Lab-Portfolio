import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import ProjectsPage from "./components/ProjectsPage";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="content-container">
          <div className="main-content">
            {/* Replacing Switch with Routes and updating Route definitions */}
            <Routes>
              <Route path="/" element={<MainSection />} />
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
