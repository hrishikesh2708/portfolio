import React from "react";
import Layout from "./Layout";
import stockimg from "../assets/stockimage.jpg";

function About() {
  return (
    <div class="flex items-center w-full min-h-screen text-shade-1">
      <Layout className="pt-0">
        <div class="flex items-center justify-between w-full w-1/2">
          <img src={stockimg} alt="" class="w-full h-auto"></img>
        </div>
        <div class="w-1/2">
          <h1>Turning Vision Into Reality With Code And Design.</h1>
          <p>
            As a skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects and
            articles, showcasing my expertise in React.js and web development.
          </p>
        </div>
      </Layout>
    </div>
  );
}

export default About;
