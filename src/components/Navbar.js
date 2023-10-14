import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const content = [
  {
    label: "About Me",
    path: "#aboutMe",
  },
  {
    label: "Education",
    path: "#education",
  },
  {
    label: "Experience",
    path: "#experience",
  },
  {
    label: "Project",
    path: "#project",
  },
  {
    label: "Contact",
    path: "#contact",
  },
];

function Navbar() {
  return (
    <nav class="">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" class="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span class="self-center text-xl font-semibold whitespace-nowrap text-shade-1">
            Hrishikesh Thakur
          </span>
        </a>

        <div class="text-center">
          <button
            class="text-shade-1 bg-shade-5 hover:bg-shade-4 focus:ring-2 focus:ring-shade-1 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
            type="button"
            data-drawer-target="drawer-right-example"
            data-drawer-show="drawer-right-example"
            data-drawer-placement="right"
            aria-controls="drawer-right-example"
          >
            <GiHamburgerMenu />
          </button>
        </div>
        <div
          id="drawer-right-example"
          class="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80 dark:bg-gray-800"
          tabindex="-1"
          aria-labelledby="drawer-right-label"
        >
          <h5
            id="drawer-right-label"
            class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
          >
            <svg
              class="w-4 h-4 mr-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            Right drawer
          </h5>
          <button
            type="button"
            data-drawer-hide="drawer-right-example"
            aria-controls="drawer-right-example"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close menu</span>
          </button>
          <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
            Supercharge your hiring by taking advantage of our{" "}
            <a
              href="#"
              class="text-blue-600 underline font-medium dark:text-blue-500 hover:no-underline"
            >
              limited-time sale
            </a>{" "}
            for Flowbite Docs + Job Board. Unlimited access to over 190K
            top-ranked candidates and the #1 design job board.
          </p>
        </div>
        {content.map((element) => {
          return (
            <a
              type="button"
              href={element.path}
              class="stroke-2 bg-shade-5 hover:bg-shade-4 focus:ring-2 focus:outline-none focus:ring-shade-2 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center"
            >
              {/* {element.icon} */}
              <span class="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                {element.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
