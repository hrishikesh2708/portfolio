import { Github, Linkedin, Globe } from "lucide-react";

export const socials = [
  {
    name: "LinkedIn",
    icon: <Linkedin />,
    url: "https://www.linkedin.com/in/hrishikesh--thakur/",
  },
  { name: "GitHub", icon: <Github />, url: "https://github.com/hrishikesh2708" },
  { name: "Website", icon: <Globe />, url: "https://www.hrishikeshthakur.com/" },
];

export const openNewTab = (url: string) => {
  window.open(url, "_blank");
};

export function openEmail(to: string, subject = "", body = ""): void {
  try {
    const mailto = `mailto:${encodeURIComponent(
      to
    )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const opened = window.open(mailto, "_self");
    console.log("email");

    // If no mail client is configured or blocked by browser
    if (!opened) {
      alert(`No mail app detected.\nPlease email manually at: ${to}`);
    }
  } catch (error) {
    alert(`No mail app detected.\nPlease email manually at: ${to}`);
  }
}
