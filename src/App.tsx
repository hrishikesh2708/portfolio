import "./App.css";
import Contact from "@/components/contact/Contact.tsx";
import { Routes, Route } from "react-router-dom";
import Project from "@/components/project/Project.tsx";
import Layout from "@/Layout";
import HomePage from "@/Homepage";
import { Analytics, type BeforeSendEvent } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Analytics
        beforeSend={(event: BeforeSendEvent) => {
          if (event.url.includes("/private")) {
            return null;
          }
          return event;
        }}
      />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Project />} />
          {/* <Route path="/experience" element={<ExperiencePage />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
