import Navbar from "./Navbar";
import "../App.css";

function Contact() {
  return (
    <div>
      <Navbar />
      <h1 className="p-2 blue-seal">We'd love to hear from you!</h1>
      <h1 className="p-2 blue-seal">Our school is ready to answer your questions.</h1>
      <div className="container-fluid mt-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <input type="text" placeholder="* Name" className="form-control mb-3"/>
            <input type="text" placeholder="* Contact Number" className="form-control mb-3"/>
            <input type="text" placeholder="* Address" className="form-control mb-3"/>
            <select name="department" id="department" className="form-select mb-3">
              <option value="0">Select Department</option>
              <option value="19"> Finance </option>
              <option value="18"> Registrar </option>
              <option value="17"> Guidance </option>
              <option value="16"> Clinic </option>
              <option value="15"> Admin </option>
              <option value="14"> Grade School </option>
              <option value="12"> Junior High School </option>
              <option value="11"> Senior High School </option>
              <option value="3"> Data Privacy </option>
              <option value="2"> IT Support </option>
            </select>
            <textarea id="w3review" name="w3review" rows="4" className="form-control mb-3" placeholder="Type your message here..."></textarea>
            <div className="text-center">
              <button className="btn portal">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
