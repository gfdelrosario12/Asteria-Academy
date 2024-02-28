import Navbar from "../Navbar";
import LandingImage from "../../assets/Landing Image.png";

function VM() {
  return (
    <div>
      <Navbar />
      <img src={LandingImage} className="landing" />
      <div className="container">
        <div className="row mt-5">
          <div className="col text-left mx-3">
            <h2>VISION</h2>
            <p className="justify fs-3">
              Our vision is to inspire generations of students at Asteria Academy to aim high and
              pursue their dreams with integrity and resilience. We envision graduates equipped with
              the skills and confidence to make a positive impact, illuminating the path to a
              brighter future, one star at a time.
            </p>
          </div>
          <div className="col text-left mx-3">
            <h2>MISSION</h2>
            <p className="justify fs-3">
              At Asteria Academy, we foster a dynamic learning environment where every student is
              encouraged to reach their full potential. Through personalized instruction and a
              supportive community, we empower students to discover their passions and become
              compassionate leaders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VM;
