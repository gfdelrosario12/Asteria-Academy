import Navbar from "../Navbar";

function Community() {
  return (
    <div>
      <Navbar />
      <h1 className="p-2 blue-seal">HANDS-ON PROGRAMS</h1>
      <div className="container-fluid py-2 px-5">
        <ol className="two-column-list fs-4">
          <li>
            <strong>Act of Kindness Program (AKP)</strong>
            <br />
            “Willing to serve, Willing to commit”
          </li>
          <li>
            <strong>(Go, Grow, Glow Self)</strong>
            <br />
            Go for your dreams - we make your dreams come true to help your passion and creativity.
            <br />
            Grow as an individual - you learn many things such as building your own work and doing
            your own ideas.
            <br />
            Glow like a star 🌟- It's time to shine to make yourself better and stronger.
          </li>
          <li>
            <strong>Family Day</strong>
            <br />
            Give time for yourself to take a break and bond with your family.
          </li>
          <li>
            <strong>Donate your clothes</strong>
            <br />
            We are here to help and donate some clean clothes in good condition to every family.
          </li>
          <li>
            <strong>Clean as you go</strong>
            <br />
            You are responsible for regular cleaning. To ensure the health and safety of the
            students.
          </li>
          <li>
            <strong>Cultural Fair</strong>
            <br />
            We have events where students can share and showcase their traditional clothes, cultural
            foods, customs and more. In this way, students will learn to appreciate the differences
            in culture of their classmates.
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Community;
