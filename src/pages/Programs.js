import Navbar from "./Navbar";
import "../App.css"

function Programs() {
  return (
    <div>
      <Navbar />
      <h1 className="p-2 blue-seal">ACADEMIC PROGRAMS</h1>
      <div className="container-fluid py-2 px-5">
        <ol className=" fs-3">
          <li>
            <p>
              <strong>Student-Centered Approach:</strong> Our educators seek to understand each
              student's unique strengths, weaknesses, interests, and learning styles.
            </p>
          </li>
          <li>
            <p>
              <strong>Flexible Learning Paths:</strong> Students have the flexibility to progress
              through the curriculum at their own pace.
            </p>
          </li>
          <li>
            <p>
              <strong>Individualized Instruction:</strong> Involve providing differentiated
              assignments, offering targeted interventions, or utilizing adaptive learning
              technologies that adjust content based on individual performance, and we are more than
              willing to provide these to your loved ones.
            </p>
          </li>
          <li>
            <p>
              <strong>Data-Informed Decision Making:</strong> Educators regularly assess student
              progress and use data analytics to identify areas where students may need additional
              support or enrichment.
            </p>
          </li>
          <li>
            <p>
              <strong>Technology Integration:</strong> Digital tools such as learning management
              systems, educational apps, and adaptive software platforms facilitate learning
              experiences both inside and outside the classroom.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Programs;
