import React from "react";
import Layout from "./Layout";
import stockimg from "../assets/stockimage.jpg";
import Animatedtext from "./Animatedtext";

function About() {
  return (
    <div
      id="aboutMe"
      class="flex items-center w-full min-h-screen text-shade-1 2xl"
    >
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
              text="Crafting Tomorrow's Technological Marvels Through Curiosity and Code."
              className="!text-6xl !text-left"
            />
            <p class=" my-4 font-medium text-lg ">
              Greetings! I'm Hrishikesh Thakur, an insatiably curious computer
              science enthusiast currently navigating the intricate landscapes
              of data science, machine learning, and software development. My
              academic journey commenced at SRM Institute of Science &
              Technology in Chennai, India, where I honed my skills in Computer
              Science Engineering. Now, as I pursue my Master's in Computer
              Science at the University of Southern California, I find my
              passion ignited by the constant exploration of cutting-edge
              technologies. Driven by an insatiable curiosity, I thrive on
              diving into new realms, unraveling the mysteries of algorithms,
              and crafting solutions that merge creativity with functionality. I
              bring to the table a blend of determination and an unwavering
              commitment to delivering impactful results, making every project
              an opportunity for growth and innovation.
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default About;
