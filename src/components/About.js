import React from "react";
import Layout from "./Layout";
import stockimg from "../assets/stockimage.jpg";
import Animatedtext from "./Animatedtext";

function About() {
  return (
    <div class="flex items-center w-full min-h-screen text-shade-1">
      <Layout className="pt-0">
        <div class="flex items-center justify-between w-full">
          <div class="w-1/2">
            <img
              src={stockimg}
              alt="image"
              class="w-full h-auto"
              priority
              sizes="(max-width: 768px) 100vw,(max-width:1200px) 50vw,50vw"
            />
          </div>
          <div class="w-1/2 flex flex-col items-center self-center">
            <Animatedtext
              text="Turning Vision Into Reality With Code And Design."
              className="!text-6xl !text-left"
            />
            <p class=" my-4 font-medium">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default About;
