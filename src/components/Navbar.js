import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "./Logo";
const contentl = [
  {
    label: "About Me",
    path: "#aboutMe",
    class: "mr-4",
  },
  {
    label: "Education",
    path: "#education",
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
    class: "mx-4",
  },
  {
    label: "Project",
    path: "#project",
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
function Navbar() {
  return (
    <header class="w-full px-32 py-8 font-medium flex items-center justify-between text-shade-1">
      <div class=" absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
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
      </nav>
      <nav class="">
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
    </header>
  );
}

export default Navbar;
