import React from "react";
import "./App.css";
import Footer from "./components/footer";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="">
      <Navbar />
      {/* about me */}
      <Education />
      <Skills />
      <Experience />
      {/* projects */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
