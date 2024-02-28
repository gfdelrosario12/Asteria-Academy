import Navbar from "../Navbar";
import "../../App.css";

function HandsOn() {
  return (
    <div>
      <Navbar />
      <h1 className="p-2 blue-seal">HANDS-ON PROGRAMS</h1>
      <div className="container-fluid py-2 px-5">
      <ol className="two-column-list fs-4">
        <li><strong>Project-Based Learning (PBL)</strong><br/>Embark on real-world projects to deepen understanding while honing critical thinking and problem-solving skills.</li>
        <li><strong>STEAM Education</strong><br/>Integrate science, technology, engineering, arts, and mathematics through innovative hands-on projects and experiments.</li>
        <li><strong>Outdoor Education</strong><br/>Step into nature for immersive learning experiences in ecology, biology, and environmental science.</li>
        <li><strong>Service-Learning</strong><br/>Address community needs while developing empathy, social responsibility, and leadership skills through hands-on projects.</li>
        <li><strong>Experiential Field Trips</strong><br/>Expand horizons with engaging visits to museums, historical sites, and scientific institutions.</li>
        <li><strong>Maker Education</strong><br/>Unleash creativity and innovation through hands-on projects in 3D printing, robotics, woodworking, and crafting.</li>
        <li><strong>Culinary Arts Program</strong><br/>Explore nutrition, food preparation, and culinary techniques while embracing cultural diversity and healthy eating habits.</li>
      </ol>
    </div>
    </div>
  );
}

export default HandsOn;
