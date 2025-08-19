import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Personal from "./Personal"; // ✅ import it
import Contact from "./Contact";
import Skills from "./Skills";
import Projects from "./Projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects /> } />
          <Route path="personal" element={<Personal />} />
          <Route path="Contact" element={<Contact />} />{/* ✅ route added */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
