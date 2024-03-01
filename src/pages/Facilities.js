import React from "react";
import Navbar from "./Navbar";
import ramp from "../assets/ramps.jpg";
import pavement from "../assets/Tactile pavement.jpg";
import toilet from "../assets/Toilet.jpg";
import classroom from "../assets/Classroom.jpg";
import chapel from "../assets/Chapel.jpg";
import sign from "../assets/sign.jpg";
import "../App.css";
import Carousel from "./carousels/Carousel";

function Facilities() {
  const AVR = [
    { src: require('../assets/Carousels/AVR/AVR1.png'), alt: "AVR 1" },
    { src: require('../assets/Carousels/AVR/AVR2.png'), alt: "AVR 2" }
  ];

  const Canteen = [
    { src: require('../assets/Carousels/Canteen/Canteen1.png'), alt: "Canteen 1" },
    { src: require('../assets/Carousels/Canteen/Canteen2.png'), alt: "Canteen 2" },
    { src: require('../assets/Carousels/Canteen/Canteen3.png'), alt: "Canteen 3" },
    { src: require('../assets/Carousels/Canteen/Canteen4.png'), alt: "Canteen 4" },
    { src: require('../assets/Carousels/Canteen/Canteen5.png'), alt: "Canteen 5" },
    { src: require('../assets/Carousels/Canteen/Canteen6.png'), alt: "Canteen 6" },
    { src: require('../assets/Carousels/Canteen/Canteen7.png'), alt: "Canteen 7" },
    { src: require('../assets/Carousels/Canteen/Canteen8.png'), alt: "Canteen 8" },
    { src: require('../assets/Carousels/Canteen/Canteen9.png'), alt: "Canteen 9" }
  ];
  
  const Chapel = [
    { src: require('../assets/Carousels/Chapel/Chapel1.png'), alt: "Chapel 1" },
    { src: require('../assets/Carousels/Chapel/Chapel2.png'), alt: "Chapel 2" },
    { src: require('../assets/Carousels/Chapel/Chapel3.png'), alt: "Chapel 3" },
    { src: require('../assets/Carousels/Chapel/Chapel4.png'), alt: "Chapel 4" },
    { src: require('../assets/Carousels/Chapel/Chapel5.png'), alt: "Chapel 5" },
    { src: require('../assets/Carousels/Chapel/Chapel6.png'), alt: "Chapel 6" },
    { src: require('../assets/Carousels/Chapel/Chapel7.png'), alt: "Chapel 7" },
    { src: require('../assets/Carousels/Chapel/Chapel8.png'), alt: "Chapel 8" },
    { src: require('../assets/Carousels/Chapel/Chapel9.png'), alt: "Chapel 9" },
    { src: require('../assets/Carousels/Chapel/Chapel10.png'), alt: "Chapel 10" },
    { src: require('../assets/Carousels/Chapel/Chapel11.png'), alt: "Chapel 11" }
  ];
  
  const Classrooms = [
    { src: require('../assets/Carousels/Classrooms/C1.png'), alt: "Classroom 1" },
    { src: require('../assets/Carousels/Classrooms/C2.png'), alt: "Classroom 2" },
    { src: require('../assets/Carousels/Classrooms/C3.png'), alt: "Classroom 3" },
    { src: require('../assets/Carousels/Classrooms/C4.png'), alt: "Classroom 4" },
    { src: require('../assets/Carousels/Classrooms/C5.png'), alt: "Classroom 5" },
    { src: require('../assets/Carousels/Classrooms/C6.png'), alt: "Classroom 6" }
  ];
  
  const Clinic = [
    { src: require('../assets/Carousels/Clinic/Clinic1.png'), alt: "Clinic 1" },
    { src: require('../assets/Carousels/Clinic/Clinic2.png'), alt: "Clinic 2" },
    { src: require('../assets/Carousels/Clinic/Clinic3.png'), alt: "Clinic 3" },
    { src: require('../assets/Carousels/Clinic/Clinic4.png'), alt: "Clinic 4" },
    { src: require('../assets/Carousels/Clinic/Clinic5.png'), alt: "Clinic 5" },
    { src: require('../assets/Carousels/Clinic/Clinic6.png'), alt: "Clinic 6" }
  ];
  
  const ComputerLaboratory = [
    { src: require('../assets/Carousels/Computer Laboratory/CL1.png'), alt: "Computer Laboratory 1" },
    { src: require('../assets/Carousels/Computer Laboratory/CL2.png'), alt: "Computer Laboratory 2" },
    { src: require('../assets/Carousels/Computer Laboratory/CL3.png'), alt: "Computer Laboratory 3" },
    { src: require('../assets/Carousels/Computer Laboratory/CL4.png'), alt: "Computer Laboratory 4" }
  ];
  
  const ExteriorAndInterior = [
    { src: require('../assets/Carousels/Exterior And Interior/EI1.png'), alt: "Exterior And Interior 1" },
    { src: require('../assets/Carousels/Exterior And Interior/EI2.png'), alt: "Exterior And Interior 2" },
    { src: require('../assets/Carousels/Exterior And Interior/EI3.png'), alt: "Exterior And Interior 3" },
    { src: require('../assets/Carousels/Exterior And Interior/EI4.png'), alt: "Exterior And Interior 4" },
    { src: require('../assets/Carousels/Exterior And Interior/EI5.png'), alt: "Exterior And Interior 5" },
    { src: require('../assets/Carousels/Exterior And Interior/EI6.png'), alt: "Exterior And Interior 6" }
  ];
  
  const Gym = [
    { src: require('../assets/Carousels/Gym/Gym1.png'), alt: "Gym 1" },
    { src: require('../assets/Carousels/Gym/Gym2.png'), alt: "Gym 2" }
  ];

  return (
    <div>
      <Navbar />
      <h1 className="p-2 blue-seal">Facilities</h1>
      <div className="container">
        <div className="row align-items-start justify">
          <div className="col">
            <div className="d-flex flex-row my-4">
              <img src={ramp} className="facility-image" alt="Wheelchair Ramp" />
              <p className="fs-4">
                <strong>Wheelchair ramps and handrails</strong> - In our school we have wheelchair
                ramps and handrails throughout the campus. It wouldn't be difficult for them to go
                to their classroom or enter the building.
              </p>
            </div>
            <div className="d-flex flex-row my-4">
              <p className="fs-4">
                <strong>Tactile Paving Infrastructure</strong> - The sidewalks of our campus have
                tactile paving which is designed to help people who have vision impairment such as
                blindness and low vision. It helps students to enter the building safely and
                independently.
              </p>
              <img src={pavement} className="facility-image" alt="Wheelchair Ramp" />
            </div>
            <div className="d-flex flex-row my-4">
              <img src={toilet} className="facility-image" alt="Wheelchair Ramp" />
              <p className="fs-4">
                <strong>Accessible Toilet</strong> - We offered accessible toilets for students with
                disabilities. Inside the toilet have a grab bar to help them to maintain their
                balance to avoid injuries and accidents..
              </p>
            </div>
          </div>
          <div className="col">
            <div className="d-flex flex-row my-4">
              <p className="fs-4">
                <strong>Adaptive Classroom Furniture</strong> - We will promote an adaptive
                classroom wherein the seating arrangement of the classroom is adjustable and
                flexible for students who have disabilities. In that way, they will be comfortable
                to engage and collaborating with their classmates.
              </p>
              <img src={classroom} className="facility-image" alt="Wheelchair Ramp" />
            </div>
            <div className="d-flex flex-row my-4">
              <img src={chapel} className="facility-image" alt="Wheelchair Ramp" />
              <p className="fs-4">
                <strong>Mosque Chapel</strong> - At the west side of our campus where the qibla is
                located, we provide a mosque chapel for our Muslim students and teachers. This
                allows them to perform their daily ritual prayers peacefully without being
                disturbed.
              </p>
            </div>
            <div className="d-flex flex-row my-4">
              <p className="fs-4">
                <strong>Basic Sign Language Rooms</strong> - We offered to teach the students
                regarding Basic Sign Language to have access to deaf people. In this way, deaf
                students will feel that they are part of the school.
              </p>
              <img src={sign} className="facility-image" alt="Wheelchair Ramp" />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5">
      <h1 className="p-2 blue-seal">AVR</h1>
        <Carousel images={AVR} id = "avr"/>
        <h1 className="p-2 blue-seal">Canteen</h1>
        <Carousel images={Canteen} id = "canteen"/>
        <h1 className="p-2 blue-seal">Chapel</h1>
        <Carousel images={Chapel} id = "chapel"/>
        <h1 className="p-2 blue-seal">Classrooms</h1>
        <Carousel images={Classrooms} id = "classrooms"/>
        <h1 className="p-2 blue-seal">Clinic</h1>
        <Carousel images={Clinic} id = "clinic"/>
        <h1 className="p-2 blue-seal">Computer Laboratory</h1>
        <Carousel images={ComputerLaboratory} id = "lab"/>
        <h1 className="p-2 blue-seal">School Exterior and Interior</h1>
        <Carousel images={ExteriorAndInterior} id = "ei"/>
        <h1 className="p-2 blue-seal">Gym</h1>
        <Carousel images={Gym} id = "gym"/>
      </div>
    </div>
  );
}

export default Facilities;
