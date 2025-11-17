import "./App.css";
import Contact from "./components/Contact.tsx";
import Navigation from "./components/Navigation.tsx";
import { Toaster } from "@/components/ui/sonner";
import { Routes, Route } from "react-router-dom";
import Project from "./components/Project.tsx";
import Skills from "./components/Skills.tsx";

function App() {
  return (
    <div className="min-h-screen px-1 sm:px-6 md:px-8 lg:px-12 py-6 mx-auto max-w-[2560px]">
      <div className="w-full">
        <Navigation />
        <Toaster />
        <Skills />
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
