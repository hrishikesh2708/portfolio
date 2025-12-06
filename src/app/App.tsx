import Contact from "@/components/contact/Contact.tsx";
import { Routes, Route } from "react-router-dom";
import Project from "@/components/project/Project.tsx";
import Layout from "@/layouts/Layout";
import HomePage from "@/pages/HomePage";
import { Analytics, type BeforeSendEvent } from "@vercel/analytics/react";
import AboutMe from "@/components/about/AboutMe";

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
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Project />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
