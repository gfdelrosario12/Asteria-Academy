import Navbar from "./Navbar";
import LandingImage from "../assets/Landing Image.png";
function Home() {
  return (
    <div>
      <Navbar />
      <img src={LandingImage} className="landing" />
      <h1 className="mt-3">⭐Welcome to Asteria Academy⭐</h1>
      <p className="text-center fst-italic">
        We Embrace: Cultivating Educators, Evoking Excellence
      </p>
      <p className="text-center">
        Asterians believe that the heart of exceptional education lies in the dedication and
        well-being of our educators. Our commitment extends beyond providing a world-class learning
        environment for students; it encompasses creating a supportive and enriching atmosphere for
        the educators who play a pivotal role in shaping young minds.
      </p>
    </div>
  );
}

export default Home;
