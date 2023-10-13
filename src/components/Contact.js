import React from "react";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
function Contact() {
  const content = [
    {
      label: "Email",
      icon: <HiOutlineMail />,
      link: "mailto:hthakur@usc.edu",
    },
    {
      label: "linkedIn",
      icon: <BsLinkedin />,
      link: "https://www.linkedin.com/in/hrishikesh--thakur/",
    },
    {
      label: "Github",
      icon: <BsGithub />,
      link: "https://github.com/hrishikesh2708",
    },

    {
      label: "Instagram",
      icon: <BsInstagram />,
      link: "https://www.instagram.com/hrishikesh_thakur_/?next=%2F",
    },
  ];
  return (
    <div id="contact">
      <h4 class="text-md font-bold text-shade-1 p-1 m-2 underline underline-offset-8">
        Contact
      </h4>
      <div className="block min-w-0 max-w-sm h-auto p-6 m-6 bg-shade-4 border border-shade-3 text-shade-1 rounded-lg flex flex-col">
        <h1 className="text-lg font-bold flex justify-center mt-4">Let's Talk!</h1>
        <p className="text-sm italic subpixel-antialiased text-shade-2 text-center mt-4">
          Interested in working together or have a question? Feel free to reach
          out. I'm here to help you turn your ideas into amazing digital
          realities. Looking forward to hearing from you soon!
        </p>
        <div className="flex justify-center mt-4">
          {content.map((element) => {
            return (
              <a
                type="button"
                href={element.link}
                class="text-shade-1 stroke-2 bg-shade-5 hover:bg-shade-4 focus:ring-2 focus:outline-none focus:ring-shade-2 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2"
              >
                {element.icon}
                <span class="text-xs">
                  {element.label === "Email" ? "hthakur@usc.edu" : ""}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Contact;
