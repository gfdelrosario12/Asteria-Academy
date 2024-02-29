import React from 'react';
import ramp from "../../assets/ramps.jpg";
import pavement from "../../assets/Tactile pavement.jpg";
import toilet from "../../assets/Toilet.jpg";
import classroom from "../../assets/Classroom.jpg";
import chapel from "../../assets/Chapel.jpg";
import sign from "../../assets/sign.jpg";

function AVR() {
  return (
    <div>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={ramp} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={pavement} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={toilet} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default AVR;
