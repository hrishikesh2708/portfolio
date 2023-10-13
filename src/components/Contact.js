import React from "react";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
function Contact() {
  const content = [
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
      label: "Email",
      icon: <HiOutlineMail />,
      link: "mailto:hthakur@usc.edu",
    },
    {
      label: "Instagram",
      icon: <BsInstagram />,
      link: "https://www.instagram.com/hrishikesh_thakur_/?next=%2F",
    },
  ];
  return (
    <div id="contact">
      <div>
        <h3>Let's Talk!</h3>
        <p>
          Interested in working together or have a question? Feel free to reach
          out. I'm here to help you turn your ideas into amazing digital
          realities. Looking forward to hearing from you soon!
        </p>
        <div>
          {content.map((element) => {
            return (
              <a
                type="button"
                href={element.link}
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {element.icon}
                <span class="sr-only">{element.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Contact;
