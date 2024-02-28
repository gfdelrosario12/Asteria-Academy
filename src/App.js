import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and other necessary components from react-router-dom
import './App.css';
import Home from './pages/Home';
import Programs from './pages/Programs';
import Contact from './pages/Contact';
import Facilities from './pages/Facilities';
import Seal from './pages/about/Seal';
import Administration from './pages/about/Administration';
import VM from './pages/about/VM';
import Professionalization from './pages/educators/Professionalization';
import Community from './pages/modality/Community';
import HandsOn from './pages/modality/HandsOn';
import TR from './pages/educators/TR';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes basename={process.env.PUBLIC_URL || ''}>
          <Route path="/" element={<Home />} />
          <Route path="/about/seal" element={<Seal />} />
          <Route path="/about/vission-mission" element={<VM />} />
          <Route path="/about/administration" element={<Administration />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/modality/hands-on" element={<HandsOn />} />
          <Route path="/modality/community" element={<Community />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/educators/professionalization" element={<Professionalization />} />
          <Route path="/educators/teachers-and-learners" element={<TR />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
