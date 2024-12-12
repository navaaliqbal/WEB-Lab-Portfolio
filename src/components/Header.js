import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">My CV</Link>
        <button className="btn btn-primary ms-auto">
          <Link to="/projects" style={{ color: "white", textDecoration: "none" }}>
            View Projects
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Header;
