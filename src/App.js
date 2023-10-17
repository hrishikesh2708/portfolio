import React from "react";
import "./App.css";
import Footer from "./components/footer";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <div className="bg-shade-5">
      <Navbar />
      <About />
      <Education />
      <Experience />
      <Skills />
      {/* projects */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
