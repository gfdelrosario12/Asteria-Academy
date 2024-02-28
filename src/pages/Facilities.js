import Navbar from "./Navbar";
import ramp from "../assets/ramps.jpg";
import pavement from "../assets/Tactile pavement.jpg";
import toilet from "../assets/Toilet.jpg";
import classroom from "../assets/Classroom.jpg";
import chapel from "../assets/Chapel.jpg";
import sign from "../assets/sign.jpg";
import "../App.css";

function Facilities() {
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
    </div>
  );
}

export default Facilities;
