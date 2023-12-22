import React, { useState } from "react";
import Logo from "./Logo";
import { LinkedIn, Github, Instagram, Email } from "./Icons";
import { motion } from "framer-motion";
const contentl = [
  {
    label: "About Me",
    path: "#aboutMe",
    id: "aboutMe",
    class: "mr-4",
  },
  {
    label: "Education",
    path: "#education",
    id: "education",
    class: "mx-4",
  },
  // {
  //   label: "Contact",
  //   path: "#contact",
  //   class: "ml-4",
  // },
];
const contentr = [
  {
    label: "Experience",
    path: "#experience",
    id: "experience",
    class: "mx-4",
  },
  {
    label: "Project",
    path: "#project",
    id: "project",
    class: "mx-4",
  },
];
const Customlink = ({ href, title, className = "" }) => {
  return (
    <a href={href} class={`${className} relative group`}>
      {title}
      <span class=" h-[0.1px] inline-block w-full bg-shade-1 left-0 -bottom-0.5 absolute group-hover:w-full transition-[width] ease duration-300">
        &nbsp;
      </span>
    </a>
  );
};
const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const click = () => {
    const targetElement = document.getElementById(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    toggle();
  };
  return (
    <button href={href} class={`${className} relative group`} onClick={click}>
      {title}
      <span class=" h-[0.1px] inline-block w-full bg-shade-1 left-0 -bottom-0.5 absolute group-hover:w-full transition-[width] ease duration-300">
        &nbsp;
      </span>
    </button>
  );
};
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handelClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header class="w-full px-32 py-8 font-medium flex items-center justify-between text-shade-1 relative">
      <button
        class="flex-col justify-center items-center hidden lg:flex"
        onClick={handelClick}
      >
        <span
          class={`bg-shade-1 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : " -translate-y-0.5"
          }`}
        ></span>
        <span
          class={`bg-shade-1 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm m-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          class={`bg-shade-1 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : `translate-y-0.5`
          }`}
        ></span>
      </button>
      <div class=" absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
      <div class="w-full flex justify-between items-center lg:hidden">
        <nav class="">
          {contentl.map((element) => {
            return (
              <Customlink
                href={element.path}
                title={element.label}
                className={`${element.class}`}
              />
            );
          })}
          {contentr.map((element) => {
            return (
              <Customlink
                href={element.path}
                title={element.label}
                className={`${element.class}`}
              />
            );
          })}
        </nav>
        <nav class="flex items-center justify-center flex-wrap">
          <motion.a
            href="#"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            class="w-6 mr-3"
          >
            <Github />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            class="w-6 mx-3"
          >
            <LinkedIn />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            class="w-6 mx-3"
          >
            <Instagram />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            class="w-6 ml-3"
          >
            <Email />
          </motion.a>
        </nav>
      </div>
      {isOpen ? (
        <div class="bg-shade-3/90 rounded-lg min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-md py-32">
          <nav class=" flex items-center flex-col justify-center">
            {contentl.map((element) => {
              return (
                <CustomMobileLink
                  href={element.id}
                  title={element.label}
                  className={`${element.class}`}
                  toggle={handelClick}
                />
              );
            })}
            {contentr.map((element) => {
              return (
                <CustomMobileLink
                  href={element.id}
                  title={element.label}
                  className={`${element.class}`}
                  toggle={handelClick}
                />
              );
            })}
          </nav>
          <nav class="flex items-center justify-center flex-wrap">
            <motion.a
              href="#"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              class="w-6 mr-3"
            >
              <Github />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              class="w-6 mx-3"
            >
              <LinkedIn />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              class="w-6 mx-3"
            >
              <Instagram />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              class="w-6 ml-3"
            >
              <Email />
            </motion.a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
