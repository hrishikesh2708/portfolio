import React from "react";
import "./App.css";
import Footer from "./components/footer";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";

function App() {
  return (
    <div className="bg-blue-500 text-gray-500">
      {/* navbar */}
      {/* about me */}
      <Education />
      <Skills />
      <Experience />
      {/* projects */}
      {/* connect */}
      <Footer />
    </div>
  );
}

export default App;
