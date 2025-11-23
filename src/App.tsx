import "./App.css";
import Contact from "@/components/contact/Contact.tsx";
import Navigation from "./components/Navigation.tsx";
import { Toaster } from "@/components/ui/sonner";
import { Routes, Route } from "react-router-dom";
import Project from "@/components/project/Project.tsx";
import Skills from "@/components/Skills.tsx";
import Lanyard from "@/components/Lanyard.tsx";
import AnimatedWaveFooter from "@/components/footer/Footer.tsx";
import ContactHero from "@/components/contact/ContactHero.tsx";
import ProjectHero from "@/components/project/ProjectHero.tsx";
import Introduction from "@/components/Introduction.tsx";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import AboutMe from "@/components/about/AboutMe.tsx";

function App() {
  return (
    <div className="mx-auto max-w-[1440px]">
      <div className="fixed top-6 max-w-[1440px] w-full z-50 h-16">
        <Navigation />
      </div>
      <div className="w-full">
        <Introduction />
      </div>
      <div>
        {/* <Lanyard position={[10, 0, 30]} gravity={[0, -40, 0]} transparent={true} fov={20}/> */}
        <AboutMe />
        {/* <ProjectHero />
        <Skills />
        <ContactHero />
        <AnimatedWaveFooter /> */}
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
        </Routes>
        <Toaster />
      </div>
    </div>
  );
}

export default App;
