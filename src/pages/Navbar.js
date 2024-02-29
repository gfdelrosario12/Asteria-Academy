import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import React, { useState } from "react";
import "../App.css";

function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [modalityOpen, setModalityOpen] = useState(false);
  const [educatorsOpen, setEducatorsOpen] = useState(false);

  return (
    <nav className="navbar navbar-light bg-light p-2">
      <div className="container-fluid">
        <Link to="/">
          <img src={logo} class="logo" alt="logo" />
        </Link>
        <form className="nav-items d-flex">
          <div
            className="dropdown"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <p className="nav-link m-4">About</p>
            <ul className={`dropdown-menu ${aboutOpen ? "show" : ""}`}>
              <li>
                <Link to="/about/seal" className="dropdown-item">
                  School Seal
                </Link>
              </li>
              <li>
                <Link to="/about/vission-mission" className="dropdown-item">
                  Vission and Mission
                </Link>
              </li>
              <li>
                <Link to="/about/administration" className="dropdown-item">
                  Asteria Administration
                </Link>
              </li>
            </ul>
          </div>

          <Link to="/programs" className="nav-link m-4">
            Academic Programs
          </Link>
          <div
            className="dropdown"
            onMouseEnter={() => setModalityOpen(true)}
            onMouseLeave={() => setModalityOpen(false)}
          >
            <p className="nav-link m-4">Learning Modality</p>
            <ul className={`dropdown-menu ${modalityOpen ? "show" : ""}`}>
              <li>
                <Link to="/modality/hands-on" className="dropdown-item">
                  Hands-On Programs
                </Link>
              </li>
              <li>
                <Link to="/modality/community" className="dropdown-item">
                  Community Programs
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/facilities" className="nav-link m-4">
            Facilities
          </Link>
          <div
            className="dropdown"
            onMouseEnter={() => setEducatorsOpen(true)}
            onMouseLeave={() => setEducatorsOpen(false)}
          >
            <p className="nav-link m-4">Educators</p>
            <ul className={`dropdown-menu ${educatorsOpen ? "show" : ""}`}>
            <li>
                <Link to="/educators/teachers-and-learners" className="dropdown-item">
                  Teachers and Learners
                </Link>
              </li>
              <li>
                <Link to="/educators/professionalization" className="dropdown-item">
                  Professionalization
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/contact" className="nav-link m-4">
            Contact Us
          </Link>
          <div className="m-3">
            <button
              type="button"
              class="btn portal"
              data-bs-toggle="modal"
              data-bs-target="#portal"
            >
              Portal
            </button>
          </div>

          <div
            class="modal fade"
            id="portal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-body">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                  <img src = {logo} className="logo"/>
                  <h1 className="p-2 blue-modal">Choose Your Platform</h1>
                  <div className="my-2"><button className="btn portal modal-button-element">SIS</button></div>
                  <div className="my-2"><button className="btn portal modal-button-element">LMS</button></div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="m-3">
            <button
              type="button"
              class="btn enroll"
              data-bs-toggle="modal"
              data-bs-target="#enroll"
            >
              Enroll Now
            </button>
          </div>

          <div
            class="modal fade"
            id="enroll"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-body">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                  <img src = {logo} className="logo"/>
                  <div className="my-2"><button className="btn portal modal-button-element">New Student</button></div>
                  <div className="my-2"><button className="btn portal modal-button-element">Old Student</button></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
