import Navbar from "../Navbar";
import SealImage from "../../assets/seal.png";
import "../../App.css";

function Seal() {
  return (
    <div>
      <Navbar />
      <h1 className="mt-4 blue-seal">SCHOOL SEAL</h1>
      <div className="container"> {/* Add margin to the content section */}
        <div className="seal-container">
          <img src={SealImage} className="seal-image" />
          <div className="seal-content mx-5 fs-4">
            <h2>Asteria Academy</h2>
            <p className="justify">
              A place where each student's brilliance is shown. Asteria Academy, named after the Greek
              word meaning "stars," inspires a love of learning and exploration in every one of its
              students. Its logo, which shows a student reaching for a star, represents our values of
              pushing limits, accepting difficulties, and shining a light on the road to success. At
              Asteria, we strive to create a community in which each person's light is acknowledged
              and their path to excellence is considered uniquely.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Seal;
