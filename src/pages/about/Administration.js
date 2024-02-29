import Navbar from "../Navbar";
import admin from "../../assets/ADMIN.png";

function Administration() {
    return (
        <div>
            <Navbar />
            <h1 className="p-2 blue-seal">Administration</h1>
            <center><img src = {admin} className="admin-picture"/></center>
        </div>
    );
}

export default Administration;