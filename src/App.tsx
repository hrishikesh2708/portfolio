import "./App.css";
import Contact from "@/components/contact/Contact.tsx";
import { Routes, Route } from "react-router-dom";
import Project from "@/components/project/Project.tsx";
import Layout from "@/Layout";
import HomePage from "@/Homepage";
import { Analytics } from "@vercel/analytics/next"

function App() {
  return (
    <Routes>
      <Analytics/>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Project />} />
        {/* <Route path="/experience" element={<ExperiencePage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
